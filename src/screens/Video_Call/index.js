import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, Dimensions, Button, TouchableOpacity } from 'react-native';
import { OT, OTSession, OTPublisher, OTSubscriber, OTSubscriberView } from 'opentok-react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const dimensions = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

const mainSubscribersResolution = { width: 1280, height: 720 };
const secondarySubscribersResolution = { width: 352, height: 288 };

const VideoCall = ( {route} ) => {
  const navigation = useNavigation();
  const { paiement } = route.params;
  const apiKey = paiement?.tokbox?.apiKey;
  const sessionId = paiement?.tokbox?.sessionId;
  const token = paiement?.tokbox?.token;
  const doctorName = paiement?.etablissement?.nom
  

  const [subscriberIds, setSubscriberIds] = useState([]);
  const [localPublishAudio, setLocalPublishAudio] = useState(true);
  const [localPublishVideo, setLocalPublishVideo] = useState(true);
  const [join, setJoinCall] = useState(false);
  const [streamProperties, setStreamProperties] = useState({});
  const [mainSubscriberStreamId, setMainSubscriberStreamId] = useState(null);
  const [publisherProperties, setPublisherProperties] = useState({ cameraPosition: 'front' });
  

  const sessionEventHandlers = {
    streamCreated: (event) => {
      const newStreamProperties = {
        ...streamProperties,
        [event.streamId]: {
          subscribeToAudio: true,
          subscribeToVideo: true,
        },
      };
      setStreamProperties(newStreamProperties);
      setSubscriberIds([...subscriberIds, event.streamId]);
    },
    streamDestroyed: (event) => {
      const indexToRemove = subscriberIds.indexOf(event.streamId);
      if (indexToRemove !== -1) {
        const newSubscriberIds = [...subscriberIds];
        newSubscriberIds.splice(indexToRemove, 1);
        setSubscriberIds(newSubscriberIds);
      }
      const newStreamProperties = { ...streamProperties };
      delete newStreamProperties[event.streamId];
      setStreamProperties(newStreamProperties);
    },
    error: (error) => {
      console.log('session error:', error);
    },
    otrnError: (error) => {
      console.log('Session otrnError error:', error);
    },
    sessionDisconnected: () => {
      setStreamProperties({});
      setSubscriberIds([]);
    },
  };

  const publisherEventHandlers = {
    streamCreated: (event) => {
      console.log('Publisher stream created!', event);
    },
    streamDestroyed: (event) => {
      console.log('Publisher stream destroyed!', event);
    },
    audioLevel: (event) => {
    },
  };

  const subscriberEventHandlers = {
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

  const toggleAudio = () => {
    setLocalPublishAudio(!localPublishAudio);
    setPublisherProperties({
      ...publisherProperties,
      publishAudio: !localPublishAudio,
    });
  };

  const toggleVideo = () => {
    setLocalPublishVideo(!localPublishVideo);
    setPublisherProperties({
      ...publisherProperties,
      publishVideo: !localPublishVideo,
    });
    console.log('Video toggle', publisherProperties);
  };

  const toggleCamera = () => {
    const newCameraPosition = publisherProperties.cameraPosition === 'front' ? 'back' : 'front';
    setPublisherProperties({ ...publisherProperties, cameraPosition: newCameraPosition });
  };

  const endCall = () => {
      setJoinCall(false);
      navigation.navigate('Paiement');
  };

 

  const handleSubscriberSelection = (subscribers, streamId) => {
    console.log('handleSubscriberSelection', streamId);
    let subscriberToSwap = subscribers.indexOf(streamId);
    let currentSubscribers = subscribers;
    let temp = currentSubscribers[subscriberToSwap];
    currentSubscribers[subscriberToSwap] = currentSubscribers[0];
    currentSubscribers[0] = temp;
      const newStreamProps = {...prevstreamProperties};
      for (let i = 0; i < currentSubscribers.length; i += 1) {
        if (i === 0) {
          newStreamProps[currentSubscribers[i]] = {
            ...prevstreamProperties[currentSubscribers[i]],
          };
          newStreamProps[
            currentSubscribers[i]
          ].preferredResolution = mainSubscribersResolution;
        } else {
          newStreamProps[currentSubscribers[i]] = {
            ...prevstreamProperties[currentSubscribers[i]],
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
  };

  const handleScrollEnd = (event, subscribers) => {
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
      const newStreamProps = {...prevstreamProperties};
      if (firstVisibleIndex !== undefined && !isNaN(firstVisibleIndex)) {
        for (let i = 0; i < subscribers.length; i += 1) {
          if (i === firstVisibleIndex || i === firstVisibleIndex + 1) {
            newStreamProps[subscribers[i]] = {
              ...prevstreamProperties[subscribers[i]],
            };
            newStreamProps[subscribers[i]].subscribeToVideo = true;
          } else {
            newStreamProps[subscribers[i]] = {
              ...prevstreamProperties[subscribers[i]],
            };
            newStreamProps[subscribers[i]].subscribeToVideo = false;
          }
        }
      }
      return {streamProperties: newStreamProps};
  };

  const renderSubscribers = (subscribers) => {
    console.log('renderSubscribers', subscribers);
    console.log('subscriberIds', subscriberIds);
    console.log(
      'mainSubscriberStreamId',
      mainSubscriberStreamId,
    );
    if (mainSubscriberStreamId) {
      subscribers = subscribers.filter(
        (sub) => sub !== mainSubscriberStreamId,
      );
      subscribers.unshift(mainSubscriberStreamId);
    }
    console.log('renderSubscribers - sorted', subscribers);
    return subscribers.length > 1 ? (
      <>
        <View style={styles.mainSubscriberStyle}>
          
          <TouchableOpacity
            onPress={() =>
              handleSubscriberSelection(subscribers, subscribers[0])
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
              handleScrollEnd(e, subscribers.slice(1))
            }
            style={{
              width: dimensions.width,
              height: dimensions.height / 4,
            }}>
            {subscribers.slice(1).map((streamId) => (
              <TouchableOpacity
                onPress={() =>
                  handleSubscriberSelection(subscribers, streamId)
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
        <Text style={styles.DR}> {doctorName} </Text>
        <Text style={styles.wait}> En attente de reponse... </Text>
      </View>
    );
  };

  const videoView = () => {
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
              apiKey={apiKey}
              sessionId={sessionId}
              token={token}
              eventHandlers={sessionEventHandlers}
              options={{enableStereoOutput: true}}>
              <OTPublisher
                properties={publisherProperties}
                eventHandlers={publisherEventHandlers}
                style={styles.publisherStyle}
              />
              <OTSubscriber
                style={{height: dimensions.height, width: dimensions.width}}
                eventHandlers={subscriberEventHandlers}
                streamProperties={streamProperties}>
                {renderSubscribers}
              </OTSubscriber>
            </OTSession>
          </View>
  
          <View style={styles.buttonView}>
            <View style={styles.circularIconContainer}>
              <Icon
                style={styles.allicon}
                name={localPublishAudio ? 'mic' : 'mic-off'}
                onPress={toggleAudio}
              />
            </View>
            <View style={styles.circularIconContainer}>
              <Icon
                name="flip-camera-ios"
                style={styles.allicon}
                onPress={toggleCamera}
              
              />
            </View>
            <View style={styles.circularIconContainer}>
              <Icon
                style={styles.allicon}
                name={localPublishVideo ? 'videocam' : 'videocam-off'}
                onPress={toggleVideo}
              />
            </View>
            <View style={styles.phoneend }>
              <Icon
                style={styles.allicon }
                name="call-end"
                onPress={endCall}
              />
            </View>
          </View>
        </>
      );
  };

 

  return  videoView() ;
};

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

export default VideoCall;
