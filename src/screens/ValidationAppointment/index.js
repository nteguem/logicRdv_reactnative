import { View, ScrollView, Modal } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import ContainerScreen from '../../components/wrappers/ContainerScreen'
import ValidationInfoRDV from '../../components/ValidationAppointment/ValidationInfoRDV'
import ValidationNoticeRDV from '../../components/ValidationAppointment/ValidationNoticeRDV'
import CustomAppButton from '../../components/global/CustomAppButton'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../components/global/colors'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, connect } from 'react-redux';
import { SafeAreaView, StyleSheet, TextInput, Animated, TouchableOpacity, } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import CustomText from '../../components/global/CustomText'
import { cancelAppointmentRequest, createAppointmentRequest } from '../../redux/appointment/actions'
import AppointmentDetails from '../../components/MyAppointment/Appointment_Details'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { showMessage } from 'react-native-flash-message'
import { CardField,createPaymentMethod, confirmPayment,} from '@stripe/stripe-react-native';

const FloatingLabelInput = ({
  label,
  value,
  onChangeText,
  multiline = false,
  keyboardType,
  maxLength,
  numberOfLines,
  showCrossIcon = false,
  required,
  onFocusDate,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedIsFocused = new Animated.Value(value === '' ? 0 : 1);

  const handleFocus = () => {
    if (label === 'Date de naissance' && onFocusDate) {
      onFocusDate(); // Si le champ de la date est focus, appeler onFocusDate
    } else {
      setIsFocused(true); // Sinon, utiliser la logique d'origine
    }
  };
  const handleBlur = () => setIsFocused(false);

  Animated.timing(animatedIsFocused, {
    toValue: isFocused || value !== '' ? 1 : 0,
    duration: 200,
    useNativeDriver: false,
  }).start();

  const labelStyle = {
    position: 'absolute',
    left: 40,
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
    inputRef.current.focus();
  };

  const inputRef = useRef(null);

  const clearText = () => {
    onChangeText('');
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
          value={String(value)}
          onChangeText={onChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          multiline={multiline}
          keyboardType={keyboardType}
          maxLength={maxLength}
          required={required}
          {...rest}
        />
        {showCrossIcon && value !== '' && (
          <Icon name="cross" size={24} color={colors.black} style={styles.icon} onPress={clearText} />
        )}
      </View>
    </View>
  );
};

const ValidationAppointment = ({ route, session, data, isLoadingAppointment, params,paiementIntent }) => {
  const { tokenappointment } = route.params;
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [apptToCancel, setApptToCancel] = useState(null);
  const [showAppointmentList, setShowAppointmentList] = useState(false);
  const [securityNumber, setSecurityNumber] = useState('');
  const [reasonForAppointment, setReasonForAppointment] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [thisDate, setThisDate] = useState('');
  const [cardDetails, setCardDetails] = useState(null);
  const [paymentMethodId, setPaymentMethodId] = useState(null);

  useEffect(() => {
    if (data && data.apptinput) {
      const securityNumberInput = data.apptinput.find(input => input.name === 'client_nir');
      const reasonForAppointmentInput = data.apptinput.find(input => input.name === 'note');
      const thisDateInput = data.apptinput.find(input => input.name === 'client_birthday');

      if (securityNumberInput) {
        setSecurityNumber(securityNumberInput.value);
      }
      if (reasonForAppointmentInput) {
        setReasonForAppointment(reasonForAppointmentInput.value);
      }
      if (thisDateInput) {
        setThisDate(thisDateInput.value);
      }
    }
 
  }, [data]);

  useEffect(() => {
    if (cardDetails?.complete) {
      createPaymentMethod({ paymentMethodType: 'Card', card: cardDetails })
        .then(paymentMethodResponse => {
          if (paymentMethodResponse.error) {
            console.log('Error creating payment method:', paymentMethodResponse.error);
            dispatch({ type: MAKE_PAIEMENT_FAILURE, payload: paymentMethodResponse.error });
            return;
          }
          console.log("paymentMethodResponse",paymentMethodResponse)
          const paymentId = paymentMethodResponse.paymentMethod.id;
          setPaymentMethodId(paymentId)
        })
        .catch(error => {
          console.error('Error catch  creating payment method:', error);
          dispatch({ type: MAKE_PAIEMENT_FAILURE, payload: error });
        });
    }
  }, [cardDetails]);
  
 

  useEffect(() => {
    if (data?.apptsinprogress?.appts.length > 0) {
      setShowAppointmentList(true);
    } else {
      setShowAppointmentList(false);
    }
  }, [data]);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    setThisDate(formatDateToString(date));
    hideDatePicker();
  };

  const formatDateToString = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
    return `${formattedDay}/${formattedMonth}/${year}`;
  };

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSecurityNumberChange = text => {
    setSecurityNumber(text);
  };

  const handleReasonForAppointmentChange = text => {
    setReasonForAppointment(text)
  };

  const handleCancelAppt = async () => {
    if (apptToCancel) {
      const tokenappointment = apptToCancel?.token
      await dispatch(cancelAppointmentRequest({ tokenappointment: tokenappointment }));
      await dispatch(createAppointmentRequest(params.tokenappointment, params.week, params.data, params.action, params.session));
      setApptToCancel(null);
      setShowDeleteModal(false);
    }
  }

  const mandatoryFields = [
    { label: 'Date de naissance', mandatory: '1', name: 'client_birthday', value: thisDate },
    { label: 'Numéro de sécurité social', mandatory: '1', name: 'client_nir', value: securityNumber },
    { label: 'Motif du Rdv', mandatory: '1', name: 'note', value: reasonForAppointment }
  ];

  const handleConfirmationAppointment = async (week, action) => {
    const mandatoryFields = [
      { label: 'Date de naissance', mandatory: '1', name: 'client_birthday', value: thisDate },
      { label: 'Numéro de sécurité social', mandatory: '1', name: 'client_nir', value: securityNumber },
      { label: 'Motif du Rdv', mandatory: '1', name: 'note', value: reasonForAppointment }
    ];
    const filledMandatoryFields = mandatoryFields.filter((field) => field?.value.trim() !== '');
    if (mandatoryFields.length === filledMandatoryFields.length) {
        await dispatch(createAppointmentRequest(tokenappointment, week, data.apptbuttonvalidation.onclick_data, action, session,paymentMethodId));

    } else {
      showMessage({
        message: 'Champs manquants',
        description: 'Veuillez remplir tous les champs obligatoires.',
        type: 'warning',
        duration: 3500,
      });
    }
  };


  const isAllFieldsFilled = mandatoryFields.every(field => field.value.trim() !== '');
  const isCardComplete = cardDetails?.complete ?? false;

  return (
    <ContainerScreen isLoading={isLoadingAppointment}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showDeleteModal}
        onRequestClose={() => setShowDeleteModal(false)}
      >
        <View style={styles.modalBackground}></View>
        <View style={styles.centeredView}>
          <View
            style={[styles.modalView,
            {
              borderRadius: 8
            }]}
          >
            <View style={styles.body}>
              <CustomText fontSize={12} fontWeight='bold'>Êtes-vous sûr de vouloir annuler ce rendez-vous ?</CustomText>
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 8 }}>
                <CustomAppButton
                  onPress={() => setShowDeleteModal(false)}
                  title="Annuler"
                  alignSelf="baseline"
                  paddingVertical={16}
                  paddingHorizontal={40}
                  textColor={colors.white}
                  textFontSize={12}
                  borderRadius={5}
                  bkgroundColor={colors.blue}
                  userIcon
                  display='none'
                />
                <CustomAppButton
                  onPress={() => handleCancelAppt(apptToCancel)}
                  title="Confirmer"
                  alignSelf="baseline"
                  paddingVertical={16}
                  paddingHorizontal={30}
                  textColor={colors.white}
                  textFontSize={12}
                  borderRadius={5}
                  bkgroundColor={colors.red}
                  userIcon
                  display='none'
                />
              </View>

            </View>
          </View>
        </View>
      </Modal>

      {showAppointmentList ? (
        <ScrollView>
          <CustomText fontSize={10} color={colors.black} style={{ marginVertical: 12 }}>
            {data?.apptsinprogress?.message}
          </CustomText>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 10 }}>
            <CustomAppButton
              onPress={() => setShowAppointmentList(false)}
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
          {data?.apptsinprogress?.appts.map((appt, index) => (
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
              handleCancelAppt={() => {
                setApptToCancel(appt);
                setShowDeleteModal(true);
              }}
            />
          ))}
        </ScrollView>
      ) : (
        <ScrollView>
          <ValidationInfoRDV
            title={data?.messagenbperson}
            date={data?.appttovalid?.date}
            doctor={data?.appttovalid?.doctor}
            place={data?.appttovalid?.description}
            patient={data?.appttovalid?.patient}
          />

          <SafeAreaView>
            <View style={styles.card}>
              <View style={styles.titleRDV}>
                <CustomText
                  fontSize={15}
                  fontWeight={700}
                  color={colors.black}
                  style={styles.title}>
                  INFORMATIONS A COMPLETER
                </CustomText>
              </View>

              <View style={styles.compartment}>
                {data?.apptinput &&
                  data?.apptinput.map((input, index) => {
                    return (
                      <FloatingLabelInput
                        key={index}
                        label={input?.label}
                        value={input?.name === 'client_birthday' ? thisDate : input?.name === 'client_nir' ? securityNumber : reasonForAppointment}
                        onChangeText={input?.name === 'client_birthday' ? formatDateToString : input?.name === 'client_nir' ? handleSecurityNumberChange : handleReasonForAppointmentChange}
                        onFocus={input?.name === 'client_birthday' ? showDatePicker : null}
                        placeholderTextColor="gray"
                        maxLength={input?.name === 'note' ? 40 : 10}
                        keyboardType={input?.name === 'note' ? 'default' : 'numeric'}
                        numberOfLines={input?.name === 'note' ? 6 : 1}
                        multiline={input?.name === 'note'}
                        showCrossIcon={input?.name !== 'client_birthday'}
                        required={input?.mandatory === '1'}
                      />
                    );
                  })}

              </View>
            </View>
          </SafeAreaView>

          {data?.payment && Object.keys(data.payment).length > 0 && (
                <View style={styles.cardPaiement}>
                {/* Première ligne pour le numéro de carte */}
                <CardField
                  postalCodeEnabled={false}
                  expiry
                  placeholders={{
                    number: 'XXXX XXXX XXXX XXXX',
                  }}
                  cardStyle={{
                    textColor: '#000000',
                    borderRadius: 12
                  }}
                  style={{
                    height: 50, // Hauteur de la première ligne
                  }}
                  onCardChange={(cardDetails) => {
                    console.log('cardDetails', cardDetails);
                  }}
                  onFocus={(focusedField) => {
                    console.log('focusField', focusedField);
                  }}
                />
                {/* Deuxième ligne pour la date d'expiration et le CVV */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                  {/* Champ de la date d'expiration */}
                  <View style={{ width: '48%' }}>
                    <CardField
                      postalCodeEnabled={false}
                      placeholders={{
                        expiration: 'MM/YY',
                      }}
                      cardStyle={{
                        textColor: '#000000',
                        borderRadius: 12
                      }}
                      style={{
                        height: 50, // Hauteur de la deuxième ligne
                      }}
                      onCardChange={(cardDetails) => {
                        console.log('cardDetails', cardDetails);
                      }}
                      onFocus={(focusedField) => {
                        console.log('focusField', focusedField);
                      }}
                    />
                  </View>
                  {/* Champ du CVV */}
                  <View style={{ width: '48%' }}>
                    <CardField
                      postalCodeEnabled={false}
                      placeholders={{
                        cvc: 'CVV',
                      }}
                      cardStyle={{
                        textColor: '#000000',
                        borderRadius: 12
                      }}
                      style={{
                        height: 50, // Hauteur de la deuxième ligne
                      }}
                      onCardChange={(cardDetails) => {
                        console.log('cardDetails', cardDetails);
                      }}
                      onFocus={(focusedField) => {
                        console.log('focusField', focusedField);
                      }}
                    />
                  </View>
                </View>
              </View>
              
          )}

          {data?.payment && Object.keys(data.payment).length > 0 && (
            <ValidationNoticeRDV
              container={`${data.payment.amountlabel}: ${data.payment.amount}`}
              fontWeight='bold'
            />
          )}

          <View style={{ marginVertical: 12 }}>
            <ValidationNoticeRDV
              container={data?.messageglobalinternet}
            />
          </View>

          {data?.payment && Object.keys(data.payment).length > 0 && (
            <ValidationNoticeRDV
              container={data?.payment?.infos}
            />
          )}

          <View style={{ width: '100%', marginVertical: 10 }}>
            <CustomAppButton
              onPress={() => handleConfirmationAppointment(data.apptbuttonvalidation.onclick_week, data.apptbuttonvalidation.onclick_action)}
              iconComponent={<MaterialIcons name="save" size={18} color={colors.white} style={{ marginRight: 5 }} />}
              title={data?.apptbuttonvalidation?.label}
              alignSelf="center"
              paddingVertical={15}
              textColor={colors.white}
              textFontSize={10}
              borderRadius={10}
              bkgroundColor={colors.blue}
              width='100%'
              disabled={!isAllFieldsFilled || !isCardComplete}
            />
          </View>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            theme={{
              backgroundColor: "blue",
              headerTextColor: "white",
              headerBackgroundColor: "blue",
              accentColor: "white",
              textDayFontSize: 18,
              textMonthFontSize: 20,
              textDayHeaderFontSize: 16,
              textDayFontWeight: "bold",
            }}
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
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
    marginVertical: 10
  },
  input: {
    marginLeft: 24,
    marginRight: 24,
    borderWidth: 1,
    paddingLeft: 15,
    paddingTop: 15,
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
    marginRight: 15,
    right: 20,
    top: '30%',
  },
  titleRDV: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: 12,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "80%",
  },
  compartment: {
    marginTop: -10,
    marginHorizontal: -10
  },
  body: {
    flexDirection: 'column',
    marginVertical: 16,
    gap: 12
  },
  containButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 8,
    marginTop: 14
  },
  modalBackground: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Couleur de fond semi-transparente
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

const mapStateToProps = (state) => ({
  data: state.AppointmentReducer?.data,
  session: state.AppointmentReducer?.session,
  isLoadingAppointment: state.AppointmentReducer?.isLoading,
  params: state.AppointmentReducer?.params,
  paiementIntent:state.AppointmentReducer?.paiementIntent
});

export default connect(mapStateToProps)(ValidationAppointment);