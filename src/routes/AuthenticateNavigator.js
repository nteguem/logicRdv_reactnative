import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CountriesListScreen from '../screens/CountriesListScreen';
import CountryDetailsScreen from "../screens/CountryDetailsScreen";
const Stack = createStackNavigator();
const pageOption = { headerShown: false, gestureDirection: 'horizontal' };


const AuthenticatedNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="CountriesListScreen" >
      <Stack.Screen name="CountriesListScreen" component={CountriesListScreen}  options={pageOption} />
      <Stack.Screen name="CountryDetailsScreen" options={pageOption}  component={CountryDetailsScreen} />
    </Stack.Navigator>
  );
};

export default AuthenticatedNavigator;
