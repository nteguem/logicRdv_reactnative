import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Regulartext from './Texts/RegularText';
import BigText from './Texts/BigText';
import { colors } from './global/colors'
import CustomAppButton from './global/CustomAppButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const RDVDetails = (
  {
    date,
    consultationMethod,
    time,
    doctor,
    appointmentType,
    patientName,
    patientPhone,
    patientEmail,
    addressName,
    addressLine1,
    addressLine2,
    addressPhone,
    mode
  }) => {

  let buttonTitle;
  switch (mode) {
    case 'teleconsultation':
      buttonTitle = 'Téléconsultation';
      buttonBorderColor = colors.red;
      buttonTextColor = colors.red;
      firstCompartmentBackgroundColor = colors.blue;
      break;
    case 'prepaiementRdvTelephonique':
      buttonTitle = 'Prépaiement Rdv Téléphonique';
      buttonBorderColor = colors.red;
      buttonTextColor = colors.red;
      firstCompartmentBackgroundColor = colors.blue;
      break;
    case 'cancel':
      buttonTitle = 'Annuler';
      buttonBorderColor = 'transparent';
      buttonTextColor = colors.gray100;
      firstCompartmentBackgroundColor = colors.gray100;
      break;
    case 'rdvExist':
      return (
        <View style={styles.card}>
          <View style={[styles.compartment, styles.firstCompartment]}>
            <View style={styles.timeDetailsContainer}>
              <View style={styles.detailsContainer}>
                <MaterialCommunityIcons name="calendar-blank" size={22} color={colors.white} marginRight={5} style={{ transform: [{ rotate: '-45deg' }] }} />
                <Regulartext style={styles.date}>{date}</Regulartext>
                <Regulartext style={styles.date}>{consultationMethod}</Regulartext>
              </View>
              <View style={styles.detailsContainer}>
                <MaterialCommunityIcons name="clock-outline" size={22} color={colors.white} marginRight={5} />
                <Regulartext style={styles.date}>{time}</Regulartext>
              </View>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={[styles.compartment, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginRight: 10 }]}>
            <View style={styles.compartmentContainer}>
              <BigText style={styles.doctor}>{doctor}</BigText>
              <Regulartext style={styles.appointmentType}>{appointmentType}</Regulartext>
            </View>
            <View style={styles.button}>
              <CustomAppButton
                onPress={() => Alert.alert('Button pressed')}
                title="Annuler"
                bkgroundColor='transparent'
                borderWidth={1}
                alignSelf='baseline'
                borderColor={colors.red}
                textColor={colors.red}
                paddingHorizontal={20}
                paddingVertical={5}
                borderRadius={2}
              />
            </View>
          </View>
        </View>
      );
      break;
    default:
      buttonTitle = 'Prépaiement Rdv Téléphonique';
  }

  return (
    <View style={styles.card}>
      <View style={[styles.compartment, styles.firstCompartment, { backgroundColor: firstCompartmentBackgroundColor }]}>
        <View style={styles.timeDetailsContainer}>
          <View style={styles.detailsContainer}>
            <MaterialCommunityIcons name="calendar-blank" size={22} color={colors.white} marginRight={5} style={{ transform: [{ rotate: '-45deg' }] }} />
            <Regulartext style={styles.date}>{date}</Regulartext>
            <Regulartext style={styles.date}>{consultationMethod}</Regulartext>
          </View>
          <View style={styles.detailsContainer}>
            <MaterialCommunityIcons name="clock-outline" size={22} color={colors.white} marginRight={5} />
            <Regulartext style={styles.date}>{time}</Regulartext>
          </View>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={[styles.compartment, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginRight: 10 }]}>
        <View style={styles.compartmentContainer}>
          <BigText style={styles.doctor}>{doctor}</BigText>
          <Regulartext style={styles.appointmentType}>{appointmentType}</Regulartext>
        </View>
        <View style={styles.button}>
          <CustomAppButton
            onPress={() => Alert.alert('Button pressed')}
            title="Annuler"
            bkgroundColor='transparent'
            borderWidth={1}
            alignSelf='baseline'
            borderColor={buttonBorderColor}
            textColor={buttonTextColor}
            paddingHorizontal={20}
            paddingVertical={5}
            borderRadius={2}
          />
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.compartment}>
        <View style={styles.compartmentContainer}>
          <View style={[styles.detailsContainer, { marginBottom: 10 }]}>
            <View style={styles.circleUser}>
              <Icon name="user-circle" size={50} color={colors.gray100} />
            </View>
            <BigText style={styles.patientName}>{patientName}</BigText>
          </View>
          <View style={[styles.detailsContainer, { marginBottom: 10 }]}>
            <Icon name="phone" size={22} color={colors.black} marginRight={5} />
            <Regulartext style={styles.patientPhone}>{patientPhone}</Regulartext>
          </View>
          <View style={[styles.detailsContainer]}>
            <Icon name="envelope" size={22} color={colors.black} marginRight={5} />
            <Regulartext style={styles.patientEmail}>{patientEmail}</Regulartext>
          </View>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.compartment}>
        <View style={styles.compartmentContainer}>
          <BigText style={[styles.address, { fontWeight: 'bold', marginBottom: 5 }]} >{addressName}</BigText>
          <Regulartext style={[styles.address, { fontStyle: 'italic', marginBottom: 5 }]} >{addressLine1}</Regulartext>
          <Regulartext style={[styles.address, { fontStyle: 'italic', marginBottom: 5 }]} >{addressLine2}</Regulartext>
          <View style={styles.detailsContainer}>
            <Regulartext style={styles.address}>{addressPhone}</Regulartext>
            <View style={[styles.circle, { backgroundColor: colors.blue, marginLeft: 10, }]}>
              <Icon name="phone" size={20} color={colors.white} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.divider} />
      {mode !== 'cancel' && (
        <View style={styles.compartment}>
          <View style={styles.button}>
            <CustomAppButton
              onPress={() => Alert.alert('Button pressed')}
              title={buttonTitle}
              bkgroundColor={colors.blue}
              alignSelf='center'
              textColor={colors.white}
              paddingHorizontal={25}
              paddingVertical={8}
              borderRadius={6}
            />
          </View>
        </View>
      )}
      <View style={styles.divider} />
      <View style={styles.compartment}>
        <View style={styles.button}>
          <CustomAppButton
            onPress={() => Alert.alert('Button pressed')}
            title="REPRENDRE UN RDV"
            bkgroundColor='transparent'
            alignSelf='center'
            textColor={colors.blue}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.gray100,
    margin: 10,
  },
  compartment: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  firstCompartment: {
    backgroundColor: colors.blue,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  timeDetailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  date: {
    color: colors.white
  },
  divider: {
    height: 1,
    backgroundColor: colors.gray100,
  },
  doctor: {
    fontWeight: 'bold',
    marginTop: 10,
    color: colors.black,
  },
  appointmentType: {
    color: colors.black,
    marginTop: 5,
  },
  compartmentContainer: {
    paddingLeft: 40,
    paddingBottom: 10
  },
  patientName: {
    fontWeight: 'bold',
    color: colors.black,
  },
  patientPhone: {
    color: colors.black,
  },
  patientEmail: {
    color: colors.black,
  },
  address: {
    color: colors.black,
  },
  icon: {
    marginRight: 5,
  },
  circle: {
    flexDirection: 'row',
    width: 30,
    height: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
    borderColor: colors.gray100,
    marginRight: 5,
    elevation: 3
  }
});

export default RDVDetails;
