import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AuthenticatedNavigator from './AuthenticateNavigator';
import Home from '../screens/Home';
import {HeaderIcons} from '../utils/helpers';
import Appointments from '../screens/Appointments';
import PayementForm from '../screens/Payement';
import ResultatRecherche from '../screens/Resultat';
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
            name="Resultat de la recherche"
            component={ResultatRecherche}
            initialParams={{
              left: HeaderIcons.SEARCH,
              right: HeaderIcons.ACCOUNT 
            }}
          />
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
