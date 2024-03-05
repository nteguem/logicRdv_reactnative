import React, { useEffect } from 'react'
import ContainerScreen from '../../components/wrappers/ContainerScreen'
import Doctor from '../../components/global/Doctor'
import CustomText from '../../components/global/CustomText'
import { colors } from '../../components/global/colors'
import { ScrollView, StyleSheet, View } from 'react-native'
import CustomAppButton from '../../components/global/CustomAppButton'
import { resultRequest } from '../../redux/search/actions'
import { useDispatch, connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const DoctorDetails = ({ route, results }) => {
    const { civility, name, profession, adresse, zip, city, tel, proxy_ville_id, proxy_nom_id } = route.params;
    const fullName = `${civility} ${name}` ;
    const proxy_ville = `${zip} ${city}` ;

    const dispatch = useDispatch();
    const navigation = useNavigation();

    useEffect(() => {
        dispatch(resultRequest({"proxy_ville":proxy_ville,"proxy_nom":profession,"proxy_ville_id":proxy_ville_id,"proxy_nom_id":proxy_nom_id,"proxy_search":"","proxy_page":"1"}));
    }, []);

    const itemsToNavigate = results.map((item, index) => ({
        civility: item.civility,
        name: item.nom,
        profession: item.category,
        adresse: item.address,
        zip: item.zip,
        city: item.city,
        tel: item.tel,
        key: index // Assurez-vous d'avoir une clé unique pour chaque élément
    }));

    const handleSearchChange = (text) => {
        // console.log('rechercher autour::', itemsToNavigate)
        navigation.navigate('Résultats', itemsToNavigate)
    };

    return (
        <ContainerScreen>
            <ScrollView>
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

                <View style={{flexDirection: 'row', justifyContent: 'center', marginVertical: 10, width: '100%' }}> 
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
                    />
                </View>

                <View style={styles.card}>
                    <CustomText fontSize={15} fontWeight='bold' color={colors.black}>Caractéristiques & Horaires</CustomText>
                    <CustomText fontSize={15} fontWeight='bold' color={colors.black} style={{ backgroundColor: colors.blue400, borderRadius: 10, padding: 15 }}>
                        HORAIRES
                    </CustomText>
                    <CustomText fontSize={12} color={colors.black}>Libre Conventionné Secteur 2</CustomText>
                    <CustomText fontSize={15} fontWeight='bold' color={colors.black} style={{ backgroundColor: colors.blue400, borderRadius: 10, padding: 15 }}>
                        INFORMATIONS
                    </CustomText>
                    <CustomText fontSize={12} color={colors.black}>Carte Vitale accepté</CustomText>
                </View>

                <View style={[styles.card, {marginTop: 10}]}>
                    <CustomText fontSize={15} fontWeight='bold' color={colors.black}>Specialité</CustomText>
                    <CustomText fontSize={15} fontWeight='bold' color={colors.blue100} style={{ backgroundColor: colors.blue400, borderRadius: 10, padding: 15 }}>
                        {profession}
                    </CustomText>
                </View>
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
        gap: 10

    }
});

const mapStateToProps = ({ SearchReducer }) => ({
    results: SearchReducer?.results,
    isLoading: SearchReducer?.isLoading,
});

export default connect(mapStateToProps)(DoctorDetails);

