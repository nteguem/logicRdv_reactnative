import React from 'react'
import ContainerScreen from '../../components/wrappers/ContainerScreen'
import Doctor from '../../components/global/Doctor'
import CustomText from '../../components/global/CustomText'
import { colors } from '../../components/global/colors'
import { StyleSheet } from 'react-native'

const DoctorDetails = ({ 
    isLoading,
    name,
    profession,
    adresse,
    zip,
    city,
    tel }) => {
    return (
        <ContainerScreen isLoading={isLoading}>
            <Doctor
                texte1={name}
                texte2={profession}
                texte3={adresse}
                texte4={zip}
                texte5={tel}
                colorTitle={colors.yellow}
                colorContain={colors.blue}
                fontWeight={'bold'}
                isPhoneIcons
                isProfileIcon
                isRightIcons
            />

            <View style={{ marginTop: 10, width: '100%' }}>
                <View style={loginStyles.buton}>
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
            </View>

            <View style={styles.card}>
                <CustomText fontSize={15} fontWeight='bold' color={colors.black}>Caractéristiques & Horaires</CustomText>
                <CustomText fontSize={15} fontWeight='bold' color={colors.black} style={{ backgroundColor: colors.blue100, borderRadius: 10, padding: 15 }}>
                    HORAIRES
                </CustomText>
                <CustomText fontSize={12} fontWeight='bold' color={colors.black}>Libre Conventionné Secteur 2</CustomText>
                <CustomText fontSize={12} fontWeight='bold' color={colors.black} style={{ backgroundColor: colors.blue100, borderRadius: 10, padding: 15 }}>
                    INFORMATIONS
                </CustomText>
                <CustomText fontSize={12} fontWeight='bold' color={colors.black}>Carte Vitale accepté</CustomText>
            </View>

            <View style={styles.card}>
                <CustomText fontSize={15} fontWeight='bold' color={colors.black}>Specialité</CustomText>
                <CustomText fontSize={15} fontWeight='bold' color={colors.blue200} style={{ backgroundColor: colors.blue100, borderRadius: 10, padding: 15 }}>
                    {profession}
                </CustomText>
            </View>

        </ContainerScreen>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.gray100,
        marginTop: 10,
        padding: 24

    }
});

export default DoctorDetails
