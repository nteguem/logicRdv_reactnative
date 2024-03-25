import { View, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import ContainerScreen from '../../components/wrappers/ContainerScreen';
import Appointment_Disponibility from '../../components/AppointmentPlanification/Appointment_Disponibility';
import CustomText from '../../components/global/CustomText';
import { colors } from '../../components/global/colors';
import CustomAppButton from '../../components/global/CustomAppButton';
import { useDispatch, connect } from 'react-redux';
import { createAppointmentRequest } from '../../redux/appointment/actions';
import { useNavigation } from '@react-navigation/native';

const DateAppointment = ({ route, session, isLoadingAppointment, dataCreneaux, navigationAppointment }) => {
  const { motif, tokenappointment } = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleButtonWeekPress = async (week, data, action) => {
    await dispatch(createAppointmentRequest(tokenappointment, week, data, action, session));
  };

  const handleValidation = async (creneau) => {
    const { onclick_week, onclick_data, onclick_action } = creneau;
    await dispatch(createAppointmentRequest(tokenappointment, onclick_week, onclick_data, onclick_action, session));
    navigation.navigate('Valider le Rendez-vous', { tokenappointment: tokenappointment });
  };

  return (
    <>
      <ContainerScreen isLoading={isLoadingAppointment}>
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
            dataCreneaux.map((item, index) => (
              <Appointment_Disponibility
                key={index}
                label={item?.label}
                label2={item?.label2}
                creneaux={item?.creneaux}
                message={item?.message}
                handleValidationAppointment={handleValidation}
              />
            ))
          }
        </ScrollView>
      </ContainerScreen>
      <View style={styles.container}>
        <View style={styles.containerButton}>
          {navigationAppointment.prevweek && navigationAppointment.prevweek?.onclick_week && (
            <View style={{ marginLeft: 'auto' }}>
              <CustomAppButton
                onPress={() => handleButtonWeekPress(navigationAppointment.prevweek?.onclick_week, navigationAppointment.prevweek?.onclick_data, navigationAppointment.prevweek?.onclick_action)}
                title='sem.préc'
                alignSelf="baseline"
                paddingVertical={16}
                textColor={colors.white}
                textFontSize={10}
                bkgroundColor='transparent'
              />
            </View>
          )}
          {navigationAppointment.nextweek && navigationAppointment.nextweek?.onclick_week && (
            <View style={{ marginLeft: 'auto' }}>
              <CustomAppButton
                onPress={() => handleButtonWeekPress(navigationAppointment.nextweek?.onclick_week, navigationAppointment.nextweek?.onclick_data, navigationAppointment.nextweek?.onclick_action)}
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
  dataCreneaux: state.AppointmentReducer?.dataCreneaux,
  appointmentValidation: state.AppointmentReducer?.appointmentValidation,
  session: state.AppointmentReducer?.session,
  isLoadingAppointment: state.AppointmentReducer?.isLoading,
});

export default connect(mapStateToProps)(DateAppointment);
