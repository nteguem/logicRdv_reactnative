/**
 * @format
 */
import 'react-native-gesture-handler';
import { Provider } from "react-redux";
import React from "react";
import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import store from './src/redux/setup/store';

const MyApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => MyApp);
