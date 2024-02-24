import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CountriesListScreen from '../screens/CountriesListScreen';
import CountryDetailsScreen from "../screens/CountryDetailsScreen";
import {HeaderIcons} from '../utils/helpers';
import Appointments from '../screens/Appointments';
const Stack = createStackNavigator();
const pageOption = { headerShown: false, gestureDirection: 'horizontal' };


const AuthenticatedNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Mes Rendez-vous" >
      <Stack.Screen name="CountriesListScreen" component={CountriesListScreen}  options={pageOption} />
      <Stack.Screen name="CountryDetailsScreen" options={pageOption}  component={CountryDetailsScreen} />
      <Stack.Screen name="Mes Rendez-vous" options={pageOption} component={Appointments} initialParams={{ left: HeaderIcons.SEARCH, right: HeaderIcons.ACCOUNT  }}/>
    </Stack.Navigator>
  );
};

export default AuthenticatedNavigator;
