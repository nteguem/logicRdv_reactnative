import { View, Text, StyleSheet,Dimensions, ScrollView } from 'react-native';
import React from 'react';
import ContainerScreen from '../../components/wrappers/ContainerScreen';
import Appointment_Disponibility from '../../components/AppointmentPlanification/Appointment_Disponibility';
import datadisponibility from '../data/datadisponibility';

const DateAppointment = () => {
  const data = datadisponibility;
  return (
    <ContainerScreen>
    
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
 
export default DateAppointment;