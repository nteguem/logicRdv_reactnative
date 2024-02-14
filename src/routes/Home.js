import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const pageOption = {headerShown: false, gestureDirection: 'horizontal'};

const UnauthenticatedNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="home" options={pageOption} component={Home} />
    </Stack.Navigator>
  );
};

export default UnauthenticatedNavigator;
