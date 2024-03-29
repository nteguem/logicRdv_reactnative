import React, { useEffect } from 'react'
import { Image, ScrollView, StyleSheet, View } from 'react-native'
import CustomAppButton from '../../components/global/CustomAppButton'
import AppointmentDetails from '../../components/MyAppointment/Appointment_Details'
import ContainerScreen from '../../components/wrappers/ContainerScreen'
import { colors } from '../../components/global/colors'
import dataAppointment from '../data/dataAppointment'
import { useDispatch, connect } from 'react-redux';
import CustomText from '../../components/global/CustomText'
import { useNavigation } from '@react-navigation/native';
import { createAppointmentRequest, listAppointmentsRequest, paiementApptRequest } from '../../redux/appointment/actions'

const Appointments = ({ list, isLoading }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listAppointmentsRequest({ "id": 1 }));
    }, []);

    const handleAppointment = () => {
        navigation.navigate('Fixez rendez-vous');
    };

    const handleNewAppt = async (item) => {
        const tokenappointment = item?.cabinet?.token;
        await dispatch(createAppointmentRequest(tokenappointment, '', '', '', ''));
    }

    const handleApptType = async (item) => {
        const tokentelecons = item?.appointment?.tokentelecons
        await dispatch(paiementApptRequest(tokentelecons));
        navigation.navigate('Paiement', { tokentelecons });
    }

    return (
        <ContainerScreen isLoading={isLoading}>
            <ScrollView style={{ marginBottom: 15 }}>
                <View style={styles.containerButton}>
                    <CustomAppButton
                        onPress={handleAppointment}
                        title="PRENDRE UN RENDEZ-VOUS RAPIDE"
                        alignSelf="baseline"
                        paddingVertical={16}
                        paddingHorizontal={20}
                        textColor={colors.white}
                        textFontSize={12}
                        borderRadius={10}
                        bkgroundColor={colors.blue}
                    />
                </View>
                {list?.list?.length === 0 ? (
                    <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginVertical: 200}}>
                        <Image source={require('../../assets/images/Logo.png')} style={styles.image} />
                        <CustomText fontSize={12} color={colors.blue100} fontWeight='bold'>Aucun rendez-vous pour le moment.</CustomText>
                    </View>
                ) : (
                    <>
                        <CustomText fontSize={15} color={colors.black} fontWeight='bold'>Mes Rendez-vous</CustomText>
                        {list?.list?.map((item, index) => (
                            <AppointmentDetails
                                key={index}
                                date={item?.appointment?.date}
                                time={item?.appointment?.time}
                                doctor={item?.appointment?.with}
                                appointmentType={item?.appointment?.label}
                                patientName={item?.patient?.nom}
                                patientPhone={item?.patient?.phone}
                                patientEmail={item?.patient?.email}
                                addressName={item?.cabinet?.nom}
                                addressLine1={item?.cabinet?.city}
                                addressLine2={item?.cabinet?.address}
                                addressPhone={item?.cabinet?.phone}
                                buttonlabeltelecons={
                                    item?.appointment?.past === '0' ? item?.appointment?.buttonlabeltelecons : ''
                                }
                                buttonTitle={item?.appointment?.buttonlabeltelecons !== '' ? item?.appointment?.buttonlabeltelecons : ''}
                                buttonBorderColor={
                                    (item?.appointment?.past === '0' && item?.appointment?.status !== 'cancel') ||
                                        (item?.appointment?.past !== '1' && item?.appointment?.status === 'cancel') ? colors.red :
                                        item?.appointment?.past === '0' && item?.appointment?.status === 'cancel' ? colors.gray :
                                            item?.appointment?.past === '1' ? 'transparent' : ''
                                }
                                buttonTextColor={
                                    (item?.appointment?.past === '0' && item?.appointment?.status !== 'cancel') ||
                                        (item?.appointment?.past !== '1' && item?.appointment?.status === 'cancel') ? colors.red :
                                        item?.appointment?.past === '0' && item?.appointment?.status === 'cancel' ? colors.gray : ''
                                }
                                cancelButton={item?.appointment?.past === '1' ? 'Annulé' : 'Annuler'}
                                display={item?.appointment?.past === '1' && item?.appointment?.status === '' ? 'none' : 'flex'}
                                firstCompartmentBackgroundColor={
                                    item?.appointment?.past === '0' && item?.appointment?.status !== 'cancel' ? colors.blue :
                                        item?.appointment?.past === '0' && item?.appointment?.status === 'cancel' ? colors.gray :
                                            item?.appointment?.past === '1' ? colors.gray : ''
                                }
                                isDisplay
                                handleApptType={() => handleApptType(item)}
                                handleNewAppt={() => handleNewAppt(item)}
                            />
                        ))}
                    </>
                )
                }
 
            </ScrollView >
        </ContainerScreen >
    )
}

const styles = StyleSheet.create({
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    image: {
        objectFit: 'contain',
        width: 130,
        height: 60
    }
});
const mapStateToProps = ({ AppointmentReducer }) => ({
    list: AppointmentReducer.list,
    isLoading: AppointmentReducer.isLoading,
});

export default connect(mapStateToProps)(Appointments);