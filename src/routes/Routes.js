import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthenticatedNavigator from './AuthenticateNavigator';
import Home from '../screens/Home';
import {HeaderIcons} from '../utils/helpers';
import Appointments from '../screens/Appointments';
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
            name="Mes Rendez-vous"
            component={Appointments}
            initialParams={{
              left: HeaderIcons.SEARCH,
              right: HeaderIcons.ACCOUNT 
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
