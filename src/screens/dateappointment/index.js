import { View, Text, StyleSheet,Dimensions } from 'react-native';
import React from 'react';
import ContainerScreen from '../../components/wrappers/ContainerScreen';
import Appointment_Disponibility from '../../components/AppointmentPlanification/Appointment_Disponibility';
import datadisponibility from '../data/datadisponibility';
import CustomAppButton from '../../components/global/CustomAppButton';
import { colors } from '../../components/global/colors';

const DateAppointment = () => {
  const data = datadisponibility;
  return (
    <ContainerScreen>
      <View>
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
        <View style={styles.footer}>
          <CustomAppButton
            title="sem.suiv."
            textColor={colors.white}
            bkgroundColor='none'
            
          />
        </View>
      </View>
    </ContainerScreen>
  )
}

const screenHeight = Dimensions.get('window').height;
const mytop = screenHeight - 50
const styles = StyleSheet.create({
  footer:{
    backgroundColor:colors.blue,
    height: 50,
    justifyContent: 'space-between',
    alignItems:"flex-end",
    alignContent:"flex-end",
  }
})

export default DateAppointment