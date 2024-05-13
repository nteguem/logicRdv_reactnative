import React, { useEffect, useState } from 'react'
import { Image, Modal, ScrollView, StyleSheet, View } from 'react-native'
import CustomAppButton from '../../components/global/CustomAppButton'
import AppointmentDetails from '../../components/MyAppointment/Appointment_Details'
import ContainerScreen from '../../components/wrappers/ContainerScreen'
import { colors } from '../../components/global/colors'
import { useDispatch, connect } from 'react-redux';
import CustomText from '../../components/global/CustomText'
import { useNavigation } from '@react-navigation/native';
import { cancelAppointmentRequest, clearAppointmentData, createAppointmentRequest, listAppointmentsRequest, paiementApptRequest } from '../../redux/appointment/actions'

const Appointments = ({ list, isLoading, session }) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [apptToCancel, setApptToCancel] = useState(null);
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
        await dispatch(createAppointmentRequest(tokenappointment, '', '', 'begin', session));
    }

    const handleApptType = async (item) => {
        const tokentelecons = item?.appointment?.tokentelecons
        await dispatch(paiementApptRequest(tokentelecons));
        navigation.navigate('Paiement', { tokentelecons });
    }

    const handleCancelAppt = async () => {
        if (apptToCancel) {
            console.log(apptToCancel);
            const tokenappointment = apptToCancel?.appointment?.token
            await dispatch(cancelAppointmentRequest({ tokenappointment: tokenappointment }));
            await dispatch(listAppointmentsRequest({ "id": 1 }));
            setApptToCancel(null);
            setShowDeleteModal(false);
        }
    }

    return (
        <ContainerScreen isLoading={isLoading}>
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
                            <CustomText fontSize={14} fontWeight='bold' color={colors.black}>Êtes-vous sûr de vouloir annuler ce rendez-vous ?</CustomText>
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
            {list?.list?.length === 0 ? (
                <>
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
                            fontWeight='bold'
                        />
                    </View>
                    <View style={{ height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('../../assets/images/favicon.jpg')} style={{ width: 25, height: 25, borderRadius: 5 }} />
                        <CustomText color={colors.blue}>Aucune donnée disponible</CustomText>
                    </View>
                </>

            ) : (
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
                            fontWeight='bold'
                        />
                    </View>
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
                            handleCancelAppt={(item?.appointment?.past === '1' && item?.appointment?.status === 'cancel') ? null : () => {
                                setApptToCancel(item);
                                setShowDeleteModal(true);
                            }}
                        />
                    ))}
                </ScrollView >
            )}
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
const mapStateToProps = ({ AppointmentReducer }) => ({
    list: AppointmentReducer.list,
    isLoading: AppointmentReducer.isLoading,
    session: AppointmentReducer.session
});

export default connect(mapStateToProps)(Appointments);