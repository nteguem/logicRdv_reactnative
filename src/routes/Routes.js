import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AuthenticatedNavigator from './AuthenticateNavigator';
import Home from '../screens/Home';
import {HeaderIcons} from '../utils/helpers';
import Notifications from '../screens/Notification';
const Stack = createStackNavigator();

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
          <Stack.Screen
            name="Notifications"
            component={Notifications}
            initialParams={{
              left: HeaderIcons.GO_BACK,
              right: HeaderIcons.ACCOUNT,
            }}
          />
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
