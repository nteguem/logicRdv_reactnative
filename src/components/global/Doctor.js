

import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {colors} from './colors';
import CustomAppButton from './CustomAppButton';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomText from './CustomText';
import GoogleMap from '../doctor/GoogleMap';

const Doctor = ({
  isDoctorSpecialisationText = false,
  isRightIcons = false,
  isArrowIcon = false,
  isButton = false,
  isProfileIcon = false,
  zip,
  Specialisation,
  doctorName,
  address,
  doctorPhoneNumber,
  handleChange
}) => {
  return (
    <View style={styles.Container}>
      {/* les donnee de gauche ie juste l'icon de photo */}
      <View style={styles.leftColumn}>
          <View style={styles.usericon}>
          {isProfileIcon && (
            <View style={styles.circleUser}>
              <Icon1 name="user-circle" size={50} color={colors.gray} />
            </View>
          )}
        </View>
        <View>
          {isButton && (
            <CustomAppButton
              onPress={handleChange}
              title="Prendre RDV"
              paddingVertical={12}
              paddingHorizontal={8}
              textColor="white"
              borderRadius={13}
              bkgroundColor={colors.blue}
            />
          )}
        </View>
      </View>

      <View style={styles.rightColumn}>
        <View style={styles.item}>
          <View>
            <CustomText fontSize={20} color={colors.yellow} fontWeight={'bold'}>
              {doctorName}
            </CustomText>
            {isDoctorSpecialisationText && (
              <CustomText fontSize={15} color={colors.blue} fontWeight={'bold'}>
                {isDoctorSpecialisationText && Specialisation}
              </CustomText>
            )}
          </View>
            {
              isArrowIcon && (
                <AntDesign
                style={styles.unique}
                  name="right"
                  color={colors.gray}
                  size={25}
                  onPress={() => Alert.alert('Arrow pressed')}

                />
              )
           }
          {isRightIcons && (
            <Icon name="whatsapp-square" color={'green'} size={25} />
          )}
        </View>
        <View style={styles.item} >
          <View>
            <CustomText fontSize={12} color={colors.blue}>
              {address}
            </CustomText>
            <CustomText fontSize={12} color={colors.blue}>
              {zip}
            </CustomText>
          </View>
          {isRightIcons &&(
            <View style={styles.myicon}>
              <View >
                <Icon2 name="waze" color={colors.white} size={25} />
              </View>
          </View>
        )}
        </View >
        <View style={styles.item}>
          <View style={styles.items}>
            <CustomText fontSize={15} color={colors.blue} fontWeight={'bold'}>
              {doctorPhoneNumber}
            </CustomText>
            {
              isRightIcons && <Icon style={styles.myicon2} name="phone-alt" color={colors.white} size={15} />
            }
          </View>
          <View>
            {isRightIcons && (
              <Icon  name="map-marker" color={colors.blue} size={25} />
            )}
         </View>
        </View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container:{
    paddingVertical:10,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 10,
    marginTop: 10,
  },

  usericon:{
    paddingVertical:20,
    paddingHorizontal:5,

  },
  leftColumn:{
    paddingHorizontal:10,
  },
  rightColumn:{
    position: "absolute",
    left:100,
    // paddingHorizontal:10,
  },
  item:{
    flexDirection: 'row',
    alignItems: 'center',
    gap:70,
  },
  items:{
    flexDirection: 'row',
    alignItems: 'center',
    gap:1,
   
  },
  unique:{
    paddingVertical: 20,
  },
  
  myicon: {
    backgroundColor: colors.blue,
    position: 'absolute',
    left: 180,
    borderRadius: 5, 
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
  myicon2: {
    backgroundColor: colors.blue,
    borderRadius: 100, 
    width:30,
    height:30,
    padding: 7,
    marginLeft: 5
  },
  circleUser: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderRadius: 999,
    width: 65,
    height: 65,
    borderWidth: 1,
    borderColor: colors.gray,
  },
 
});

export default Doctor;
