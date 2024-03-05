import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderIcons } from "../utils/helpers"
import Home from '../screens/Home';
import Notifications from '../screens/Notification';
import Inscription from '../screens/Inscription';
import UserLogin from '../screens/Login';
import ResultatRecherche from '../screens/Resultat';
import DoctorDetails from '../screens/DoctorDetails';
import ConditionOfUse from '../screens/ConditionOfUse';

const Stack = createStackNavigator();

const pageOption = { headerShown: false, gestureDirection: 'horizontal' };


const UnauthenticatedNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" options={pageOption} component={Home} initialParams={{ right: HeaderIcons.MENU }} />
      <Stack.Screen name="Inscription rapide" options={pageOption} component={Inscription} initialParams={{ left: HeaderIcons.GO_BACK, right: HeaderIcons.MENU }} />
      <Stack.Screen name="Se connecter" options={pageOption} component={UserLogin} initialParams={{ left: HeaderIcons.GO_BACK, right: HeaderIcons.MENU }} />
      <Stack.Screen name="Résultat" options={pageOption} component={ResultatRecherche} initialParams={{ left: HeaderIcons.GO_BACK, right: HeaderIcons.MENU }} />
      <Stack.Screen name="Détail du médécin" options={pageOption} component={DoctorDetails} initialParams={{ left: HeaderIcons.GO_BACK, right: HeaderIcons.MENU }} />
      <Stack.Screen name="Notifications" options={pageOption} component={Notifications} initialParams={{ left: HeaderIcons.GO_BACK, right: HeaderIcons.ACCOUNT }} />
      <Stack.Screen name="Conditions Générales d'utilisation" options={pageOption} component={ConditionOfUse} initialParams={{ left: HeaderIcons.GO_BACK }} />
  </Stack.Navigator>
  );
};

export default UnauthenticatedNavigator;
