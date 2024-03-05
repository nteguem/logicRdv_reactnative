import React from 'react'
import ContainerScreen from '../../components/wrappers/ContainerScreen'
import Doctor from '../../components/global/Doctor'
import CustomText from '../../components/global/CustomText'
import { colors } from '../../components/global/colors'
import { ScrollView, StyleSheet, View } from 'react-native'
import CustomAppButton from '../../components/global/CustomAppButton'

const DoctorDetails = ({ route }) => {
    const { civility, name, profession, adresse, zip, city, tel } = route.params;
    const fullName = `${civility} ${name}` ;
    const fullZip = `${zip} ${city}` ;
    return (
        <ContainerScreen>
            <ScrollView>
                <Doctor
                    texte1={fullName}
                    texte2={profession}
                    texte3={adresse}
                    texte4={fullZip}
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
                        //   onPress={() => handleButtonPress(button.onclick_action)}
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

export default DoctorDetails
