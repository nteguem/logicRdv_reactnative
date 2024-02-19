import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Appointment_Disponibility_Hours from './Appointment_Disponibility_Hours';
import {colors} from '../global/colors';
import CustomText from '../Texts/CustomText';

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
