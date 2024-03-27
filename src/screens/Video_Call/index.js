import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { OTSession, OTPublisher, OTSubscriber, OTSubscriberView } from 'opentok-react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../components/global/colors';
import CustomText from '../../components/global/CustomText';

const VideoCall = ({ route }) => {
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
          // preferredResolution: { width: 1280, height: 720 },
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

  const renderSubscribers = (subscribers) => {
    if (subscribers.length > 0) {
      const streamId = subscribers[0];
      return (
        <OTSubscriberView
          streamId={streamId}
          key={streamId}
          style={{ width: '100%', height: '70%' }}
        />
      );
    } else {
      return (
        <View style={styles.CallName}>
          <CustomText style={styles.DR}> {doctorName} </CustomText>
          <CustomText style={styles.wait}> En attente de réponse... </CustomText>
        </View>
      );
    }
  };


  const videoView = () => {
    return (
      <View style={styles.fullView}>
        <View style={styles.chiffrement}>
          <Icon
            style={{ color: colors.gray }}
            name='lock-outline'
          />
          <CustomText fontSize={12} style={{ color: colors.gray }}> Chiffré de bout en bout</CustomText>
        </View>
        <View style={styles.fullView}>
          <OTSession
            apiKey={apiKey}
            sessionId={sessionId}
            token={token}
            eventHandlers={sessionEventHandlers}
          >
            <OTPublisher
              properties={publisherProperties}
              eventHandlers={publisherEventHandlers}
              style={styles.publisherStyle}
            />
            <OTSubscriber
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
          <View style={styles.phoneend}>
            <Icon
              style={styles.allicon}
              name="call-end"
              onPress={endCall}
            />
          </View>
        </View>
      </View>
    );
  };



  return videoView();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonView: {
    height: 50,
    backgroundColor: 'transparent',
    display: 'flex',
    width: '100%',
    position: 'absolute',
    bottom: 10,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginVertical: 5,
  },

  fullView: {
    flex: 1,
  },
  publisherStyle: {
    position: 'absolute',
    width: 100,
    height: 150,
    bottom: 70,
    right: 5,
    zIndex: 5,
  },
  circularIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 35,
    backgroundColor: '#C0C0C0',
    marginHorizontal: 10,
  },
  phoneend: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 35,
    backgroundColor: '#ff0000',
    marginHorizontal: 10,
  },
  allicon: {
    paddingHorizontal: 4,
    paddingVertical: 2,
    color: '#fff',
    fontSize: 30,
  },
  chiffrement: {
    position: "absolute",
    borderRadius: 10,
    top: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 4,
    color: colors.gray500,
    height: 20,
    width: "100%"
  },
  CallName: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  DR: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  wait: {
    fontSize: 13,
    color: colors.gray500
  }
});

export default VideoCall;