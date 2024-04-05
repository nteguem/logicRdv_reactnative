import React, { useEffect, useState } from 'react'
import ContainerScreen from '../../components/wrappers/ContainerScreen'
import { Modal, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import CustomText from '../../components/global/CustomText'
import { colors } from '../../components/global/colors'
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ModalPatient from '../../components/ListOfPatients/Modal'
import Doctor from '../../components/global/Doctor'
import { useDispatch, connect } from 'react-redux';
import { addPatientRequest, createAppointmentRequest, listPatientRequest, removePatientRequest } from '../../redux/appointment/actions'
import CustomAppButton from '../../components/global/CustomAppButton'
import { setModalVisible } from '../../redux/app/actions'

const ListOfPatients = ({ route, listPatient, isLoading, session, user, data }) => {
    const { tokenappointment } = route.params;
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [patientToDelete, setPatientToDelete] = useState(null);
console.log('data././.', data)
console.log('listPatient././.', listPatient)
    const dispatch = useDispatch();

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        } else {
            return text.substring(0, maxLength - 1) + '...';
        }
    };

    useEffect(() => {
        dispatch(listPatientRequest(tokenappointment));
    }, [tokenappointment]);

    const handleAppt = async (patient) => {
        console.log(patient)
        if (patient.locked === "1") {
            await dispatch(setModalVisible(true, patient?.lockmessage));
        } else {
            // const action = patient?.onclick_action
            // const data = patient?.onclick_data
            // const week = patient?.onclick_week
            // await dispatch(createAppointmentRequest(tokenappointment, "", "", "", session,));
        }
    }

    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');

    useEffect(() => {
        if (user) {
            setNom(user.nom || '');
            setPrenom(user.prenom || '');
            setEmail(user.email || '');
            setTelephone(user.phone || '');
        }
    }, [user]);

    const handleNomChange = (text) => {
        setNom(text);
    };

    const handlePrenomChange = (text) => {
        setPrenom(text);
    };

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handleTelephoneChange = (text) => {
        setTelephone(text);
    };

    const handleAddPatient = async () => {
        await dispatch(addPatientRequest(email, nom, telephone, prenom, tokenappointment));
    }

    const handleRemovePatient = async () => {
        if (patientToDelete) {
            const tokenpatient = patientToDelete.token
            await dispatch(removePatientRequest(tokenappointment, tokenpatient));
            setPatientToDelete(null);
            setShowDeleteModal(false);
        }
    };

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
                            <CustomText fontSize={12} fontWeight='bold' color={colors.black}>Êtes-vous sûr de vouloir supprimer ce patient ?</CustomText>
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
                                    onPress={() => handleRemovePatient(patientToDelete)}
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

            <ScrollView>
                {listPatient.length < 10 && (
                    <ModalPatient
                        nom={nom}
                        prenom={prenom}
                        email={email}
                        telephone={telephone}
                        handleNomChange={handleNomChange}
                        handlePrenomChange={handlePrenomChange}
                        handleEmailChange={handleEmailChange}
                        handleTelephoneChange={handleTelephoneChange}
                        isEdit={false}
                        handleAddPatient={handleAddPatient} />
                )}

                {listPatient.map((patient, index) => (
                    <TouchableOpacity key={index} onPress={() => handleAppt(patient)}>
                        <Doctor
                            key={index}
                            texte1={`${patient.nom} ${patient.prenom}`}
                            texte2={patient.phone}
                            texte3={patient.dob}
                            texte4={truncateText(patient.email, 25)}
                            colorTitle={colors.black}
                            colorContain={colors.black}
                            marginBottom={10}
                            isIcon
                            isLock={patient.locked === "1"}
                            isUpdate
                            isDelete={index > 0 && listPatient.length > 1}
                            isProfileIcon
                            user={patient}
                            tokenappointment={tokenappointment}
                            handleDelete={() => {
                                setPatientToDelete(patient);
                                setShowDeleteModal(true);
                            }}
                        />
                    </TouchableOpacity>
                ))}

            </ScrollView>

        </ContainerScreen>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 2,
        gap: 12,
        marginTop: 12
    },
    detailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    circleUser: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        borderRadius: 999,
        width: 60,
        height: 60,
        borderWidth: 1,
        borderColor: colors.white,
    },
    infoContainer: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    info: {
        fontSize: 16,
        color: '#666',
    },
    edit: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        top: -20
    },
    divider: {
        borderLeftWidth: 1,
        borderStyle: 'dashed',
        height: '100%',
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

const mapStateToProps = ({ AppointmentReducer }) => ({
    listPatient: AppointmentReducer.listPatient,
    data: AppointmentReducer.data,
    session: AppointmentReducer.session,
    isLoading: AppointmentReducer.isLoading,
});

export default connect(mapStateToProps)(ListOfPatients);
