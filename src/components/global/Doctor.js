/*
  This React Native component, Doctor, represents a card displaying information about a doctor.
  It includes details such as doctor's name, specialization, location, phone number, and optional icons.

  Component Structure:
  - View: Main container for the component.
    - View: Container for doctor's profile information.
      - View: Container for doctor's profile picture (optional).
      - View: Container for doctor's name, specialization, location, and phone number.
      - View: Container for optional right icons or arrow icon.
    - View: Container for optional button.

  Props:
  - isDoctorSpecialisationText: Boolean flag indicating whether to display doctor's specialization text.
  - isRightIcons: Boolean flag indicating whether to display right icons (WhatsApp, map marker).
  - isArrowIcon: Boolean flag indicating whether to display an arrow icon.
  - isButton: Boolean flag indicating whether to display a button.
  - isProfileIcon: Boolean flag indicating whether to display a profile icon.
  - doctorName: Name of the doctor.
  - doctorLocation: Location of the doctor.
  - doctorPhoneNumber: Phone number of the doctor.

  Styles:
  - Styles are defined for each individual component, including containers, text, buttons, and icons, providing consistent appearance and layout.
*/

import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {colors} from './colors';
import CustomAppButton from './CustomAppButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomText from './CustomText';

function numberWithSpaces(value, pattern) {
  var i = 0,
    phone = value.toString();
  return pattern.replace(/#/g, _ => phone[i++]);
}

const Doctor = ({
  isDoctorSpecialisationText = false,
  isRightIcons = false,
  isArrowIcon = false,
  isButton = false,
  isProfileIcon = false,
  doctorName,
  doctorLocation,
  doctorPhoneNumber,
}) => {
  return (
    <View>
      <View style={styles.parentStyles}>
        <View style={styles.myStyles}>
          <View style={{flexDirection: 'row'}}>
            {isProfileIcon && (
              <View style={styles.circleUser}>
                <Icon name="user-circle" size={50} color={colors.gray} />
              </View>
            )}
            <View style={{paddingLeft: 10}}>
              <CustomText fontSize={20} color={colors.red} fontWeight={'bold'}>
                {doctorName}
              </CustomText>
              <CustomText fontSize={15} color={'#4d8fd9'} fontWeight={'bold'}>
                {isDoctorSpecialisationText && 'Doctor doctor'}
              </CustomText>
              <CustomText fontSize={12} color={'#4d8fd9'}>
                {doctorLocation}
              </CustomText>
              <CustomText fontSize={12} color={'#4d8fd9'}>
                75020
              </CustomText>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  width: 100,
                }}>
                <CustomText fontSize={15} color={'#4d8fd9'} fontWeight={'bold'}>
                  {numberWithSpaces(doctorPhoneNumber, '## ## ## ## ##')}
                </CustomText>
                <View style={[styles.circle]}>
                  <Icon name="phone" color="white" size={20} />
                </View>
              </View>
            </View>
          </View>
          {isRightIcons && (
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                overflow: 'visible',
              }}>
              <Icon name="whatsapp" color={'green'} size={25} />
              <Icon name="whatsapp" color={'green'} size={25} />
              <Icon name="map-marker" size={25} />
            </View>
          )}
          {isArrowIcon && (
            <AntDesign
              name="right"
              size={20}
              onPress={() => Alert.alert('Arrow pressed')}
            />
          )}
        </View>
        <View>
          {isButton && (
            <CustomAppButton
              onPress={() => Alert.alert('Button pressed')}
              title="Prendre RDV"
              alignSelf="baseline"
              paddingVertical={8}
              paddingHorizontal={8}
              textColor="white"
              borderRadius={13}
              bkgroundColor="#4d8fd9"
            />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  myStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  parentStyles: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  buttonSyles: {
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
  textStyles: {
    color: 'blue',
  },
  circleUser: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderRadius: 999,
    width: 55,
    height: 55,
    borderWidth: 1,
    borderColor: colors.gray,
    marginRight: 5,
  },
  circle: {
    flexDirection: 'row',
    width: 28,
    height: 28,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue,
    marginLeft: 10,
  },
});

export default Doctor;
