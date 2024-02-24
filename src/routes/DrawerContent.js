import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import Entypo from 'react-native-vector-icons/Entypo';
import { colors } from '../components/global/colors';
import CustomText from '../components/global/CustomText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome from 'react-native-vector-icons/FontAwesome6';

const DrawerContent = ({ navigation }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const navigateToScreen = (screenName) => () => {
    navigation.navigate(screenName);
  };

  return (
    <DrawerContentScrollView style={{ marginBottom: '-35%' }}>
      {isAuth ? (
        <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
          <View>
            <View style={styles.containerHeader}>
              <View style={styles.header}>
                <View style={styles.circleUserAuth}>
                  <Icon name="user-circle" size={55} color={colors.gray100} />
                </View>
                <TouchableOpacity onPress={navigateToScreen('Home')} >
                  <CustomText fontSize={16} fontWeight={'bold'} color={colors.white} style={styles.drawerItem}>
                    Quitter
                  </CustomText>
                </TouchableOpacity>
              </View>
              <View>
                <CustomText fontSize={16} fontWeight={'bold'} color={colors.white} style={styles.drawerItem}>
                  nteguem wache
                </CustomText>
                <CustomText fontSize={16} fontWeight={'bold'} color={colors.white} style={{ paddingHorizontal: 10, }}>
                  nteguemroland@gmail.com
                </CustomText>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 5, marginBottom: -25 }}>
                <CustomText fontSize={12} fontWeight={'bold'} color={colors.white} style={styles.drawerItem}>
                  V 1.0.4
                </CustomText>
              </View>
            </View>
            <TouchableOpacity onPress={navigateToScreen('Home')} style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 12, marginTop: 5 }}>
              <Entypo name="home" size={20} color={colors.blue} />
              <CustomText fontSize={16} fontWeight={'bold'} color={colors.black} style={styles.drawerItem}>
                Mes rendez-vous
              </CustomText>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToScreen('Home')} style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 12 }}>
              <Icon name="magic" size={20} color={colors.blue} />
              <CustomText fontSize={16} fontWeight={'bold'} color={colors.black} style={styles.drawerItem}>
                Fixez rendez-vous
              </CustomText>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToScreen('Home')} style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 12 }}>
              <MaterialIcons name="message" size={20} color={colors.blue} />
              <CustomText fontSize={16} fontWeight={'bold'} color={colors.black} style={styles.drawerItem}>
                Documents et messages
              </CustomText>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToScreen('Home')} style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 12 }}>
              <MaterialIcons name="folder-shared" size={20} color={colors.blue} />
              <CustomText fontSize={16} fontWeight={'bold'} color={colors.black} style={styles.drawerItem}>
                Gestion de la famille
              </CustomText>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToScreen('Home')} style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 12 }}>
              <FontAwesome name="user-large" size={20} color={colors.blue} />
              <CustomText fontSize={16} fontWeight={'bold'} color={colors.black} style={styles.drawerItem}>
                Mon compte
              </CustomText>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToScreen('Home')} style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 12 }}>
              <MaterialIcons name="search" size={20} color={colors.blue} />
              <CustomText fontSize={16} fontWeight={'bold'} color={colors.black} style={styles.drawerItem}>
                Recherche d'un praticien
              </CustomText>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToScreen('Home')} style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 12 }}>
              <MaterialIcons name="notifications" size={20} color={colors.blue} />
              <CustomText fontSize={16} fontWeight={'bold'} color={colors.black} style={styles.drawerItem}>
                Mes notifications
              </CustomText>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToScreen('Home')} style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 12 }}>
              <MaterialIcons name="logout" size={20} color={colors.blue} />
              <CustomText fontSize={16} fontWeight={'bold'} color={colors.black} style={styles.drawerItem}>
                Déconnexion
              </CustomText>
            </TouchableOpacity>
          </View>
          <View style={{ marginVertical: '35%' }}>
            <View style={[styles.containerToggle, { justifyContent: 'space-between' }]}>
              <TouchableOpacity onPress={navigateToScreen('Home')} style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 12 }}>
                {isEnabled ? <MaterialIcons name="notifications-on" size={20} color={colors.blue} /> : <MaterialIcons name="notifications-off" size={20} color={colors.blue} />}
                <CustomText fontSize={16} fontWeight={'bold'} color={colors.black} style={styles.drawerItem}>
                  Notification
                </CustomText>
              </TouchableOpacity>
              <Switch
                trackColor={{ false: colors.gray300, true: colors.blue }}
                thumbColor={isEnabled ? colors.blue : colors.gray100}
                ios_backgroundColor={colors.gray200}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <CustomText fontSize={12} fontWeight={'bold'} color={colors.blue} style={styles.drawerItem}>
                Version 1.0.4
              </CustomText>
            </View>
          </View>
        </View>
      ) : (
        <>
          <View style={styles.containerHeader}>
            <View style={styles.header}>
              <View style={styles.circle}>
                <View style={styles.containeImage}>
                  <Image source={require('../assets/images/Logo.png')} style={styles.image} />
                </View>
              </View>
              <TouchableOpacity onPress={navigateToScreen('Home')} >
                <CustomText fontSize={16} fontWeight={'bold'} color={colors.white} style={styles.drawerItem}>
                  Quitter
                </CustomText>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 35, marginBottom: -25 }}>
              <CustomText fontSize={12} fontWeight={'bold'} color={colors.white} style={styles.drawerItem}>
                V 1.0.4
              </CustomText>
            </View>
          </View>
          <TouchableOpacity onPress={navigateToScreen('Home')} style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 12, marginTop: 5 }}>
            <Entypo name="home" size={20} color={colors.blue} />
            <CustomText fontSize={16} fontWeight={'bold'} color={colors.black} style={styles.drawerItem}>
              Accueil
            </CustomText>
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToScreen('Home')} style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 12 }}>
            <MaterialIcons name="notifications" size={20} color={colors.blue} />
            <CustomText fontSize={16} fontWeight={'bold'} color={colors.black} style={styles.drawerItem}>
              Notification
            </CustomText>
          </TouchableOpacity>
        </>
      )}
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  containerHeader: {
    backgroundColor: colors.blue,
    paddingVertical: 20,
    paddingHorizontal: 5,
    marginTop: -10
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  drawerItem: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  circle: {
    flexDirection: 'row',
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginLeft: 10,
  },
  circleUserAuth: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderRadius: 999,
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: colors.white,
    marginLeft: 10,
  },
  containeImage: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    objectFit: 'contain',
    width: 60,
  },
  containerToggle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default DrawerContent;
