import React, { useState } from 'react'
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import ContainerScreen from '../../components/wrappers/ContainerScreen'
import CustomText from '../../components/global/CustomText'
import { colors } from '../../components/global/colors';
import CustomAppButton from '../../components/global/CustomAppButton';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome6';
import Profil from '../../components/Settings/Profil';

const EditProfile = () => {
    const [firstName, setFirstName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [adress, setAdress] = useState('');
    const [city, setCity] = useState('');
    const [codePostal, setCodePostal] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const onChangeFirstName = (text) => {
        setFirstName(text);
    };

    const onChangePhoneNumber = (text) => {
        setPhoneNumber(text);
        setShowSearchIcon(text.length > 0); // Afficher l'icône si du texte est saisi
    };

    const onChangeEmail = (text) => {
        setEmail(text);
    };

    const onChangeAdress = (text) => {
        setAdress(text);
    };

    const onChangeCity = (text) => {
        setCity(text);
    };


    const onChangeCodePostal = (text) => {
        setCodePostal(text);
    };

    const onChangeConfirmPassword = (text) => {
        setConfirmPassword(text);
    };

    const onChangePassword = (text) => {
        setPassword(text);
    };

    return (
        <ContainerScreen>
            <ScrollView>
                <Profil username='NTEGUEM Roland' email='nteguemroland@gmail.com' />
                <View style={styles.container} >
                    <View>
                        <CustomText fontSize={17} color={colors.blue100}>
                            Prénom
                        </CustomText>
                        <TextInput
                            style={styles.input}
                            placeholder="Prénom"
                            placeholderTextColor={colors.gray}
                            value={firstName}
                            onChangeText={onChangeFirstName}
                        />
                    </View>

                    <View>
                        <CustomText fontSize={17} color={colors.blue100}>
                            Numéro de téléphone
                        </CustomText>
                        <TextInput
                            style={styles.input}
                            placeholder="Numéro de téléphone"
                            placeholderTextColor={colors.gray}
                            value={phoneNumber}
                            onChangeText={onChangePhoneNumber}
                            keyboardType='numeric'
                        />
                    </View>

                    <View>
                        <CustomText fontSize={17} color={colors.blue100}>
                            Email
                        </CustomText>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            placeholderTextColor={colors.gray}
                            value={email}
                            onChangeText={onChangeEmail}
                        />
                    </View>

                    <View>
                        <CustomText fontSize={17} color={colors.blue100}>
                            Adresse
                        </CustomText>
                        <TextInput
                            style={styles.input}
                            placeholder="Adresse"
                            placeholderTextColor={colors.gray}
                            value={adress}
                            onChangeText={onChangeAdress}
                        />
                    </View>

                    <View>
                        <CustomText fontSize={17} color={colors.blue100}>
                            Ville
                        </CustomText>
                        <TextInput
                            style={styles.input}
                            placeholder="Ville"
                            placeholderTextColor={colors.gray}
                            value={city}
                            onChangeText={onChangeCity}
                        />
                    </View>

                    <View>
                        <CustomText fontSize={17} color={colors.blue100}>
                            Code postal
                        </CustomText>
                        <TextInput
                            style={styles.input}
                            placeholder="Code postal"
                            placeholderTextColor={colors.gray}
                            value={codePostal}
                            onChangeText={onChangeCodePostal}
                            keyboardType='numeric'
                        />
                    </View>

                    <View>
                        <CustomText fontSize={17} color={colors.blue100}>
                            Mot de passe
                        </CustomText>
                        <TextInput
                            style={styles.input}
                            placeholder="Mot de passe"
                            placeholderTextColor={colors.gray}
                            value={password}
                            onChangeText={onChangePassword}
                            secureTextEntry={!showPassword}
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <Icon name={showPassword ? "eye" : "eye-off"} size={24} color={colors.gray100} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <CustomText fontSize={17} color={colors.blue100}>
                            Confirmation mot de passe
                        </CustomText>
                        <TextInput
                            style={styles.input}
                            placeholder="Confirmer mot de passe"
                            placeholderTextColor={colors.gray}
                            value={confirmPassword}
                            onChangeText={onChangeConfirmPassword}
                            secureTextEntry={!showConfirmPassword}
                        />
                        <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                            <Icon name={showConfirmPassword ? "eye" : "eye-off"} size={24} color={colors.gray100} style={styles.icon} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.containerButton}>
                        <CustomAppButton
                            iconComponent={<FontAwesome name="user-pen" size={20} color={colors.white} style={{ marginHorizontal: 15 }} />}
                            title='Modifier'
                            alignSelf="center"
                            paddingVertical={15}
                            paddingHorizontal={115}
                            textColor={colors.white}
                            textFontSize={18}
                            fontWeight='bold'
                            borderRadius={10}
                            bkgroundColor={colors.blue}
                            marginHorizontal={18}
                        />
                        <CustomAppButton
                            iconComponent={<MaterialIcons name="delete" size={25} color={colors.white} style={{ marginHorizontal: 15 }} />}
                            title='Se désinscrire'
                            alignSelf="center"
                            paddingVertical={15}
                            paddingHorizontal={108}
                            textColor={colors.white}
                            textFontSize={18}
                            fontWeight='bold'
                            borderRadius={10}
                            bkgroundColor={colors.red}
                        />
                    </View>
                </View>
            </ScrollView>
        </ContainerScreen>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 12,
        marginVertical: 4
    },
    containerButton: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 10,
        gap: 12
    },
    input: {
        backgroundColor: colors.white,
        padding: 10,
        color: colors.black,
        fontSize: 18,
        borderRadius: 10,
        textAlignVertical: 'center',
        marginTop: 6,
        height: 50
    },
    icon: {
        position: 'absolute',
        marginRight: 10,
        right: 10,
        top: '10%',
        transform: [{ translateY: -35 }]
    },
    iconLeft: {
        position: 'absolute',
        marginRight: 10,
        left: 5,
        top: '60%',
        transform: [{ translateY: -10 }]
    }
});

export default EditProfile
