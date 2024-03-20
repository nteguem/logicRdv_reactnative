import React, {Component} from 'react';
import {SafeAreaView, StyleSheet,ScrollView, View,Text, Dimensions, Button,TouchableOpacity} from 'react-native';
import { OT,OTSession,OTPublisher, OTSubscriber,OTSubscriberView,} from 'opentok-react-native';
import * as credentials from './config';
import Icon from 'react-native-vector-icons/MaterialIcons';


const dimensions = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

const mainSubscribersResolution = {width: 1280, height: 720};
const secondarySubscribersResolution = {width: 352, height: 288};

class Video_call  extends Component {
  constructor(props) {
    super(props);
    this.apiKey = credentials.API_KEY;
    this.sessionId = credentials.SESSION_ID;
    this.token = credentials.TOKEN;
    this.state = {
      subscriberIds: [],
      localPublishAudio: true, // Local Audio state
      localPublishVideo: true, // Local Video state
      joinCall: false, // State variable for storing success
      streamProperties: {}, // Handle individual stream properties,
      mainSubscriberStreamId: null,
    };

    this.sessionEventHandlers = {
      streamCreated: (event) => {
        const streamProperties = {
          ...this.state.streamProperties,
          [event.streamId]: {
            subscribeToAudio: true,
            subscribeToVideo: true,
          },
        };
        this.setState({
          streamProperties,
          subscriberIds: [...this.state.subscriberIds, event.streamId],
        });
        console.log('streamCreated', this.state);
      },
      streamDestroyed: (event) => {
        const indexToRemove = this.state.subscriberIds.indexOf(event.streamId);
        const newSubscriberIds = this.state.subscriberIds;
        const streamProperties = {...this.state.streamProperties};
        if (indexToRemove !== -1) {
          delete streamProperties[event.streamId];
          newSubscriberIds.splice(indexToRemove, 1);
          this.setState({subscriberIds: newSubscriberIds});
        }
      },
      error: (error) => {
        console.log('session error:', error);
      },
      otrnError: (error) => {
        console.log('Session otrnError error:', error);
      },
      sessionDisconnected: () => {
        this.setState({
          streamProperties: {},
          subscriberIds: [],
        });
      },
    };

    this.publisherEventHandlers = {
      streamCreated: (event) => {
        console.log('Publisher stream created!', event);
      },
      streamDestroyed: (event) => {
        console.log('Publisher stream destroyed!', event);
      },
      audioLevel: (event) => {
        /* console.log('AudioLevel', typeof event); */
      },
    };

    this.subscriberEventHandlers = {
      connected: () => {
        console.log('[subscriberEventHandlers - connected]');
      },
      disconnected: () => {
        console.log('[subscriberEventHandlers - disconnected]');
      },
      error: (error) => {
        console.log('subscriberEventHandlers error:', error);
      },
    };

    this.publisherProperties = {
      cameraPosition: 'front',
    };
  }

  toggleAudio = () => {
    let publishAudio = this.state.localPublishAudio;
    this.publisherProperties = {
      ...this.publisherProperties,
      publishAudio: !publishAudio,
    };
    this.setState({
      localPublishAudio: !publishAudio,
    });
  };

  toggleVideo = () => {
    let publishVideo = this.state.localPublishVideo;
    this.publisherProperties = {
      ...this.publisherProperties,
      publishVideo: !publishVideo,
    };
    this.setState({
      localPublishVideo: !publishVideo,
    });
    console.log('Video toggle', this.publisherProperties);
  };

  toggleCamera = () => {
    const { cameraPosition } = this.publisherProperties;
    const newCameraPosition = cameraPosition === 'front' ? 'back' : 'front';
    this.publisherProperties = {
      ...this.publisherProperties,
      cameraPosition: newCameraPosition,
    };
    console.log(newCameraPosition);
    
    this.setState({
      publisherProperties: this.publisherProperties
    });
  };
  

  joinCall = () => {
    const {joinCall} = this.state;
    if (!joinCall) {
      this.setState({joinCall: true});
    }
  };

  endCall = () => {
    const {joinCall} = this.state;
    if (joinCall) {
      this.setState({joinCall: !joinCall});
    }
  };

  /**
   * // todo check if the selected is a publisher. if so, return
   * @param {*} subscribers
   */
  handleSubscriberSelection = (subscribers, streamId) => {
    console.log('handleSubscriberSelection', streamId);
    let subscriberToSwap = subscribers.indexOf(streamId);
    let currentSubscribers = subscribers;
    let temp = currentSubscribers[subscriberToSwap];
    currentSubscribers[subscriberToSwap] = currentSubscribers[0];
    currentSubscribers[0] = temp;
    this.setState((prevState) => {
      const newStreamProps = {...prevState.streamProperties};
      for (let i = 0; i < currentSubscribers.length; i += 1) {
        if (i === 0) {
          newStreamProps[currentSubscribers[i]] = {
            ...prevState.streamProperties[currentSubscribers[i]],
          };
          newStreamProps[
            currentSubscribers[i]
          ].preferredResolution = mainSubscribersResolution;
        } else {
          newStreamProps[currentSubscribers[i]] = {
            ...prevState.streamProperties[currentSubscribers[i]],
          };
          newStreamProps[
            currentSubscribers[i]
          ].preferredResolution = secondarySubscribersResolution;
        }
      }
      console.log('mainSubscriberStreamId', streamId);
      console.log('streamProperties#2', newStreamProps);
      return {
        mainSubscriberStreamId: streamId,
        streamProperties: newStreamProps,
      };
    });
  };

  handleScrollEnd = (event, subscribers) => {
    console.log('handleScrollEnd', event.nativeEvent); // event.nativeEvent.contentOffset.x
    console.log('handleScrollEnd - events', event.target); // event.nativeEvent.contentOffset.x
    let firstVisibleIndex;
    if (
      event &&
      event.nativeEvent &&
      !isNaN(event.nativeEvent.contentOffset.x)
    ) {
      firstVisibleIndex = parseInt(
        event.nativeEvent.contentOffset.x / (dimensions.width / 2),
        10,
      );
      console.log('firstVisibleIndex', firstVisibleIndex);
    }
    this.setState((prevState) => {
      const newStreamProps = {...prevState.streamProperties};
      if (firstVisibleIndex !== undefined && !isNaN(firstVisibleIndex)) {
        for (let i = 0; i < subscribers.length; i += 1) {
          if (i === firstVisibleIndex || i === firstVisibleIndex + 1) {
            newStreamProps[subscribers[i]] = {
              ...prevState.streamProperties[subscribers[i]],
            };
            newStreamProps[subscribers[i]].subscribeToVideo = true;
          } else {
            newStreamProps[subscribers[i]] = {
              ...prevState.streamProperties[subscribers[i]],
            };
            newStreamProps[subscribers[i]].subscribeToVideo = false;
          }
        }
      }
      return {streamProperties: newStreamProps};
    });
  };

  renderSubscribers = (subscribers) => {
    console.log('renderSubscribers', subscribers);
    console.log('this.state.subscriberIds', this.state.subscriberIds);
    console.log(
      'this.state.mainSubscriberStreamId',
      this.state.mainSubscriberStreamId,
    );
    if (this.state.mainSubscriberStreamId) {
      subscribers = subscribers.filter(
        (sub) => sub !== this.state.mainSubscriberStreamId,
      );
      subscribers.unshift(this.state.mainSubscriberStreamId);
    }
    console.log('renderSubscribers - sorted', subscribers);
    return subscribers.length > 1 ? (
      <>
        <View style={styles.mainSubscriberStyle}>
          
          <TouchableOpacity
            onPress={() =>
              this.handleSubscriberSelection(subscribers, subscribers[0])
            }
            key={subscribers[0]}>
            <OTSubscriberView
              streamId={subscribers[0]}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.secondarySubscribers}>
          <ScrollView
            horizontal={true}
            decelerationRate={0}
            snapToInterval={dimensions.width / 2}
            snapToAlignment={'center'}
            onScrollEndDrag={(e) =>
              this.handleScrollEnd(e, subscribers.slice(1))
            }
            style={{
              width: dimensions.width,
              height: dimensions.height / 4,
            }}>
            {subscribers.slice(1).map((streamId) => (
              <TouchableOpacity
                onPress={() =>
                  this.handleSubscriberSelection(subscribers, streamId)
                }
                style={{
                  width: dimensions.width / 2,
                  height: dimensions.height / 4,
                }}
                key={streamId}>
                <OTSubscriberView
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  key={streamId}
                  streamId={streamId}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </>
    ) : subscribers.length > 0 ? (
      <TouchableOpacity style={styles.fullView}>
        <OTSubscriberView
          streamId={subscribers[0]}
          key={subscribers[0]}
          style={{width: '100%', height: '100%'}}
        />
      </TouchableOpacity>
    ) : (
      <View style = {styles.CallName}>
        <Text style={styles.DR}> Dr Franck </Text>
        <Text style={styles.wait}> En attente de reponse... </Text>
      </View>
    );
  };

  videoView = () => {
    return (
      <>
        <View style={styles.fullView}>

          <View style = {styles.chiffrement}>
            <Icon 
              name='lock-outline'
            />
            <Text> Chiffré de bout en bout</Text>
          </View>
          <OTSession
            apiKey={this.apiKey}
            sessionId={this.sessionId}
            token={this.token}
            eventHandlers={this.sessionEventHandlers}
            options={{enableStereoOutput: true}}>
            <OTPublisher
              properties={this.publisherProperties}
              eventHandlers={this.publisherEventHandlers}
              style={styles.publisherStyle}
            />
            <OTSubscriber
              style={{height: dimensions.height, width: dimensions.width}}
              eventHandlers={this.subscriberEventHandlers}
              streamProperties={this.state.streamProperties}>
              {this.renderSubscribers}
            </OTSubscriber>
          </OTSession>
        </View>

        <View style={styles.buttonView}>
          <View style={styles.circularIconContainer}>
            <Icon
              style={styles.allicon}
              name={this.state.localPublishAudio ? 'mic' : 'mic-off'}
              onPress={this.toggleAudio}
            />
          </View>
          <View style={styles.circularIconContainer}>
            <Icon
              name="flip-camera-ios"
              style={styles.allicon}
              onPress={this.toggleCamera}
            
            />
          </View>
          <View style={styles.circularIconContainer}>
            <Icon
              style={styles.allicon}
              name={this.state.localPublishVideo ? 'videocam' : 'videocam-off'}
              onPress={this.toggleVideo}
            />
          </View>
          <View style={styles.phoneend }>
            <Icon
              style={styles.allicon }
              name="call-end"
              onPress={this.endCall}
            />
          </View>
        </View>
      </>
    );
  };

  joinVideoCall = () => {
    return (
      <SafeAreaView style={styles.fullView}>
        <Button
          onPress={this.joinCall}
          title="JoinCall"
          color="#841584"
          accessibilityLabel="Join call">
          Join Call
        </Button>
      </SafeAreaView>
    );
  };

  render() {
    return this.state.joinCall ? this.videoView() : this.joinVideoCall();
  }
}



const styles = StyleSheet.create({
  buttonView: {
    height: 50,
    backgroundColor: 'transparent', 
    display: 'flex',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginVertical:5,
  },
 
  fullView: {
    flex: 1,
  },
  scrollView: {
    // backgroundColor: Colors.lighter,
  },
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  publisherStyle: {
    width: 100,
    height: 150,
    position: 'absolute',
    bottom:70,
    right: 5,
    zIndex: 5,

  },
  mainSubscriberStyle: {
    height: (dimensions.height * 3) / 4 - 50,
  },
  secondarySubscribers: {
    height: dimensions.height / 4,
  },
  circularIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 35,
    backgroundColor:  '#C0C0C0',
    marginHorizontal: 10,
  },
  phoneend :{
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 35,
    backgroundColor:  '#ff0000',
    marginHorizontal: 10,
  },
  allicon:{
    paddingHorizontal:4,
    paddingVertical:2,
    color: '#fff',
    fontSize: 30,
    height:35,
    width:35,
  },
  chiffrement:{
    position:"absolute",
    left:"25%",
    backgroundColor:"transparent",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    marginVertical:4,
  },
  CallName:{
    justifyContent:"center",
    alignItems:"center",
    flex:1,
  },
  DR:{
    color: "#000",
    fontSize:18,
    fontWeight:"bold",
  },
  wait:{
    fontSize:13,
  }
});

export default Video_call ;
