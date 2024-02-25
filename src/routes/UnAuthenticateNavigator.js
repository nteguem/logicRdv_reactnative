import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Appointments from '../screens/Appointments';
import {HeaderIcons} from "../utils/helpers"
const Stack = createStackNavigator();

const pageOption = { headerShown: false, gestureDirection: 'horizontal' };


const UnauthenticatedNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Mes Rendez-vous">
      <Stack.Screen name="Home" options={pageOption}  component={Home} initialParams={{right: HeaderIcons.MENU  }} />
      <Stack.Screen name="Mes Rendez-vous" options={pageOption} component={Appointments} initialParams={{ left: HeaderIcons.SEARCH, right: HeaderIcons.ACCOUNT  }}/>

    </Stack.Navigator>
  );
};

export default UnauthenticatedNavigator;
