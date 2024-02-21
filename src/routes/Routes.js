import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthenticatedNavigator from './AuthenticateNavigator';
import {HeaderIcons} from '../utils/helpers';
import DoctorListScreen from '../screens/DoctorListScreen';
import PatientManagement from '../screens/patient_management';
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
            name="Gestion des patients"
            component={PatientManagement}
            initialParams={{
              left: HeaderIcons.GO_BACK,
              right: HeaderIcons.ACCOUNT,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
