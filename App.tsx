import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Routes from './src/routes/Routes';
import {initializeApp,setInstallationId, isAuth} from './src/utils/helpers';
import {useDispatch} from 'react-redux';
import {setLoggedIn} from './src/redux/auth/actions';
import {ActivityIndicator} from 'react-native';
import {colors} from './src/components/global/colors';
import FlashMessage from 'react-native-flash-message';
import WonderPush from 'react-native-wonderpush';

const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInstallationId = async () => {
      await WonderPush.subscribeToNotifications(true);
      const installationId = await WonderPush.getInstallationId();
      await setInstallationId(installationId);
  };
  fetchInstallationId();
  }, []);

  useEffect(() => {
    const initialize = async () => {
      try {
        await initializeApp();
        const isLoggedIn = await isAuth();
        dispatch(setLoggedIn(isLoggedIn));
      } catch (error) {
        console.error(
          "Erreur lors de l'initialisation de l'application:",
          error,
        );
      } finally {
        setLoading(false);
      }
    };

    initialize();
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <View style={styles.container}>
          <ActivityIndicator size="large" color={colors.blue} />
        </View>
      ) : (
        <>
          <Routes />
          <FlashMessage position="top" />
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});

export default App;
