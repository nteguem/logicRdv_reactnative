import { View, Text, StyleSheet, Dimensions, ActivityIndicator } from 'react-native'
import React from 'react'
import { colors } from '../../components/global/colors'
import CustomText from '../../components/global/CustomText'
import CustomAppButton from '../../components/global/CustomAppButton'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, connect } from 'react-redux';
import { createAppointmentRequest } from '../../redux/appointment/actions';

const ConfirmationAppointmentScreen = ({ route, isLoadingAppointment, appointmentValided, navigationAppointment, headerMessage, session }) => {
  const { tokenappointment } = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleBackToHome = () => {
    navigation.navigate('Mes rendez-vous');
  };

  const handleBackToAppointment = async (week, data, action) => {
    await dispatch(createAppointmentRequest(tokenappointment, week, data, action, session));
    navigation.navigate('Motif du Rendez-vous', { tokenappointment });
  };

  return (
    <>
      {isLoadingAppointment ? (
        <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.blue} />
      </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.content} >
            <View style={styles.message}>
              <CustomText
                color={colors.black}
                fontSize={12}
                fontWeight={500}
              >
                {headerMessage}

              </CustomText>
            </View >
            <View style={styles.button}>
              <CustomAppButton
                onPress={() => handleBackToAppointment(appointmentValided[0]?.onclick_week, appointmentValided[0]?.onclick_data, appointmentValided[0]?.onclick_action)}
                title={appointmentValided[0]?.label}
                bkgroundColor={colors.blue}
                textColor={colors.white}
                paddingHorizontal={35}
                paddingVertical={10}
                borderRadius={8}
                textFontSize={12}
              />
              <CustomAppButton
                onPress={handleBackToHome}
                title="Quitter"
                bkgroundColor={colors.blue}
                textColor={colors.white}
                paddingHorizontal={10}
                paddingVertical={10}
                borderRadius={8}
                textFontSize={12}

              />
            </View>
          </View>
        </View>
      )}
    </>
  )
}

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    position: 'absolute',
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue300,
  },
  content: {
    margin: 10,
    borderRadius: 10,
    paddingVertical: 10,
    backgroundColor: colors.white
  },
  message: {
    paddingHorizontal: 12,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 6,
    gap: 12
  },
})
const mapStateToProps = (state) => ({
  appointmentValided: state.AppointmentReducer?.appointmentValided,
  headerMessage: state.AppointmentReducer?.headerMessage,
  navigationAppointment: state.AppointmentReducer?.navigation,
  session: state.AppointmentReducer?.session,
  isLoadingAppointment: state.AppointmentReducer?.isLoading,
});

export default connect(mapStateToProps)(ConfirmationAppointmentScreen);
