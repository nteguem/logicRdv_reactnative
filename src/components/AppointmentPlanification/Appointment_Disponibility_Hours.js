/*
  This React Native component is used to display the availability time of a medical appointment.
  It takes two props as input: 'time' for the appointment time and 'doctor' for the doctor's name.
  The component is encapsulated within a horizontal ScrollView to allow horizontal scrolling if necessary.
  It displays the time and doctor's name within a view, with specific styling defined by the styles.

  Component Structure:
  - ScrollView: Used to enable horizontal scrolling.
    - View: Main container for displaying the appointment time and doctor's name.
      - CustomText: Used to display the appointment time (time).
      - CustomText: Used to display the doctor's name (doctor).

  Styles:
  - container: Layout styles for the main container.
  - time: Formatting styles for displaying the appointment time.
  - doctor: Formatting styles for displaying the doctor's name.
*/

import React from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {colors} from '../global/colors';
import CustomText from '../global/CustomText';
import { useNavigation } from '@react-navigation/native';

const Appointment_Disponibility_Hours = ({time, doctor}) => {
  const navigation = useNavigation();
    const handleValidationAppointment = () => {
        navigation.navigate('Valider le Rendez-vous');
    };

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <TouchableOpacity onPress={handleValidationAppointment}>
      <View style={styles.container}>
        <CustomText fontSize={15} style={styles.time}>
          {time}
        </CustomText>
        <CustomText style={styles.doctor}>{doctor}t</CustomText>
      </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.black,
    marginHorizontal:4,
    textAlign:"center",
    paddingVertical:2,
    paddingHorizontal:10,
    justifyContent: "center",
    alignItems:"center"
  },
  time: {
    color: colors.black,
  },
  doctor: {
    color: colors.black,
  },
});

export default Appointment_Disponibility_Hours;
