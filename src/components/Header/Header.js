import React from 'react';
import { View, Text, SafeAreaView ,StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { HeaderIcons } from "../../utils/helpers";
import { useDispatch, connect } from 'react-redux';
import * as RootNavigation from "../../routes/RootNavigation";
import { loginRequest } from '../../redux/auth/actions';
import { createAppointmentRequest } from '../../redux/appointment/actions';
const Header= ({ backgroundColor,sessionAuth,navigationAppointment ,sessionAppointment,params}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();

  const handleSearchIconPress = () => {
    navigation.navigate("Recherche d'un praticien");
  };

  const handleGoBack = () => {
    if(route.name === "Se connecter")
    {
      const JsonSession = JSON.parse(sessionAuth);
      if(JsonSession.step == 1)
      {
        navigation.navigate("Home"); 
      }
      else
      {
        dispatch(loginRequest(JsonSession?.email, "previous", sessionAuth));
      }
    }
    else if(route.name === "Inscription rapide")
    {
      navigation.navigate("Home"); 
    }
    else if(typeof navigationAppointment === 'object' && Object.keys(navigationAppointment).length > 0)
    {
     dispatch(createAppointmentRequest(params.tokenappointment, navigationAppointment.prev.onclick_week, navigationAppointment.prev.onclick_data, navigationAppointment.prev.onclick_action, sessionAppointment))
    }
      else if(route.name === "Motif du rendez-vous")
    {
     if(isLoggedIn)
      {navigation.navigate("Home");}
       else
       {navigation.navigate("Mes rendez-vous");}
    }
    else 
    {
      console.log("appointNagigation:",navigationAppointment.prev)
      RootNavigation.goBack();
    }
  };



  const handleDrawerConnectIconPress = () => {
    navigation.openDrawer();
  };

  const renderLeftContent = () => {
    if (route.params && route.params.left) {
      return (
        <>
          {route.params.left === HeaderIcons.SEARCH ? (
            <TouchableOpacity onPress={handleSearchIconPress}>
              <MaterialCommunityIcons name={HeaderIcons.SEARCH} size={22} color={backgroundColor ? '#488ee3' : 'white'} />
            </TouchableOpacity>
          ) : route.params.left === HeaderIcons.GO_BACK ? (
            <TouchableOpacity onPress={handleGoBack}>
              <MaterialIcons name={HeaderIcons.GO_BACK} size={22} color={backgroundColor ? '#488ee3' : 'white'} />
            </TouchableOpacity>
          ) : (
            <View />
          )}
        </>
      );
    } else {
      return <View />;
    }
  };

  const renderRightContent = () => {
    if (route.params && route.params.right) {
      return (
        <>
          {route.params.right === HeaderIcons.ACCOUNT ? (
            <TouchableOpacity onPress={handleDrawerConnectIconPress}>
              <MaterialCommunityIcons name={HeaderIcons.ACCOUNT} size={22} color={backgroundColor ? '#488ee3' : 'white'} />
            </TouchableOpacity>
          ) : route.params.right === HeaderIcons.MENU ? (
            <TouchableOpacity onPress={handleDrawerConnectIconPress}>
              <MaterialIcons name={HeaderIcons.MENU} size={22} color={backgroundColor ? '#488ee3' : 'white'} />
            </TouchableOpacity>
          ) : (
            <View />
          )}
        </>
      );
    } else {
      return <View />;
    }
  };

  const renderCenterContent = () => {
    return (
      <>
        {route.name !== null  ? (
          <Text style={styles.headerTitle}>{route.name}</Text>
        ) : (
          <View />
        )}
      </>
    );
  };

  return (
    <SafeAreaView style={[styles.header, { backgroundColor: backgroundColor || '#488ee3' }]}>
      {renderLeftContent()}
      {renderCenterContent()}
      {renderRightContent()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: "white"
  },
});

const mapStateToProps = ({ AuthReducer,AppointmentReducer }) => ({
  sessionAuth: AuthReducer.session,
  isLoggedIn: AuthReducer.isLoggedIn,
  etablissements: AuthReducer.etablissements,
  navigationAppointment: AppointmentReducer.navigation,
  sessionAppointment:AppointmentReducer.session,
  params:AppointmentReducer.params,
});

export default connect(mapStateToProps)(Header);
