import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthenticatedNavigator from './AuthenticateNavigator';
import {HeaderIcons} from '../utils/helpers';
import Appointments from '../screens/Appointments';
import Home from '../screens/Home';
import Search from '../screens/Search';
import EditProfile from '../screens/EditProfile';
import ConditionOfUse from '../screens/ConditionOfUse';
import Paiement from '../screens/Paiement';
import Message from '../screens/Message';
import ListOfPatients from '../screens/ListOfPatients';
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
            name="Liste des patients"
            component={ListOfPatients}
            initialParams={{
              left: HeaderIcons.GO_BACK,
              right: HeaderIcons.PLUS 
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
