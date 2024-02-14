import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendar, faClock, faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <View style={styles.card}>
      <View style={[styles.compartment, styles.firstCompartment]}>
        <View style={styles.timeDetailsContainer}>
          <View style={styles.detailsContainer}>
            <FontAwesomeIcon icon={faCalendar} style={[styles.icon, { transform: [{ rotate: '-45deg' }], color: '#fff' }]} />
            <Text style={styles.date}>Mardi 01/03/22</Text>
            <Text style={styles.date}>par Téléphone</Text>
          </View>
          <View style={styles.detailsContainer}>
            <FontAwesomeIcon icon={faClock} style={[styles.icon, { color: '#fff' }]} />
            <Text style={styles.date}>14:00</Text>
          </View>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.compartment}>
        <View style={styles.compartmentContainer}>
          <Text style={styles.doctor}>Dr Amsalem David</Text>
          <Text style={styles.appointmentType}>Consultation</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.compartment}>
        <View style={styles.compartmentContainer}>
          <View style={[styles.detailsContainer, {marginBottom: 10}]}>
            <FontAwesomeIcon icon={faUser} style={[styles.icon, { fontSize: 50, color: 'gray' }]} />
            <Text style={styles.patientName}>brayan brayan</Text>
          </View>
          <View style={[styles.detailsContainer, {marginBottom: 10}]}>
            <FontAwesomeIcon icon={faPhone} style={[styles.icon, { fontSize: 50, color: '#000' }]} />
            <Text style={styles.patientPhone}>459329299292</Text>
          </View>
          <View style={[styles.detailsContainer, {marginBottom: 10}]}>
            <FontAwesomeIcon icon={faEnvelope} style={[styles.icon, { fontSize: 50, color: '#000' }]} />
            <Text style={styles.patientEmail}>nteguemroland@yahoo.com</Text>
          </View>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.compartment}>
        <View style={styles.compartmentContainer}>
          <Text style={[styles.address, { fontWeight: 'bold', marginBottom: 5 }]} >Demo Medecins</Text>
          <Text style={[styles.address, { fontStyle: 'italic', marginBottom: 5 }]} >75011 Paris</Text>
          <Text style={[styles.address, { fontStyle: 'italic', marginBottom: 5 }]} >136 rue de charonne</Text>
          <View style={styles.detailsContainer}>
            <Text style={styles.patientName}>0102030903</Text>
            <View style={[styles.circle, { backgroundColor: '#000' }]}>
              <FontAwesomeIcon icon={faPhone} style={[{ color: 'white' }]} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.compartment}>
        <TouchableOpacity style={styles.button}>
          <Text style={[styles.buttonText, {color: '#000',}]}>REPRENDRE UN RDV</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
      <View style={styles.compartment}>
        <TouchableOpacity style={styles.button}>
          <Text style={[styles.buttonText, {color: '#000',}]}>REPRENDRE UN RDV</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    margin: 10,
  },
  compartment: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  firstCompartment: {
    backgroundColor: 'gray',
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
    fontWeight: 'bold',
    color: '#fff'
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
  },
  doctor: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#000',
  },
  appointmentType: {
    fontSize: 16,
    color: '#000',
    marginTop: 5,
  },
  compartmentContainer: {
    paddingLeft: 40,
    paddingBottom: 10
  },
  patientName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  patientPhone: {
    color: '#000',
  },
  patientEmail: {
    color: '#000',
  },
  address: {
    fontSize: 18,
    color: '#000',
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
    marginLeft: 10,
  },
  button: {
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    textAlign: 'center',
  },
});

export default Home;
