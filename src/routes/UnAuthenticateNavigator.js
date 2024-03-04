import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderIcons } from "../utils/helpers"
import Home from '../screens/Home';
import Search from '../screens/Search';
import Appointments from '../screens/Appointments';
import Paiement from '../screens/Paiement';
import EditProfileOption from '../screens/EditProfileOption';
import EditProfile from '../screens/EditProfile';
import Notifications from '../screens/Notification';
import ConditionOfUse from '../screens/ConditionOfUse';
import Inscription from '../screens/Inscription';
import PasswordRecoveryScreen from '../screens/PasswordRecoveryScreen';
import Message from '../screens/Message';
import ListOfPatients from '../screens/ListOfPatients';
import ListOfDoctor from '../screens/ListOfDoctor';
import UserLogin from '../screens/Login';
import AppointmentPlanification from '../screens/AppointmentPlanification';
import ValidationAppointment from '../screens/ValidationAppointment';
import AppointmentConfirmation from '../screens/AppointmentConfirmation';
import PatientManagement from '../screens/PatientManagment';
import ResultatRecherche from '../screens/Resultat';
import Motifs from '../screens/Motifs';
import DoctorDetails from '../screens/DoctorDetails';

const Stack = createStackNavigator();

const pageOption = { headerShown: false, gestureDirection: 'horizontal' };


const UnauthenticatedNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      {/*Non authentifié*/}
      <Stack.Screen name="Home" options={pageOption} component={Home} initialParams={{ right: HeaderIcons.MENU }} />
      {/*Non authentifié*/}
      <Stack.Screen name="Inscription rapide" options={pageOption} component={Inscription} initialParams={{ left: HeaderIcons.GO_BACK, right: HeaderIcons.MENU }} />
      {/*Non authentifié*/}
      <Stack.Screen name="Se connecter" options={pageOption} component={UserLogin} initialParams={{ left: HeaderIcons.GO_BACK, right: HeaderIcons.MENU }} />
      {/*Non authentifié*/}
      <Stack.Screen name="Résultat" options={pageOption} component={ResultatRecherche} initialParams={{ left: HeaderIcons.GO_BACK, right: HeaderIcons.MENU }} />
      {/*Non authentifié*/}
      <Stack.Screen name="Mot de passe oublié" options={pageOption} component={PasswordRecoveryScreen} initialParams={{ left: HeaderIcons.GO_BACK }} />
      {/*Non authentifié*/}
      <Stack.Screen name="Détail du médécin" options={pageOption} component={DoctorDetails} initialParams={{ left: HeaderIcons.GO_BACK, right: HeaderIcons.MENU }} />

      <Stack.Screen name="Mes rendez-vous" options={pageOption} component={Appointments} initialParams={{ left: HeaderIcons.SEARCH, right: HeaderIcons.ACCOUNT }} />
      <Stack.Screen name="Recherche d'un praticien" options={pageOption} component={Search} initialParams={{ left: HeaderIcons.GO_BACK, right: HeaderIcons.ACCOUNT }} />
      <Stack.Screen name="Fixez rendez-vous" options={pageOption} component={ListOfDoctor} initialParams={{ left: HeaderIcons.GO_BACK, right: HeaderIcons.ACCOUNT }} />
      <Stack.Screen name="Motif du Rendez-vous" options={pageOption} component={Motifs} initialParams={{ left: HeaderIcons.GO_BACK, right: HeaderIcons.ACCOUNT }} />
      <Stack.Screen name="Jour et Heure du Rdv" options={pageOption} component={AppointmentPlanification} initialParams={{ left: HeaderIcons.GO_BACK, right: HeaderIcons.ACCOUNT }} />
      <Stack.Screen name="Confirmation rdv" options={pageOption} component={AppointmentConfirmation} />
      <Stack.Screen name="Valider le Rendez-vous" options={pageOption} component={ValidationAppointment} initialParams={{ left: HeaderIcons.GO_BACK, right: HeaderIcons.ACCOUNT }} />
      <Stack.Screen name="Paiement" options={pageOption} component={Paiement} initialParams={{ left: HeaderIcons.GO_BACK }} />
      <Stack.Screen name="Message" options={pageOption} component={Message} initialParams={{ left: HeaderIcons.GO_BACK, right: HeaderIcons.ACCOUNT }} />
      <Stack.Screen name="Gestion des patients" options={pageOption} component={PatientManagement} initialParams={{ left: HeaderIcons.GO_BACK, right: HeaderIcons.ACCOUNT }} />
      <Stack.Screen name="Liste des patients" options={pageOption} component={ListOfPatients} initialParams={{ left: HeaderIcons.GO_BACK, right: HeaderIcons.ACCOUNT }} />
      <Stack.Screen name="Profil" options={pageOption} component={EditProfileOption} initialParams={{ left: HeaderIcons.GO_BACK, right: HeaderIcons.ACCOUNT }} />
      <Stack.Screen name="Modification du profil" options={pageOption} component={EditProfile} initialParams={{ left: HeaderIcons.GO_BACK, right: HeaderIcons.ACCOUNT }} />
      <Stack.Screen name="Notifications" options={pageOption} component={Notifications} initialParams={{ left: HeaderIcons.GO_BACK, right: HeaderIcons.ACCOUNT }} />
      <Stack.Screen name="Conditions Générales d'utilisation" options={pageOption} component={ConditionOfUse} initialParams={{ left: HeaderIcons.GO_BACK }} />
    </Stack.Navigator>
  );
};

export default UnauthenticatedNavigator;
