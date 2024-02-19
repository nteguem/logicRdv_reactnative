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
