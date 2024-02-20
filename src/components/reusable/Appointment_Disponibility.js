/*
  This React Native component is used to display the availability of appointments for a particular date.
  It takes two props as input: 'date' for the date and 'appointments' for an array of appointment objects.
  The component splits the 'date' prop into 'day' and 'dateString' for better formatting.

  Component Structure:
  - View: Main container for the component.
    - View: Container for displaying the day and date.
      - CustomText: Displays the day with specific formatting.
      - CustomText: Displays the date with specific formatting.
    - ScrollView: Enables horizontal scrolling.
      - Appointment_Disponibility_Hours: Renders each appointment's availability time and doctor.

  Styles:
  - container: Layout styles for the main container.
  - day: Layout styles for the container displaying the day and date.
*/

import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Appointment_Disponibility_Hours from './Appointment_Disponibility_Hours';
import {colors} from '../global/colors';
import CustomText from '../global/CustomText';

const Appointment_Disponibility = ({date, appointments}) => {
  const [day, dateString] = date.split(' ');
  return (
    <View style={styles.container}>
      <View style={styles.day}>
        <CustomText
          fontSize={15}
          fontWeight={500}
          style={{color: colors.black}}>
          {day}
        </CustomText>
        <CustomText fontSize={15} fontWeight={500} style={{color: colors.blue}}>
          {dateString}
        </CustomText>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {appointments.map((appointment, index) => (
          <Appointment_Disponibility_Hours
            key={index}
            time={appointment.time}
            doctor={appointment.doctor}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  day: {
    marginRight: 20,
  },
});

export default Appointment_Disponibility;
