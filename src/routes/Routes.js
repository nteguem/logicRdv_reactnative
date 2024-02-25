import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AuthenticatedNavigator from './AuthenticateNavigator';
import UnauthenticatedNavigator from './UnAuthenticateNavigator';
import DrawerContent from './DrawerContent';
const Drawer = createDrawerNavigator();

const screenOptions = { drawerPosition: 'right', headerShown: false };

const Routes = ({isAuth}) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <DrawerContent {...props} isAuth={isAuth}/>}
        screenOptions={screenOptions}>
        {isAuth ? (
          <Drawer.Screen
            name="Authenticated"
            component={AuthenticatedNavigator}
          />
        ) : (
          <Drawer.Screen
            name="UnauthenticatedNavigator"
            component={UnauthenticatedNavigator}
          />
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
