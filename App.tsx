import React, { useEffect, useState } from 'react';
import Routes from './src/routes/Routes';
import { initializeApp } from './src/utils/helpers';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const initialize = async () => {
      try {
       await initializeApp();
      } catch (error) {
        console.error("Erreur lors de l'initialisation de l'application:", error);
      }
    };

    initialize();
  }, []);

  return <Routes isAuth={isAuth} />;
};

export default App;
