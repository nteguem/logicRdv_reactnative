import React, { useEffect } from 'react'
import ContainerScreen from '../../components/wrappers/ContainerScreen'
import { ScrollView, ImageBackground, StyleSheet, View } from 'react-native'
import PatientDetailsThree from '../../components/Prepaiement/PatientDetailsThree'
import PatientdetailsTwo from '../../components/Prepaiement/PatientdetailsTwo'
import CustomText from '../../components/global/CustomText'
import { colors } from '../../components/global/colors'
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, connect } from 'react-redux';
import { paiementApptRequest } from '../../redux/appointment/actions'
import CustomAppButton from '../../components/global/CustomAppButton'
import { CardField, useStripe } from '@stripe/stripe-react-native';

const Paiement = (
    {
        isLoading,
        paiement,
        route,
    }
) => {
    const { tokentelecons } = route.params;
    const dispatch = useDispatch();
    const navigation = useNavigation();
    console.log(paiement)
    const handleVideocall = () => {
        navigation.navigate("Video Call", { paiement })
    }

    const handlePrepaiement = () => {
        // navigation.navigate("Video Call", { paiement })
    }

    useEffect(() => {
        dispatch(paiementApptRequest(tokentelecons));
    }, []);

    return (
        <ContainerScreen isLoading={isLoading}>
            <ImageBackground source={require('../../assets/images/background_tc.png')} style={styles.backgroundImage}>
                <ScrollView >
                    <View style={styles.screenContainer}>
                        <View style={styles.container}>
                            <CustomText fontSize={15} color={colors.white} fontWeight={'bold'} style={{ marginBottom: 18 }}>
                                {paiement?.etablissement?.nom}
                            </CustomText>
                            <CustomText fontSize={12} color={colors.white} style={{ fontStyle: 'italic' }}>
                                {paiement?.etablissement?.address}
                            </CustomText>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <CustomText fontSize={12} color={colors.white}>
                                    {paiement?.etablissement?.tel}
                                </CustomText>
                                <View style={[styles.circle, { backgroundColor: colors.blue, marginLeft: 15, }]}>
                                    <Icon name="phone" size={18} color={colors.white} />
                                </View>
                            </View>
                        </View>
                        <PatientdetailsTwo
                            detailsTitle={paiement?.appt?.description}
                            doctorName={paiement?.appt?.doctor}
                            patientName={paiement?.appt?.patient}
                            dateTime={paiement?.appt?.date} />
                        <PatientDetailsThree
                            motif={paiement?.payment?.title}
                            paragraph1={paiement?.payment?.statuslabel}
                            paragraph2={paiement?.payment?.text}
                            textBottom={paiement?.payment?.history !== '' ? paiement?.payment?.history : null}
                        />
                        {paiement?.payment?.stripeClientSecret !== '' && (
                            <CardField
                                postalCodeEnabled={true}
                                placeholders={{
                                    number: 'XXXX XXXX XXXX XXXX',
                                    expiration: 'MM/YY',
                                    cvc: 'CVC',
                                }}
                                cardStyle={{
                                    // backgroundColor: 'none',
                                    textColor: '#000000',

                                }}
                                style={{
                                    height: 50,
                                }}
                                onCardChange={(cardDetails) => {
                                    console.log('cardDetails', cardDetails);
                                }}
                                onFocus={(focusedField) => {
                                    console.log('focusField', focusedField);
                                }}
                            />
                        )}

                        {paiement?.appt?.buttoncancel === "1" && (
                            <View style={{ width: '100%', marginTop: 15 }}>
                                <CustomAppButton
                                    onPress={ paiement?.payment?.stripeClientSecret !== '' ? handlePrepaiement : handleVideocall}
                                    iconComponent={paiement?.infos?.buttonstartteleconsdisabled === '1' ? (<MaterialIcons name="credit-card" size={18} color={colors.white} style={{ marginRight: 5 }} />) : (<MaterialIcons name="featured-video" size={18} color={colors.white} style={{ marginRight: 5 }} />)}
                                    title={paiement?.payment?.stripeClientSecret !== '' ? 'Prépaiement' : 'Lancer la Téléconsultation'}
                                    alignSelf="center"
                                    paddingVertical={15}
                                    textColor={colors.white}
                                    textFontSize={12}
                                    borderRadius={10}
                                    bkgroundColor={colors.blue}
                                    width='100%'
                                />
                            </View>
                        )}

                    </View>
                </ScrollView>
            </ImageBackground>
        </ContainerScreen>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'repeat',
        width: '100%',
        height: '100%',
    },
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
        paddingVertical: 35,
    },
    circle: {
        width: 25,
        height: 25,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const mapStateToProps = (state) => ({
    paiement: state.AppointmentReducer?.paiement,
    isLoading: state.AppointmentReducer?.isLoading,
});

export default connect(mapStateToProps)(Paiement);
