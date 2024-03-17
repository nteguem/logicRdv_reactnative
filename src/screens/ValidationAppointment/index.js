import { View, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import ContainerScreen from '../../components/wrappers/ContainerScreen'
import ValidationInfoRDV from '../../components/ValidationAppointment/ValidationInfoRDV'
import ValidationPaymentForm from '../../components/ValidationAppointment/ValidationPaymentForm'
import ValidationNoticeRDV from '../../components/ValidationAppointment/ValidationNoticeRDV'
import CustomAppButton from '../../components/global/CustomAppButton'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../components/global/colors'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, connect } from 'react-redux';
import { SafeAreaView, StyleSheet, TextInput, Animated, TouchableOpacity, } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import CustomText from '../../components/global/CustomText'
import { createAppointmentRequest } from '../../redux/appointment/actions'
import AppointmentDetails from '../../components/MyAppointment/Appointment_Details'

const FloatingLabelInput = ({
  label,
  value,
  onChangeText,
  multiline = false,
  keyboardType,
  maxLength,
  numberOfLines,
  showCrossIcon = false,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedIsFocused = new Animated.Value(value === '' ? 0 : 1);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  Animated.timing(animatedIsFocused, {
    toValue: isFocused || value !== '' ? 1 : 0,
    duration: 200,
    useNativeDriver: false,
  }).start();

  const labelStyle = {
    position: 'absolute',
    left: 20,
    top: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [15, -10],
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [18, 10],
    }),
    color: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: ['#aaa', '#000'],
    }),
  };

  const handleLabelPress = () => {
    setIsFocused(true);
    // Focus the input field programmatically
    inputRef.current.focus();
  };

  const inputRef = useRef(null);

  const clearText = () => {
    onChangeText(''); // Effacer le texte
  };

  return (
    <View style={styles.container}>
      <Animated.Text
        onPress={handleLabelPress}
        style={[labelStyle, styles.label]}>
        {label}
      </Animated.Text>
      <View>
        <TextInput
          ref={inputRef}
          style={[styles.input, multiline && styles.multilineInput]}
          value={value}
          onChangeText={onChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          multiline={multiline}
          keyboardType={keyboardType}
          maxLength={maxLength}
          {...rest}
        />
        {showCrossIcon && value !== '' && (
          <TouchableOpacity onPress={clearText}>
            <Icon name="cross" size={24} color={colors.red} style={styles.icon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const ValidationAppointment = ({ route, session, appointmentValidation, isLoadingAppointment }) => {
  const { tokenappointment } = route.params;
  const [isAppointmentInProgress, setIsAppointmentInProgress] = useState(true);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleConfirmationAppointment = async (week, data, action) => {
    const tokenuser = 'SyL6yfPf5EDRiGSFZqLNEOEPUL6Q1e0Cbuu2Jy6iag4fACPjJVKnV0802014';
    await dispatch(createAppointmentRequest(tokenuser, tokenappointment, week, data, action, session));
    navigation.navigate('Confirmation rdv', { tokenappointment: tokenappointment, appointmentValidation });
  };

  return (
    <ContainerScreen isLoading={isLoadingAppointment}>
      {appointmentValidation?.apptsinprogress?.appts.length > 0 ? (
        <ScrollView>
          <CustomText fontSize={10} color={colors.black} style={{ marginVertical: 12 }}>
            {appointmentValidation?.apptsinprogress.message}
          </CustomText>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 10 }}>
            <CustomAppButton
              // onPress={handleAppointment}
              title='POURSUIVRE LA PRISE DE RDV'
              alignSelf="baseline"
              paddingVertical={16}
              paddingHorizontal={20}
              textColor={colors.white}
              textFontSize={10}
              borderRadius={10}
              bkgroundColor={colors.blue}
              fontWeight='bold'
              userIcon
              display='none'
            />
          </View>
          {appointmentValidation?.apptsinprogress?.appts.map((appt, index) => (
            <AppointmentDetails
              key={index}
              date={appt?.date}
              doctor={appt?.doctor}
              appointmentType={appt?.label}
              buttonBorderColor={colors.red}
              buttonTextColor={colors.red}
              cancelButton='Annuler'
              firstCompartmentBackgroundColor={colors.blue}
              userIcon={true}
              display='flex'
            />
          ))}
        </ScrollView>
      ) : (
        <ScrollView>
          <ValidationInfoRDV
            title={appointmentValidation?.messagenbperson}
            date={appointmentValidation?.appttovalid?.date}
            doctor={appointmentValidation?.appttovalid?.doctor}
            place={appointmentValidation?.appttovalid?.description}
            patient={appointmentValidation?.appttovalid?.patient}
          />

          <SafeAreaView>
            <View style={styles.card}>
              <View style={styles.titleRDV}>
                <CustomText
                  fontSize={15}
                  fontWeight={700}
                  color={colors.black}
                  style={styles.title}>
                  Informations à compléter
                </CustomText>
              </View>

              <View style={styles.compartment}>
                {appointmentValidation?.apptinput &&
                  appointmentValidation?.apptinput.map((input, index) => (
                    <FloatingLabelInput
                      key={index}
                      label={input?.label}
                      value={input?.value}
                      // onChangeText={(text)=>setValue(text)}
                      placeholderTextColor="gray"
                      maxLength={input.name === 'note' ? 40 : 10}
                      keyboardType="numeric"
                      numberOfLines={input.name === 'note' ? 6 : 'single'}
                      multiline={input.name === 'note' ? true : false}
                      showCrossIcon
                    />
                  ))}
              </View>
            </View>
          </SafeAreaView>

          {/* <ValidationPaymentForm /> */}
          <ValidationNoticeRDV
            container={appointmentValidation?.messageglobalinternet}
          />
          <View style={{ width: '100%', marginVertical: 10 }}>
            <CustomAppButton
              onPress={() => handleConfirmationAppointment(appointmentValidation.apptbuttonvalidation.onclick_week, appointmentValidation.apptbuttonvalidation.onclick_data, appointmentValidation.apptbuttonvalidation.onclick_action)}
              iconComponent={<MaterialIcons name="save" size={18} color={colors.white} style={{ marginRight: 5 }} />}
              title={appointmentValidation?.apptbuttonvalidation?.label}
              alignSelf="center"
              paddingVertical={15}
              textColor={colors.white}
              textFontSize={10}
              borderRadius={10}
              bkgroundColor={colors.blue}
              width='100%'
            />
          </View>
        </ScrollView>
      )}

    </ContainerScreen>
  )
}

const styles = StyleSheet.create({
  card: {
    paddingVertical: 15,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginVertical: 10,

  },
  compartment: {
    paddingHorizontal: 15,
    gap: 25,
  },
  container: {
    position: 'relative',
  },
  input: {
    marginLeft: 12,
    marginRight: 12,
    borderWidth: 1,
    padding: 10,
    color: colors.black,
    fontSize: 12,
    borderRadius: 6,
    textAlignVertical: 'center',
    fontWeight: '500',
  },
  multilineInput: {
    textAlignVertical: 'top',
    height: 150,
    fontWeight: '500',
  },
  label: {
    zIndex: 1,
    backgroundColor: 'white',
    fontSize: 12,
  },
  icon: {
    position: 'absolute',
    marginRight: 10,
    right: 10,
    top: '10%',
    transform: [{ translateY: -35 }]
  },
  titleRDV: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: 12,
  },
});

const mapStateToProps = (state) => ({
  appointmentValidation: state.AppointmentReducer?.appointmentValidation,
  session: state.AppointmentReducer?.session,
  isLoadingAppointment: state.AppointmentReducer?.isLoading,
});

export default connect(mapStateToProps)(ValidationAppointment);
