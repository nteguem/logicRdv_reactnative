import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native'
import CustomAppButton from '../global/CustomAppButton'
import CustomText from '../global/CustomText'
import { colors } from '../global/colors'

const FooterHome = () => {

    const navigation = useNavigation();

    const handleSignIn = () => {
        navigation.navigate('Se connecter');
    };

    const handleSignUp = () => {
        navigation.navigate('Inscription rapide');
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerButton}>
                <CustomAppButton
                    onPress={handleSignUp}
                    title='Inscription Rapide'
                    alignSelf="baseline"
                    paddingVertical={16}
                    paddingHorizontal={20}
                    textColor={colors.orange100}
                    textFontSize={15}
                    fontWeight='bold'
                    bkgroundColor='transparent' />
                <CustomAppButton
                    onPress={handleSignIn}
                    title='Se Connecter'
                    alignSelf="baseline"
                    paddingVertical={10}
                    paddingHorizontal={20}
                    textColor={colors.white}
                    textFontSize={15}
                    fontWeight='bold'
                    borderWidth={1}
                    borderRadius={5}
                    borderColor={colors.white}
                    bkgroundColor='transparent' />
            </View>
            <View style={styles.containerText}>
                <CustomText fontSize={18} fontWeight='bold' color={colors.white} style={styles.text}>
                    Logicrdv c'est aussi la téléconsultation avec votre médecin.
                </CustomText>
                <CustomText fontSize={14} color={colors.white} style={styles.text}>
                    Logicrdv c'est plus de 13 millions d'appels recus, plus de 5 millions de rendez-vous internet.
                </CustomText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        paddingBottom: 10,
        width: '100%',
    },
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 6,
        marginBottom: 12
    },
    containerText: {
        flexDirection: 'column',
        gap: 4,
        textAlign: "justify",
        marginHorizontal: 20
    },
    text: {
        // textAlign:"start"
    },
});

export default FooterHome
