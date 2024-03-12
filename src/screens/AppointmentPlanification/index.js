import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import React from 'react';
import ContainerScreen from '../../components/wrappers/ContainerScreen';
import Appointment_Disponibility from '../../components/AppointmentPlanification/Appointment_Disponibility';
import datadisponibility from '../data/datadisponibility';
import CustomText from '../../components/global/CustomText';
import { colors } from '../../components/global/colors';
import CustomAppButton from '../../components/global/CustomAppButton';
import { useDispatch, connect } from 'react-redux';
import { createAppointmentRequest } from '../../redux/appointment/actions';

const DateAppointment = ({ route, session }) => {
  const { motif, dataCreneau, tokenappointment, navigationAppointment } = route.params;

  const dispatch = useDispatch();
  const handleButtonWeekPress = (week) => {
    const tokenuser = '';
    const data = '';
    const action = '';
    dispatch(createAppointmentRequest(tokenuser, tokenappointment, week, data, action, session));

  };

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
            dataCreneau.map((item, index) => (
              <Appointment_Disponibility
                key={index}
                label={item.label}
                label2={item.label2}
                creneaux={item.creneaux}
                message={item.message}
              />
            ))
          }
        </ScrollView>
      </ContainerScreen>
      <View style={styles.container}>
        <View style={styles.containerButton}>
          {navigationAppointment.prev.onclick_week && (
            <View style={{ marginLeft: 'auto' }}>
              <CustomAppButton
                onPress={() => handleButtonWeekPress(navigationAppointment.prev.onclick_week)}
                title='sem.prec'
                alignSelf="baseline"
                paddingVertical={16}
                textColor={colors.white}
                textFontSize={10}
                bkgroundColor='transparent'
              />
            </View>
          )}
          {navigationAppointment.nextweek.onclick_week && (
            <View style={{ marginLeft: 'auto' }}>
              <CustomAppButton
                onPress={() => handleButtonWeekPress(navigationAppointment.nextweek.onclick_week)}
                title='sem.suiv'
                alignSelf="baseline"
                paddingVertical={16}
                textColor={colors.white}
                textFontSize={10}
                bkgroundColor='transparent'
              />
            </View>
          )}
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

const mapStateToProps = (state) => ({
  navigationAppointment: state.AppointmentReducer?.navigation,
  motifRendezVous: state.AppointmentReducer?.motifRendezVous,
  session: state.AppointmentReducer?.session,
  isLoadingAppointment: state.AppointmentReducer?.isLoading,
});

export default connect(mapStateToProps)(DateAppointment);
