import React from 'react'
import ContainerScreen from '../../components/wrappers/ContainerScreen'
import { ScrollView, StyleSheet, View } from 'react-native'
import PatientDetailsThree from '../../components/Prepaiement/PatientDetailsThree'
import PatientdetailsTwo from '../../components/Prepaiement/PatientdetailsTwo'
import CustomText from '../../components/global/CustomText'
import { colors } from '../../components/global/colors'
import Icon from 'react-native-vector-icons/FontAwesome';

const Paiement = () => {

    return (
        <ContainerScreen >
            <ScrollView >
                <View style={styles.screenContainer}>
                    <View style={styles.container}>
                        <CustomText fontSize={20} color={colors.white} fontWeight={'bold'} style={{ marginBottom: 18 }}>
                            Dr Formation
                        </CustomText>
                        <CustomText fontSize={16} color={colors.white} style={{ paddingTop: 10, fontStyle: 'italic' }}>
                            41 rue de Paris
                        </CustomText>
                        <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 10 }}>
                            <CustomText fontSize={16} color={colors.white}>
                                01 76 31 00 99
                            </CustomText>
                            <View style={[styles.circle, { backgroundColor: colors.blue, marginLeft: 15, }]}>
                                <Icon name="phone" size={20} color={colors.white} />
                            </View>
                        </View>
                    </View>
                    <PatientdetailsTwo
                        detailsTitle='Consultation'
                        doctorName='Dr Ringard'
                        patientName='NTEGUEM Roland'
                        dateTime='Jeudi 09/02/24 14:40' />
                    <PatientDetailsThree
                        motif='Téléphonique'
                        paragraph1='40.00 EUR a prelever en fin de consultation'
                        paragraph2='Le 08/09/24 sur votre CB xxx 0003'
                        textBottom='Votre Rendez-vous a ete pré-payé'
                        textBody=
                        '40.00 EUR a prelever en fin de consultation 40.00 EUR a prelever en fin de consultation 40.00 EUR a prelever en fin de consultation 40.00 EUR a prelever en fin de consultation 40.00 EUR a prelever en fin de consultation'
                        isTeleconsultation
                    />
                </View>
            </ScrollView>
        </ContainerScreen>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: 10,
        gap: 12,
        marginVertical: 25
    },
    container: {
        flexDirection: 'column',
        borderRadius: 10,
        backgroundColor: '#9548e0',
        padding: 15,
        paddingVertical: 35
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Paiement
