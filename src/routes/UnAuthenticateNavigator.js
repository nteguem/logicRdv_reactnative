import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Paiement from '../screens/Paiement';
import EditProfileOption from '../screens/EditProfileOption';
import EditProfile from '../screens/EditProfile';
import Notifications from '../screens/Notification';
import ConditionOfUse from '../screens/ConditionOfUse';

const Stack = createStackNavigator();

const pageOption = { headerShown: false, gestureDirection: 'horizontal' };


const UnauthenticatedNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      {/*Non authentifié*/}
      <Stack.Screen name="Home" options={pageOption} component={Home} initialParams={{ right: HeaderIcons.MENU  }} />
      {/*Non authentifié*/}
      <Stack.Screen name="Inscription rapide" options={screenOptions} component={Inscription} initialParams={{ left: HeaderIcons.GO_BACK, right: HeaderIcons.MENU  }} />
      {/*Non authentifié*/}
      <Stack.Screen name="Se connecter" options={screenOptions} component={Home} initialParams={{ left: HeaderIcons.GO_BACK, right: HeaderIcons.MENU  }} /> 
      {/*Non authentifié*/}
      {/* <Stack.Screen name="Résultat" options={screenOptions} component={Results} initialParams={{ left: HeaderIcons.GO_BACK, right: HeaderIcons.MENU  }} />  */}

      <Stack.Screen name="Mot de passe oublié" options={screenOptions} component={PasswordRecoveryScreen} initialParams={{ left: HeaderIcons.GO_BACK  }} />
      <Stack.Screen name="Mes rendez-vous" options={screenOptions} component={Appointments} initialParams={{ left: HeaderIcons.SEARCH, right: HeaderIcons.ACCOUNT  }} />
      <Stack.Screen name="Recherche d'un praticien" options={screenOptions} component={Search} initialParams={{ left: HeaderIcons.GO_BACK, right: HeaderIcons.ACCOUNT  }} />
      <Stack.Screen name="Fixer rendez-vous" options={screenOptions} component={Search} initialParams={{ left: HeaderIcons.GO_BACK, right: HeaderIcons.ACCOUNT  }} />
      <Stack.Screen name="Motif du Rendez-vous" options={screenOptions} component={Search} initialParams={{ left: HeaderIcons.GO_BACK, right: HeaderIcons.ACCOUNT  }} />
      <Stack.Screen name="Jour et Heure du Rdv" options={screenOptions} component={Search} initialParams={{ left: HeaderIcons.GO_BACK, right: HeaderIcons.ACCOUNT  }} />
      <Stack.Screen name="Valider le Rendez-vous" options={screenOptions} component={Search} initialParams={{ left: HeaderIcons.GO_BACK, right: HeaderIcons.ACCOUNT  }} />
      <Stack.Screen name="Paiement" options={screenOptions} component={Paiement} initialParams={{ left: HeaderIcons.GO_BACK  }} />
      <Stack.Screen name="Message" options={screenOptions} component={Paiement} initialParams={{ left: HeaderIcons.GO_BACK, right: HeaderIcons.ACCOUNT  }} />
      <Stack.Screen name="Gestion des patients" options={screenOptions} component={Paiement} initialParams={{ left: HeaderIcons.GO_BACK, right: HeaderIcons.ACCOUNT  }} />
      <Stack.Screen name="Liste des patients" options={screenOptions} component={Paiement} initialParams={{ left: HeaderIcons.GO_BACK, right: HeaderIcons.ACCOUNT  }} />
      <Stack.Screen name="Profil" options={screenOptions} component={EditProfileOption} initialParams={{ left: HeaderIcons.GO_BACK, right: HeaderIcons.ACCOUNT  }} />
      <Stack.Screen name="Modification du profil" options={screenOptions} component={EditProfile} initialParams={{ left: HeaderIcons.GO_BACK, right: HeaderIcons.ACCOUNT  }} />
      <Stack.Screen name="Notifications" options={screenOptions} component={Notifications} initialParams={{ left: HeaderIcons.GO_BACK, right: HeaderIcons.ACCOUNT  }} />
      <Stack.Screen name="Conditions Générales d'utilisation" options={screenOptions} component={ConditionOfUse} initialParams={{ left: HeaderIcons.GO_BACK }} />
    </Stack.Navigator>
  );
};

export default UnauthenticatedNavigator;
