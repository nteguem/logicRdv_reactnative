import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, Dimensions, Button, TouchableOpacity } from 'react-native';
import { OT, OTSession, OTPublisher, OTSubscriber, OTSubscriberView } from 'opentok-react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../components/global/colors';

const dimensions = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

const mainSubscribersResolution = { width: 1280, height: 720 };
const secondarySubscribersResolution = { width: 352, height: 288 };

const VideoCall = ({ route, navigation }) => {
  const { paiement } = route.params;
  const apiKey = paiement?.tokbox?.apiKey;
  const sessionId = paiement?.tokbox?.sessionId;
  const token = paiement?.tokbox?.token;
  const doctorName = paiement?.etablissement?.nom;

  const [subscriberIds, setSubscriberIds] = useState([]);
  const [localPublishAudio, setLocalPublishAudio] = useState(true);
  const [localPublishVideo, setLocalPublishVideo] = useState(true);
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
      const updatedSubscriberIds = subscriberIds.filter(id => id !== event.streamId);
      setSubscriberIds(updatedSubscriberIds);
      const newStreamProperties = { ...streamProperties };
      delete newStreamProperties[event.streamId];
      setStreamProperties(newStreamProperties);
    },
    error: (error) => {
      console.log('session error:', error);
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
    navigation.navigate('Paiement');
  };

  const handleSubscriberSelection = (subscribers, streamId) => {
    console.log('handleSubscriberSelection', streamId);
    let subscriberToSwap = subscribers.indexOf(streamId);
    let currentSubscribers = subscribers;
    let temp = currentSubscribers[subscriberToSwap];
    currentSubscribers[subscriberToSwap] = currentSubscribers[0];
    currentSubscribers[0] = temp;
    const newStreamProps = { ...streamProperties };
    for (let i = 0; i < currentSubscribers.length; i += 1) {
      if (i === 0) {
        newStreamProps[currentSubscribers[i]] = {
          ...streamProperties[currentSubscribers[i]],
        };
        newStreamProps[currentSubscribers[i]].preferredResolution = mainSubscribersResolution;
      } else {
        newStreamProps[currentSubscribers[i]] = {
          ...streamProperties[currentSubscribers[i]],
        };
        newStreamProps[currentSubscribers[i]].preferredResolution = secondarySubscribersResolution;
      }
    }
    console.log('mainSubscriberStreamId', streamId);
    console.log('streamProperties#2', newStreamProps);
    setMainSubscriberStreamId(streamId);
    setStreamProperties(newStreamProps);
  };

  const renderSubscribers = (subscribers) => {
    console.log('renderSubscribers', subscribers);
    console.log('subscriberIds', subscriberIds);
    console.log('mainSubscriberStreamId', mainSubscriberStreamId);
  
    // Déterminer le flux principal et le déplacer au début de la liste pour qu'il soit affiché en premier
    if (mainSubscriberStreamId) {
      subscribers = subscribers.filter(sub => sub !== mainSubscriberStreamId);
      subscribers.unshift(mainSubscriberStreamId);
    }
  
    // Rendre les vues des flux vidéo
    return (
      <>
        {/* Affichage du texte du médecin en attente de réponse si personne n'a encore rejoint la vidéoconférence */}
        {subscribers.length === 0 && (
          <View style={styles.CallName}>
            <Text style={styles.DR}>{doctorName}</Text>
            <Text style={styles.wait}>En attente de réponse...</Text>
          </View>
        )}
  
        {/* Affichage des flux vidéo */}
        {subscribers.map((streamId, index) => (
          <View
            key={streamId}
            style={[
              styles.subscriberContainer,
              index === 0 ? styles.mainSubscriberContainer : styles.secondarySubscriberContainer,
            ]}>
            <TouchableOpacity
              onPress={() => handleSubscriberSelection(subscribers, streamId)}>
              <OTSubscriberView
                streamId={streamId}
                style={{ width: '100%', height: '100%' }}
              />
            </TouchableOpacity>
          </View>
        ))}
      </>
    );
  };
  
  const videoView = () => {
    return (
      <>
        <View style={styles.fullView}>
          <View style={styles.chiffrement}>
            <Icon
              style={{ color: colors.gray500 }}
              name="lock-outline"
            />
            <Text style={{ color: colors.gray500 }}>Chiffré de bout en bout</Text>
          </View>
          <OTSession
            apiKey={apiKey}
            sessionId={sessionId}
            token={token}
            eventHandlers={sessionEventHandlers}
            options={{ enableStereoOutput: true }}>
            <OTPublisher
              properties={publisherProperties}
              eventHandlers={publisherEventHandlers}
              style={styles.publisherStyle}
            />
            <OTSubscriber
              style={{ height: dimensions.height, width: dimensions.width }}
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
      </>
    );
  };

  return videoView();
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
    marginVertical: 5,
  },

  fullView: {
    flex: 1,
  },
  scrollView: {},
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
    bottom: 70,
    right: 5,
    zIndex: 5,
  },
  mainSubscriberStyle: {
    height: (dimensions.height * 3) / 4 - 50,
  },
  secondarySubscriberContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
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
    height: 35,
    width: 35,
  },
  chiffrement: {
    position: "absolute",
    left: "25%",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 4,
    color: colors.gray500
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
