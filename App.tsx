import React from 'react';
import Routes from './src/routes/Routes';

const App = () => {
  const isAuth = true;
  return <Routes isAuth={isAuth} />;
};

export default App;
