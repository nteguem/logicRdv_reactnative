import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import CustomAppButton from '../../components/global/CustomAppButton'
import AppointmentDetails from '../../components/MyAppointment/Appointment_Details'
import ContainerScreen from '../../components/wrappers/ContainerScreen'
import { colors } from '../../components/global/colors'
import dataAppointment from '../data/dataAppointment'
import { connect } from 'react-redux';
import CustomText from '../../components/global/CustomText'
import { useNavigation } from '@react-navigation/native';

const Appointments = ({ list, isLoading }) => {
    const navigation = useNavigation();

    const handleAppointment = () => {
        navigation.navigate('Fixez rendez-vous');
    };

    return (
        <ContainerScreen isLoading={isLoading}>
            <ScrollView>
                <View style={styles.containerButton}>
                    <CustomAppButton
                        onPress={handleAppointment}
                        title="PRENDRE UN RENDEZ-VOUS RAPIDE"
                        alignSelf="baseline"
                        paddingVertical={16}
                        paddingHorizontal={20}
                        textColor={colors.white}
                        textFontSize={10}
                        borderRadius={10}
                        bkgroundColor={colors.blue}
                    />
                </View>
                <CustomText fontSize={20} color={colors.black} fontWeight='bold'>Mes Rendez-vous</CustomText>
                {list.map((item, index) => (
                    <AppointmentDetails
                        key={index}
                        date={item.appointment.date}
                        time={item.appointment.time}
                        doctor={item.appointment.with}
                        appointmentType={item.appointment.label}
                        patientName={item.patient.nom}
                        patientPhone={item.patient.phone}
                        patientEmail={item.patient.email}
                        addressName={item.cabinet.nom}
                        addressLine1={item.cabinet.city}
                        addressLine2={item.cabinet.address}
                        addressPhone={item.cabinet.phone}
                        buttonlabeltelecons={item.appointment.past === '0' ? item.appointment.buttonlabeltelecons : ''}
                        buttonTitle={item.appointment.buttonlabeltelecons !== '' ? item.appointment.buttonlabeltelecons : ''}
                        buttonBorderColor={
                            item.appointment.past === '0' && item.appointment.status !== 'cancel' ? colors.red :
                                item.appointment.past === '0' && item.appointment.status === 'cancel' ? colors.gray : ''
                        }
                        buttonTextColor={
                            item.appointment.past === '0' && item.appointment.status !== 'cancel' ? colors.red :
                                item.appointment.past === '0' && item.appointment.status === 'cancel' ? colors.gray : ''
                        }
                        display={item.appointment.past === '1' ? 'none' : 'flex'}
                        firstCompartmentBackgroundColor={
                            item.appointment.past === '0' && item.appointment.status !== 'cancel' ? colors.blue :
                                item.appointment.past === '0' && item.appointment.status === 'cancel' ? colors.gray :
                                    item.appointment.past === '1' ? colors.gray : ''
                        }
                    />
                ))}

            </ScrollView>
        </ContainerScreen>
    )
}

const styles = StyleSheet.create({
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
});
const mapStateToProps = ({ AppointmentReducer }) => ({
    list: AppointmentReducer.list,
    isLoading: AppointmentReducer.isLoading,
});

export default connect(mapStateToProps)(Appointments);
