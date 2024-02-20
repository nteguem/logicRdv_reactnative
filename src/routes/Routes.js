import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthenticatedNavigator from './AuthenticateNavigator';
import Home from '../screens/Home';
import {HeaderIcons} from '../utils/helpers';
import Notifications from '../screens/Notification';
import Inscription from '../screens/Inscription';
const Stack = createStackNavigator();

const screenOptions = {gestureEnabled: false, headerShown: false};

const Routes = ({isAuth}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        {isAuth ? (
          <Stack.Screen
            name="Authenticated"
            component={AuthenticatedNavigator}
          />
        ) : (
          <Stack.Screen
            name="Inscription rapide"
            component={Inscription}
            initialParams={{
              left: HeaderIcons.GO_BACK,
              right: HeaderIcons.MENU,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
