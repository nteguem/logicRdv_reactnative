import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AuthenticatedNavigator from './AuthenticateNavigator';
<<<<<<< HEAD
import {HeaderIcons} from '../utils/helpers';
import Notifications from '../screens/Notification';
const Stack = createStackNavigator();
=======
import UnAuthenticatedNavigator from './UnAuthenticateNavigator';
import DrawerContent from './DrawerContent';
const Drawer = createDrawerNavigator();
>>>>>>> 674c7407284d9f6a954df86a026fbba896a03c52

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
<<<<<<< HEAD
          <Stack.Screen
            name="Notifications"
            component={Notifications}
            initialParams={{
              left: HeaderIcons.SEARCH,
              right: HeaderIcons.ACCOUNT 
            }}
=======
          <Drawer.Screen
            name="UnAuthenticatedNavigator"
            component={UnAuthenticatedNavigator}
>>>>>>> 674c7407284d9f6a954df86a026fbba896a03c52
          />
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
