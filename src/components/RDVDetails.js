import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Regulartext from './Texts/RegularText';
import BigText from './Texts/BigText';
import { colors } from './global/colors'
import CustomAppButton from './global/CustomAppButton';
import Icon from 'react-native-vector-icons/FontAwesome';

const RDVDetails = ({ isTeleconsultation }) => {
  return (
    <View style={styles.card}>
      <View style={[styles.compartment, styles.firstCompartment]}>
        <View style={styles.timeDetailsContainer}>
          <View style={styles.detailsContainer}>
            <Regulartext style={styles.date}>Mardi 01/03/22</Regulartext>
            <Regulartext style={styles.date}>par Téléphone</Regulartext>
          </View>
          <View style={styles.detailsContainer}>
            <Regulartext style={styles.date}>14:00</Regulartext>
          </View>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={[styles.compartment, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginRight: 10 }]}>
        <View style={styles.compartmentContainer}>
          <BigText style={styles.doctor}>Dr Amsalem David</BigText>
          <Regulartext style={styles.appointmentType}>Consultation</Regulartext>
        </View>
        <View style={styles.button}>
          <CustomAppButton
            onPress={() => Alert.alert('Button pressed')}
            title="Annuler"
            bkgroundColor='transparent'
            borderWidth={1}
            alignSelf='baseline'
            borderColor={colors.red}
            textColor= {colors.red}
          />
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.compartment}>
        <View style={styles.compartmentContainer}>
          <View style={[styles.detailsContainer, { marginBottom: 10 }]}>
            <View style={styles.circleUser}>
              <Icon name="user-circle" size={50} color={colors.gray} />
            </View>
            <BigText style={styles.patientName}>brayan brayan</BigText>
          </View>
          <View style={[styles.detailsContainer, { marginBottom: 10 }]}>
            <Icon name="phone" size={22} color={colors.black} marginRight={5} />
            <Regulartext style={styles.patientPhone}>459329299292</Regulartext>
          </View>
          <View style={[styles.detailsContainer]}>
            <Icon name="envelope" size={22} color={colors.black} marginRight={5} />
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
              <Icon name="phone" size={30} color={colors.white} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.divider} />
      {isTeleconsultation ? (
        <>
          <View style={styles.compartment}>
            <View style={styles.button}>
              <CustomAppButton
                onPress={() => Alert.alert('Button pressed')}
                title="Téléconsultation"
                bkgroundColor={colors.blue}
                alignSelf='center'
                textColor={colors.white}
              />
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.compartment}>
            <View style={styles.button}>
              <CustomAppButton
                onPress={() => Alert.alert('Button pressed')}
                title="REPRENDRE UN RDV"
                bkgroundColor='transparent'
                alignSelf='center'
                textColor={colors.blue}
                textFontSize={15}
              />
            </View>
          </View>
        </>
      ) : (
        <View style={styles.compartment}>
          <View style={styles.button}>
            <CustomAppButton
              onPress={() => Alert.alert('Button pressed')}
              title="REPRENDRE UN RDV"
              bkgroundColor='transparent'
              alignSelf='center'
              textColor={colors.blue}
              textFontSize={15}
            />
          </View>
        </View>
      )}
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
    borderColor: colors.gray,
    marginRight: 5
  }
});

export default RDVDetails;
