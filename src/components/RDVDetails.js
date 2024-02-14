import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendar, faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Regulartext from './Texts/RegularText';
import BigText from './Texts/BigText';
import { colors } from './global/colors'

const RDVDetails = () => {
  return (
    <View style={styles.card}>
      <View style={[styles.compartment, styles.firstCompartment]}>
        <View style={styles.timeDetailsContainer}>
          <View style={styles.detailsContainer}>
            <FontAwesomeIcon icon={faCalendar} style={[styles.icon, { transform: [{ rotate: '-45deg' }], color: '#fff' }]} />
            <Regulartext style={styles.date}>Mardi 01/03/22</Regulartext>
            <Regulartext style={styles.date}>par Téléphone</Regulartext>
          </View>
          <View style={styles.detailsContainer}>
            <FontAwesomeIcon icon={faClock} style={[styles.icon, { color: '#fff' }]} />
            <Regulartext style={styles.date}>14:00</Regulartext>
          </View>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.compartment}>
        <View style={styles.compartmentContainer}>
          <BigText style={styles.doctor}>Dr Amsalem David</BigText>
          <Regulartext style={styles.appointmentType}>Consultation</Regulartext>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.compartment}>
        <View style={styles.compartmentContainer}>
          <View style={[styles.detailsContainer, { marginBottom: 10 }]}>
            < FontAwesomeIcon icon={faUser} size={30} style={[styles.icon, { color: colors.gray }]} />
            <BigText style={styles.patientName}>brayan brayan</BigText>
          </View>
          <View style={[styles.detailsContainer, { marginBottom: 10 }]}>
            <FontAwesomeIcon icon={faPhone} style={[styles.icon, { color: colors.black }]} />
            <Regulartext style={styles.patientPhone}>459329299292</Regulartext>
          </View>
          <View style={[styles.detailsContainer, { marginBottom: 10 }]}>
            <FontAwesomeIcon icon={faEnvelope} style={[styles.icon, { fontSize: 50, color: colors.black }]} />
            <Regulartext style={styles.patientEmail}>nteguemroland@yahoo.com</Regulartext>
          </View>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.compartment}>
        <View style={styles.compartmentContainer}>
          <BigText style={[styles.address, { fontWeight: 'bold', marginBottom: 5 }]} >Demo Medecins</BigText>
          <Regulartext style={[styles.address, { fontStyle: 'italic', marginBottom: 5 }]} >75011 Paris</Regulartext>
          <Regulartext style={[styles.address, { fontStyle: 'italic', marginBottom: 5 }]} >136 rue de charonne</Regulartext>
          <View style={styles.detailsContainer}>
            <Regulartext style={styles.address}>0102030903</Regulartext>
            <View style={[styles.circle, { backgroundColor: colors.blue, marginLeft: 10, }]}>
              <FontAwesomeIcon icon={faPhone} style={[{ color: colors.white }]} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.compartment}>
        <TouchableOpacity style={styles.button}>
          <Text style={[styles.buttonText, { color: colors.black, }]}>REPRENDRE UN RDV</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
      <View style={styles.compartment}>
        <TouchableOpacity style={styles.button}>
          <Text style={[styles.buttonText, { color: colors.black, }]}>REPRENDRE UN RDV</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 10,
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
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    textAlign: 'center',
  },
});

export default RDVDetails;
