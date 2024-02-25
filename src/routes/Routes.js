import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AuthenticatedNavigator from './AuthenticateNavigator';
import UnauthenticatedNavigator from './UnAuthenticateNavigator';
import Home from '../screens/Home';
import DrawerContent from './DrawerContent';
import {HeaderIcons} from '../utils/helpers';
import Appointments from '../screens/Appointments';
import Inscription from '../screens/Inscription';
import PasswordRecoveryScreen from '../screens/PasswordRecoveryScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const screenOptions = { gestureEnabled: false, headerShown: false };

const StackScreens = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
    {isAuth ? (
      <Stack.Screen
        name="Authenticated"
        component={AuthenticatedNavigator}
      />
    ) : (
      <Stack.Screen
      name="UnauthenticatedNavigator"
      component={UnauthenticatedNavigator}
    />
    )}
  </Stack.Navigator>
  );
};

const DrawerScreens = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />} screenOptions = {{ drawerPosition:'right'}}>
      <Drawer.Screen name="Home" options={screenOptions} component={Home} initialParams={{ right: HeaderIcons.MENU  }} />
      <Drawer.Screen name="Inscription rapide" options={screenOptions} component={Inscription} initialParams={{ left: HeaderIcons.GO_BACK, right: HeaderIcons.MENU  }} />
      <Drawer.Screen name="Se connecter" options={screenOptions} component={Home} initialParams={{ left: HeaderIcons.SEARCH, right: HeaderIcons.ACCOUNT  }} />
      <Drawer.Screen name="Mot de passe oublié" options={screenOptions} component={PasswordRecoveryScreen} initialParams={{ left: HeaderIcons.GO_BACK  }} />
      <Drawer.Screen name="Mes rendez-vous" options={screenOptions} component={Appointments} initialParams={{ left: HeaderIcons.SEARCH, right: HeaderIcons.ACCOUNT  }} />
    </Drawer.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <DrawerContent {...props} />}
        screenOptions = {{ drawerPosition:'right'}}>
        <Drawer.Screen name="DrawerScreens" options={screenOptions} component={DrawerScreens} />
        <Drawer.Screen name="StackScreens" options={screenOptions} component={StackScreens} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
