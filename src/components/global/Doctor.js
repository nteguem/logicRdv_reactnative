

import React from 'react';
import { Alert, Image, StyleSheet, View } from 'react-native';
import { colors } from './colors';
import CustomAppButton from './CustomAppButton';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomText from './CustomText';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import GoogleMap from '../ListOfDoctor/GoogleMap';
import ModalPatient from '../ListOfPatients/Modal';

const Doctor = ({
  isRightIcons = false,
  isArrowIcon = false,
  isProfileIcon = false,
  isPhoneIcons = false,
  isUpdate = false,
  isAppointment = false,
  isSearch = false,
  isDelete = false,
  isIcon = false,
  isDetail= false,
  texte1,
  texte2,
  texte3,
  texte4,
  texte5,
  handleChange,
  colorTitle,
  colorContain,
  fontWeight,
  marginBottom
}) => {
  return (
    <View style={styles.Container}>
      {/* les donnee de gauche ie juste l'icon de photo */}
      <View style={[styles.leftColumn, { marginLeft: isUpdate || isDetail ? 0 : -24, alignItems: isSearch ? 'center' : 'flex-start' }]}>
        <View style={styles.usericon}>
          {isProfileIcon && (
            <View style={styles.circleUser}>
              <Icon1 name="user-circle" size={50} color={colors.gray} />
            </View>
          )}
        </View>
        <View >
          {isAppointment && (
            <View style={{ marginTop: 60 }}>
              <CustomAppButton
                onPress={handleChange}
                title="Prendre RDV"
                paddingVertical={12}
                paddingHorizontal={12}
                textColor="white"
                borderRadius={13}
                bkgroundColor={colors.blue}
                textFontSize={12}
              />
            </View>
          )}
          {isSearch && (
            <View>
              <CustomAppButton
                onPress={handleChange}
                title="Profil"
                paddingVertical={12}
                paddingHorizontal={20}
                textColor="white"
                borderRadius={13}
                bkgroundColor={colors.blue}
                textFontSize={12}
              />
            </View>
          )}
        </View>
      </View>

      <View style={{ marginLeft: isAppointment ? -110 : -10 }}>
        <View style={{ marginLeft: isUpdate || isAppointment || isDetail ? 0 : -55 }}>
          <CustomText fontSize={15} color={colorTitle} fontWeight={'bold'} style={{ marginBottom: marginBottom }}>
            {texte1}
          </CustomText>

          <View style={[styles.detailsContainer, { marginBottom: 5 }]}>
            {isIcon && (
              <Icon name="phone-alt" size={16} color={colors.blue} marginRight={5} />
            )}
            <CustomText fontSize={13} color={colorContain} fontWeight={fontWeight}>
              {texte2}
            </CustomText>
          </View>

          <View style={[styles.detailsContainer, { marginBottom: 5 }]}>
            {isIcon && (
              <MaterialCommunityIcons name="calendar-blank" size={18} color={colors.blue} marginRight={5} />
            )}
            <CustomText fontSize={11} color={colorContain}>
              {texte3}
            </CustomText>
          </View>

          <View style={[styles.detailsContainer, { marginBottom: 5 }]}>
            {isIcon && (
              <Icon1 name="envelope" size={16} color={colors.blue} marginRight={5} />
            )}
            <CustomText fontSize={11} color={colorContain}>
              {texte4}
            </CustomText>
          </View>
          <View style={styles.item}>
            <CustomText fontSize={11} color={colorContain} fontWeight={'bold'}>
              {texte5}
            </CustomText>
            {
              isPhoneIcons && <Icon style={styles.myicon2} name="phone-alt" color={colors.white} size={15} />
            }
          </View>
        </View>
      </View>

      {isUpdate && (
        <View style={styles.divider} />
      )}

      <View style={[styles.rightColumn, { marginLeft: isUpdate ? -20 : 0 }]}>

        {isArrowIcon && (
          <AntDesign
            style={styles.unique}
            name="right"
            color={colors.gray}
            size={25}
            onPress={() => Alert.alert('Arrow pressed')}

          />
        )}

        {isUpdate && (
          <ModalPatient isEdit />
        )}

        {isRightIcons && (
          <Image source={require('../../assets/images/whatsapp.png')} style={{ width: 24, height: 24, objectFit: 'contain' }} />
        )}

        {isRightIcons && (
          <Image source={require('../../assets/images/waze.png')} style={{ width: 24, height: 24, objectFit: 'contain' }} />
        )}

        {isRightIcons && (
          <Image source={require('../../assets/images/google-maps.png')} />
        )}

        {isDelete && (
          <Icon2 name="delete" color={colors.red} size={25} />
        )}


      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.white,
    borderRadius: 10,
    marginTop: 10,
  },
  usericon: {
    paddingVertical: 5,

  },
  leftColumn: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  rightColumn: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  items: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1,

  },
  unique: {
    top: 5
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
    width: 30,
    height: 30,
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
  divider: {
    borderLeftWidth: 1,
    borderStyle: 'dashed',
    height: '100%',
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  infoContainer: {
    flex: 1,
  },
  info: {
    fontSize: 16,
    color: '#666',
  },

});

export default Doctor;
