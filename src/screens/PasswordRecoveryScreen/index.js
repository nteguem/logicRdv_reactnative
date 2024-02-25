import React, { useState } from 'react'
import { ScrollView, StyleSheet, TextInput, View } from 'react-native'
import CustomText from '../../components/global/CustomText'
import ContainerScreen from '../../components/wrappers/ContainerScreen';
import { colors } from '../../components/global/colors'
import CustomAppButton from '../../components/global/CustomAppButton'

const PasswordRecoveryScreen = () => {
    const [codeNumber, setCodeNumber] = useState('');
    const [showButtons, setShowButtons] = useState(true);
    const [infoText, setInfoText] = useState("Veuillez saisir le code à 6 chiffres envoyé sur votre messagerie. Verifier eventuellement dans les courriers indésirables.");


    const onChangeCodeNumber = (text) => {
        setCodeNumber(text);
    };

    const onLastButtonPress = () => {
        setShowButtons(false);
        setInfoText("Veuillez saisir le code à 6 chiffres envoyé sur votre mobile.");
    };

    return (
        <ContainerScreen>
            <ScrollView>
                <View style={styles.textContain}>
                    <CustomText fontSize={20} fontWeight='bold' color={colors.blue}>
                        Mot de passe oublié.
                    </CustomText>
                    <CustomText fontSize={15} color={colors.blue} style={{ marginTop: 12 }} >
                        {infoText}
                    </CustomText>
                </View>
                <View style={{ marginVertical: 16 }}>
                    <TextInput
                        style={styles.input}
                        placeholder="Entrez le code à 6 chiffres"
                        placeholderTextColor={colors.gray}
                        value={codeNumber}
                        onChangeText={onChangeCodeNumber} 
                        keyboardType='numeric'
                    />
                </View>

                <View style={styles.container}>
                    <View style={styles.containerButton}>
                        <CustomAppButton
                            onPress={() => console.log("recover password")}
                            title="Retour"
                            alignSelf="baseline"
                            paddingVertical={16}
                            paddingHorizontal={165}
                            textColor={colors.white}
                            textFontSize={16}
                            borderRadius={10}
                            bkgroundColor={colors.blue}
                        />
                    </View>
                    <View style={styles.containerButton}>
                        <CustomAppButton
                            onPress={() => console.log("recover password")}
                            title="Suivant"
                            alignSelf="baseline"
                            paddingVertical={16}
                            paddingHorizontal={165}
                            textColor={colors.white}
                            textFontSize={16}
                            borderRadius={10}
                            bkgroundColor={colors.blue}
                        />
                    </View>
                    {showButtons && (
                        <View style={styles.containerButton}>
                            <CustomAppButton
                                onPress={onLastButtonPress}
                                title="Code SMS sur 06......53"
                                alignSelf="baseline"
                                paddingVertical={16}
                                paddingHorizontal={109}
                                textColor={colors.white}
                                textFontSize={16}
                                borderRadius={10}
                                bkgroundColor={colors.blue}
                            />
                        </View>
                    )}
                </View>
            </ScrollView>
        </ContainerScreen>
    )
}

const styles = StyleSheet.create({
    textContain: {
        marginTop: 35,
        marginBottom: 12
    },
    container: {
        flexDirection: 'column',
        gap: 12,
        marginVertical: 16
    },
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.blue,
        padding: 10,
        color: colors.black,
        fontSize: 18,
        borderRadius: 10,
        textAlignVertical: 'center',
        marginTop: 16,
        height: 50
    },

});

export default PasswordRecoveryScreen
