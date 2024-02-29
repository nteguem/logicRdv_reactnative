import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import React from 'react';
import ContainerScreen from '../../components/wrappers/ContainerScreen';
import Appointment_Disponibility from '../../components/AppointmentPlanification/Appointment_Disponibility';
import datadisponibility from '../data/datadisponibility';
import CustomText from '../../components/global/CustomText';
import { colors } from '../../components/global/colors';

const DateAppointment = () => {
  const data = datadisponibility;
  return (
    <ContainerScreen>
      <View style={styles.title}>
        <CustomText fontSize={18} fontWeight={'bold'} color={colors.black}>
          Date et heure pour: 
        </CustomText>
        <CustomText fontSize={18} fontWeight={'bold'} color={colors.blue}>
         consultation
        </CustomText>

      </View>
      <ScrollView>
        {
          data.map((item, index) => (
            <Appointment_Disponibility
              key={index}
              label={item.label}
              label2={item.label2}
              creneaux={item.creneaux}
            />
          ))
        }
      </ScrollView>

    </ContainerScreen>
  )
}
const styles = StyleSheet.create({
  title:{
    paddingVertical:10,
    flexDirection: "row",
    gap:4

  }
})

export default DateAppointment;