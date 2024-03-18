/*
This `AppointmentDetails` component is designed to display details of a medical appointment, including the date, time, doctor, appointment type, patient information, and consultation address.
It also provides options for actions such as canceling the appointment and scheduling a new appointment.

Props:
- `date`: Date of the appointment.
- `consultationMethod`: Consultation method (e.g., teleconsultation).
- `time`: Appointment time.
- `doctor`: Doctor's name.
- `appointmentType`: Type of appointment.
- `patientName`: Patient's name.
- `patientPhone`: Patient's phone number.
- `patientEmail`: Patient's email address.
- `addressName`: Name of the consultation address.
- `addressLine1`: First line of the consultation address.
- `addressLine2`: Second line of the consultation address.
- `addressPhone`: Phone number of the consultation address.
- `mode`: Mode of appointment viewing or action (e.g., prepayment, cancellation).

Behavior:
- Displays appointment details in separate compartments.
- Colors and content of compartments vary based on the specified mode.
- Allows for actions such as canceling the appointment or scheduling a new one based on the mode.

Typical Usage:
<AppointmentDetails
  date="2024-02-21"
  consultationMethod="Teleconsultation"
  time="14:00 - 15:00"
  doctor="Dr. John Doe"
  appointmentType="General Consultation"
  patientName="John Doe"
  patientPhone="1234567890"
  patientEmail="john.doe@example.com"
  addressName="ABC Medical Clinic"
  addressLine1="123 Health Street"
  addressLine2="Paris, 75000"
  addressPhone="0987654321"
  mode="rdvExist"
/>

Note: Make sure to provide necessary data for all required props to correctly display appointment details.
*/

import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomText from '../global/CustomText';
import { colors } from '../global/colors'
import CustomAppButton from '../global/CustomAppButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Alert } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AppointmentDetails = (
  {
    date,
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
    buttonlabeltelecons,
    buttonTitle,
    cancelButton,
    buttonBorderColor,
    buttonTextColor,
    display,
    firstCompartmentBackgroundColor,
    userIcon,
    isDisplay,
    handleNewAppt,
    handleApptType
  }) => {

  return (
    <View style={styles.card}>
      <View style={[styles.compartment, styles.firstCompartment, { backgroundColor: firstCompartmentBackgroundColor }]}>
        <View style={styles.timeDetailsContainer}>
          <View style={styles.detailsContainer}>
            <MaterialCommunityIcons name="calendar-blank" size={16} color={colors.white} marginRight={5} style={{ transform: [{ rotate: '-45deg' }] }} />
            <CustomText fontSize={10} color={colors.white}>{date}</CustomText>
          </View>
          {isDisplay && (
            <View style={styles.detailsContainer}>
              <MaterialCommunityIcons name="clock-outline" size={16} color={colors.white} marginRight={5} />
              <CustomText fontSize={10} color={colors.white}>{time}</CustomText>
            </View>
          )}
        </View>
      </View>

      <View style={[styles.compartment, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginRight: 10 }]}>
        <View style={[styles.compartmentContainer, { flexDirection: 'row', alignItems: 'center', }]}>
          {userIcon && (
            <View style={styles.circleUser}>
              <Icon name="user-circle" size={50} color={colors.gray100} />
            </View>
          )}
          <View>
            <CustomText fontSize={userIcon ? 12 : 15} fontWeight='bold' color={colors.black}>{doctor}</CustomText>
            <CustomText fontSize={userIcon ? 10 : 12} color={colors.black} style={styles.appointmentType}>{appointmentType}</CustomText>
          </View>
        </View>
        <View style={[styles.button, { display: display }]}>
          <CustomAppButton
            onPress={() => Alert.alert('Button pressed')}
            title={cancelButton}
            bkgroundColor='transparent'
            borderWidth={1}
            alignSelf='baseline'
            borderColor={buttonBorderColor}
            textColor={buttonTextColor}
            paddingHorizontal={userIcon ? 12 : 20}
            paddingVertical={5}
            borderRadius={2}
            textFontSize={userIcon ? 10 : 12}
          />
        </View>
      </View>
      {isDisplay && (
        <>
          <View style={styles.divider} />
          <View style={styles.compartment}>
            <View style={styles.compartmentContainer}>
              <View style={[styles.detailsContainer, { marginBottom: 10 }]}>
                <View style={styles.circleUser}>
                  <Icon name="user-circle" size={50} color={colors.gray100} />
                </View>
                <CustomText fontSize={15} color={colors.black} fontWeight='bold'>{patientName}</CustomText>
              </View>
              <View style={[styles.detailsContainer, { marginBottom: 10 }]}>
                <Icon name="phone" size={18} color={colors.black} marginRight={5} />
                <CustomText fontSize={12} color={colors.black}>{patientPhone}</CustomText>
              </View>
              <View style={[styles.detailsContainer]}>
                <Icon name="envelope" size={18} color={colors.black} marginRight={5} />
                <CustomText fontSize={12} color={colors.black}>{patientEmail}</CustomText>
              </View>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.compartment}>
            <View style={styles.compartmentContainer}>
              <CustomText fontSize={15} color={colors.black} fontWeight='bold' >{addressName}</CustomText>
              <CustomText fontSize={12} color={colors.black} style={{ fontStyle: 'italic' }} >{addressLine1}</CustomText>
              <CustomText fontSize={12} color={colors.black} style={{ fontStyle: 'italic' }} >{addressLine2}</CustomText>
              <View style={styles.detailsContainer}>
                <CustomText fontSize={12} color={colors.black}>{addressPhone}</CustomText>
                <View style={[styles.circle, { backgroundColor: colors.blue, marginLeft: 10, }]}>
                  <Icon name="phone" size={20} color={colors.white} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.divider} />
          {buttonlabeltelecons !== '' && (
            <>
              <View style={styles.compartment}>
                <View style={styles.button}>
                  <CustomAppButton
                    onPress={handleApptType}
                    title={buttonTitle}
                    bkgroundColor={colors.blue}
                    alignSelf='center'
                    textColor={colors.white}
                    paddingHorizontal={35}
                    paddingVertical={8}
                    borderRadius={6}
                    textFontSize={12}
                    fontWeight='bold'
                  />
                </View>
              </View>
              <View style={styles.divider} />
            </>
          )}

          <View style={styles.compartment}>
            <View style={styles.button}>
              <CustomAppButton
                onPress={handleNewAppt}
                title="REPRENDRE UN RDV"
                bkgroundColor='transparent'
                alignSelf='center'
                textColor={colors.blue}
                textFontSize={12}
                fontWeight='bold'
              />
            </View>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.gray100,
    marginTop: 20
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
    marginTop: 5,
  },
  compartmentContainer: {
    paddingLeft: 20,
    paddingBottom: 10
  },
  patientName: {
    fontWeight: 'bold',
    color: colors.black,
  },
  address: {
    marginBottom: 5
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

export default AppointmentDetails;
//export default React.memo(AppointmentDetails);