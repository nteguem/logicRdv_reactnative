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
import {View, StyleSheet, ScrollView} from 'react-native';
import {colors} from '../global/colors';
import CustomText from '../global/CustomText';

const Appointment_Disponibility_Hours = ({time, doctor}) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <CustomText fontSize={15} style={styles.time}>
          {time}
        </CustomText>
        <CustomText style={styles.doctor}>{doctor}t</CustomText>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: colors.gray,
    padding: 4,
    marginLeft: 5,
    flex: 1,
  },
  time: {
    color: colors.gray,
  },
  doctor: {
    color: colors.black,
    margin: 4,
  },
});

export default Appointment_Disponibility_Hours;
