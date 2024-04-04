console.warn = () => {}
import React, {useEffect, useState} from 'react';
import {View, StyleSheet,ActivityIndicator,StatusBar} from 'react-native';
import { StripeProvider } from '@stripe/stripe-react-native';
import Routes from './src/routes/Routes';
import {initializeApp,setInstallationId, isAuth,getUserData} from './src/utils/helpers';
import {useDispatch} from 'react-redux';
import {setLoggedIn} from './src/redux/auth/actions';
import {colors} from './src/components/global/colors';
import FlashMessage from 'react-native-flash-message';
import WonderPush from 'react-native-wonderpush';
import CustomModal from './src/components/global/CustomModal';
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
        const userData = await getUserData();
        dispatch(setLoggedIn(isLoggedIn,userData));
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
    <StripeProvider
    publishableKey={"pk_test_hZFvrVBKMDFPgrfkEattC9yj00O3lDXRh1"}
  >
    <StatusBar backgroundColor={colors.blue} barStyle="light-content" />
      {loading ? (
        <View style={styles.container}>
          <ActivityIndicator size="large" color={colors.blue} />
        </View>
      ) : (
        <>
          <Routes />
          <CustomModal/>
          <FlashMessage position="top" />
        </>
      )}
    </StripeProvider>
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
