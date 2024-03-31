import React, { useEffect } from 'react'
import ContainerScreen from '../../components/wrappers/ContainerScreen'
import { ScrollView, StyleSheet, View } from 'react-native'
import CustomText from '../../components/global/CustomText'
import { colors } from '../../components/global/colors'
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ModalPatient from '../../components/ListOfPatients/Modal'
import Doctor from '../../components/global/Doctor'
import { useDispatch, connect } from 'react-redux';
import { listPatientRequest } from '../../redux/appointment/actions'
import CustomAppButton from '../../components/global/CustomAppButton'

const ListOfPatients = ({ route, listPatient, isLoading }) => {
    const { tokenappointment } = route.params;
    const dispatch = useDispatch();
    console.log('listPatient:::', listPatient)
    useEffect(() => {
        dispatch(listPatientRequest(tokenappointment));
    }, [tokenappointment]); 

    return (
        <ContainerScreen isLoading={isLoading}>
            <ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                    <CustomAppButton
                        // onPress={() => handleMotifs()}
                        title="AJOUTER UN PATIENT"
                        alignSelf="baseline"
                        paddingVertical={16}
                        paddingHorizontal={20}
                        textColor={colors.white}
                        textFontSize={12}
                        borderRadius={10}
                        bkgroundColor={colors.blue}
                        width='100%'
                        fontWeight='bold'
                    />
                </View>
                {listPatient.map((patient, index) => (
                    <Doctor
                        key={index}
                        texte1={`${patient.nom} ${patient.prenom}`}
                        texte2={patient.phone}
                        texte3={patient.dob}
                        texte4={patient.email}
                        colorTitle={colors.black}
                        colorContain={colors.black}
                        marginBottom={10}
                        isIcon
                        isUpdate
                        isDelete
                        isProfileIcon
                    />
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
    }
});

const mapStateToProps = ({ AppointmentReducer }) => ({
    listPatient: AppointmentReducer.listPatient,
    isLoading: AppointmentReducer.isLoading,
});

export default connect(mapStateToProps)(ListOfPatients);
