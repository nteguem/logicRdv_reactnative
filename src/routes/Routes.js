import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthenticatedNavigator from './AuthenticateNavigator';
import UnauthenticatedNavigator from './UnAuthenticateNavigator';

const Stack = createStackNavigator();

const screenOptions = { gestureEnabled: false,headerShown: false};


const Routes = ({ isAuth }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        {isAuth ? (
          <Stack.Screen name="Authenticated" component={AuthenticatedNavigator} />
        ) : (
          <Stack.Screen name="Unauthenticated" component={UnauthenticatedNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
