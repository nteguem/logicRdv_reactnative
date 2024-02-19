import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthenticatedNavigator from './AuthenticateNavigator';
import Home from '../screens/Home';
import {HeaderIcons} from "../utils/helpers"
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
          <Stack.Screen name="Mes rendez-vous"  component={Home} initialParams={{ left: HeaderIcons.SEARCH, right:HeaderIcons.ACCOUNT }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
