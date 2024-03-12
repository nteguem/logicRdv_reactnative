import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import React from 'react';
import ContainerScreen from '../../components/wrappers/ContainerScreen';
import Appointment_Disponibility from '../../components/AppointmentPlanification/Appointment_Disponibility';
import datadisponibility from '../data/datadisponibility';
import CustomText from '../../components/global/CustomText';
import { colors } from '../../components/global/colors';
import CustomAppButton from '../../components/global/CustomAppButton';

const DateAppointment = ({ route }) => {
  const { motif } = route.params;
  
  const data = datadisponibility;
  return (
    <>
      <ContainerScreen>
        <View style={styles.title}>
          <CustomText fontSize={12} fontWeight={'bold'} color={colors.black}>
            Date et heure pour:
          </CustomText>
          <CustomText fontSize={12} fontWeight={'bold'} color={colors.blue}>
            {motif.description}
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
      <View style={styles.container}>
        <View style={styles.containerButton}>
          <CustomAppButton
            // onPress={handleSignUp}
            title='sem.prec'
            alignSelf="baseline"
            paddingVertical={16}
            textColor={colors.white}
            textFontSize={10}
            bkgroundColor='transparent' 
          />
          <CustomAppButton
            // onPress={handleSignIn}
            title='sem.suiv'
            paddingVertical={16}
            textColor={colors.white}
            textFontSize={10}
            bkgroundColor='transparent'  
          />
        </View>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  title: {
    paddingVertical: 10,
    flexDirection: "row",
    gap: 4
  },
  container: {
    backgroundColor: colors.blue,
    width: '100%',
},
containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 14
},
})

export default DateAppointment;