import React, { useEffect } from 'react';
import Routes from './src/routes/Routes';
import { initializeApp,isAuth } from './src/utils/helpers';
import { useDispatch } from 'react-redux';
import { setLoggedIn } from './src/redux/auth/actions'; 

import FlashMessage from 'react-native-flash-message'; 

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const initialize = async () => {
      try {
       await initializeApp();
       const isLoggedIn = await isAuth();
       dispatch(setLoggedIn(isLoggedIn));
      } catch (error) {
        console.error("Erreur lors de l'initialisation de l'application:", error);
      }
    };
    initialize();
  }, [dispatch]);

  return (
    <>
      <Routes  />
      <FlashMessage position="top" /> 
    </>
  );
};

export default App;
