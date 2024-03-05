import React, { useEffect, useState } from 'react'
import ContainerScreen from '../../components/wrappers/ContainerScreen'
import Doctor from '../../components/global/Doctor'
import CustomText from '../../components/global/CustomText'
import { colors } from '../../components/global/colors'
import { ScrollView, StyleSheet, View } from 'react-native'
import CustomAppButton from '../../components/global/CustomAppButton'
import { infosDoctorRequest, resultRequest } from '../../redux/search/actions'
import { useDispatch, connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const DoctorDetails = ({ route, results, isLoading, doctorInfos }) => {
    const { civility, name, profession, adresse, zip, city, tel, proxy_ville_id, proxy_nom_id } = route.params;
    const fullName = `${civility} ${name}`;
    const proxy_ville = `${zip} ${city}`;
    const [betweenSearch, setBetweenSearch] = useState(true);
    
    const dispatch = useDispatch();
    const navigation = useNavigation();

    useEffect(() => {
        dispatch(infosDoctorRequest({ "id": proxy_nom_id }));
        dispatch(resultRequest({ "proxy_ville": proxy_ville, "proxy_nom": profession, "proxy_ville_id": proxy_ville_id, "proxy_nom_id": proxy_nom_id, "proxy_search": "", "proxy_page": "1" }));
    }, []);

    const handleSearchChange = () => {
        navigation.navigate('Résultats', { civility, name, results, betweenSearch })
    };

    const CustomButtonComponent = (
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
            <CustomAppButton
                // onPress={handleAppointment}
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
    );

    return (
        <ContainerScreen isLoading={isLoading}>
            <ScrollView>
                {doctorInfos?.appointment.token !== "" && CustomButtonComponent}
                <Doctor
                    texte1={fullName}
                    texte2={profession}
                    texte3={adresse}
                    texte4={proxy_ville}
                    texte5={tel}
                    colorTitle={colors.yellow}
                    colorContain={colors.blue}
                    fontWeight={'bold'}
                    isPhoneIcons
                    isProfileIcon
                    isRightIcons
                    isDetail
                />

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 10, width: '100%' }}>
                    <CustomAppButton
                        onPress={handleSearchChange}
                        title='CHERCHER AUTOUR'
                        alignSelf="baseline"
                        paddingVertical={16}
                        textColor={colors.white}
                        textFontSize={12}
                        borderRadius={10}
                        bkgroundColor={colors.blue}
                        width='100%'
                        isLoading={isLoading}
                    />
                </View>

                <View style={styles.card}>
                    <CustomText fontSize={15} fontWeight='bold' color={colors.black}>Caractéristiques & Horaires</CustomText>
                    {doctorInfos?.chapters.map((doctor, index) => {
                        return (
                            <View key={index}>
                                <CustomText fontSize={15} fontWeight='bold' color={colors.black} style={{ backgroundColor: colors.blue400, borderRadius: 10, padding: 15 }}>
                                    {doctor.title}
                                </CustomText>
                                <CustomText fontSize={12} color={colors.black} style={{ marginTop: 15 }}>{doctor.description}</CustomText>
                            </View>
                        );
                    })}
                </View>

                <View style={[styles.card, { marginTop: 10 }]}>
                    <CustomText fontSize={15} fontWeight='bold' color={colors.black}>Specialité</CustomText>
                    <CustomText fontSize={15} fontWeight='bold' color={colors.blue100} style={{ backgroundColor: colors.blue400, borderRadius: 10, padding: 15 }}>
                        {profession}
                    </CustomText>
                </View>
                {doctorInfos?.appointment.token !== "" && CustomButtonComponent}
            </ScrollView>
        </ContainerScreen>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        borderRadius: 10,
        borderColor: colors.gray100,
        padding: 14,
        gap: 5

    }
});

const mapStateToProps = ({ SearchReducer }) => ({
    results: SearchReducer?.results,
    isLoading: SearchReducer?.isLoading,
    doctorInfos: SearchReducer?.doctorInfos
});

export default connect(mapStateToProps)(DoctorDetails);

