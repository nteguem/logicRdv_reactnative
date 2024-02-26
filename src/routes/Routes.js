import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AuthenticatedNavigator from './AuthenticateNavigator';
<<<<<<< HEAD
import Home from '../screens/Home';
import {HeaderIcons} from '../utils/helpers';
import Appointments from '../screens/Appointments';
import MotifsScreean from '../screens/motifs';
const Stack = createStackNavigator();
=======
import UnAuthenticatedNavigator from './UnAuthenticateNavigator';
import DrawerContent from './DrawerContent';
const Drawer = createDrawerNavigator();
>>>>>>> 794e28b96c30347721ca635083adecf5ff1ec2dd

const screenOptions = { drawerPosition: 'right', headerShown: false };

const Routes = ({isAuth}) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <DrawerContent {...props} isAuth={isAuth}/>}
        screenOptions={screenOptions}>
        {isAuth ? (
          <Drawer.Screen
            name="AuthenticatedNavigator"
            component={AuthenticatedNavigator}
          />
        ) : (
          <Drawer.Screen
            name="UnAuthenticatedNavigator"
            component={UnAuthenticatedNavigator}
          />
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
