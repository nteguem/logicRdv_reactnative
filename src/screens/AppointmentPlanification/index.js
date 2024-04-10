import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView,Text } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import ContainerScreen from '../../components/wrappers/ContainerScreen';
import Appointment_Disponibility from '../../components/AppointmentPlanification/Appointment_Disponibility';
import CustomText from '../../components/global/CustomText';
import { colors } from '../../components/global/colors';
import CustomAppButton from '../../components/global/CustomAppButton';
import { createAppointmentRequest } from '../../redux/appointment/actions';
import { setModalVisible } from '../../redux/app/actions';

const DateAppointment = ({ route, session, isLoadingAppointment, data, navigationAppointment }) => {
  const { title, tokenappointment } = route.params;
  const dispatch = useDispatch();

  const handleButtonWeekPress = async (week, data, action) => {
    await dispatch(createAppointmentRequest(tokenappointment, week, data, action, session));
  };

  const handleValidation = async (creneau) => {
    if(creneau.onclick_message == "")
    {
      const { onclick_week, onclick_data, onclick_action } = creneau;
      await dispatch(createAppointmentRequest(tokenappointment, onclick_week, onclick_data, onclick_action, session));  
    }
    else 
    {
      dispatch(setModalVisible(true, creneau.onclick_message))
    }
 };

  return (
    <View style={styles.container}>
      <ContainerScreen isLoading={isLoadingAppointment}>
        <View style={styles.title}>
          <CustomText fontSize={12} fontWeight={'bold'} color={colors.black}>
            Date et heure pour:
          </CustomText>
          <CustomText fontSize={12} fontWeight={'bold'} color={colors.blue}>
            {title}
          </CustomText>
        </View>
        <ScrollView>
          {data.length > 0 ? data.map((item, index) => (
            <Appointment_Disponibility
              key={index}
              label={item?.label}
              label2={item?.label2}
              creneaux={item?.creneaux}
              message={item?.message}
              handleValidationAppointment={handleValidation}
            />
          )) :
          <Text>Aucun créneau disponible</Text>
        }
        </ScrollView>
      </ContainerScreen>
      <View style={[styles.buttonContainer, {justifyContent: navigationAppointment.nextweek && navigationAppointment.prevweek ? 'space-between' : 'flex-end'}]}>
        {navigationAppointment.prevweek && (
          <CustomAppButton
            onPress={() => handleButtonWeekPress(navigationAppointment.prevweek?.onclick_week, navigationAppointment.prevweek?.onclick_data, navigationAppointment.prevweek?.onclick_action)}
            title='sem.préc'
            alignSelf="baseline"
            paddingVertical={16}
            textColor={colors.white}
            textFontSize={10}
            bkgroundColor='transparent'
          />
        )}
        {navigationAppointment.nextweek && navigationAppointment.nextweek?.onclick_week && (
          <CustomAppButton
            onPress={() => handleButtonWeekPress(navigationAppointment.nextweek?.onclick_week, navigationAppointment.nextweek?.onclick_data, navigationAppointment.nextweek?.onclick_action)}
            title='sem.suiv'
            alignSelf="baseline"
            paddingVertical={16}
            textColor={colors.white}
            textFontSize={10}
            bkgroundColor='transparent'
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
  },
  title: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 14,
  },
});

const mapStateToProps = (state) => ({
  navigationAppointment: state.AppointmentReducer?.navigation,
  data: state.AppointmentReducer?.data,
  session: state.AppointmentReducer?.session,
  isLoadingAppointment: state.AppointmentReducer?.isLoading,
});

export default connect(mapStateToProps)(DateAppointment);
