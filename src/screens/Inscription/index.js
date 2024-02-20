import React, { useState } from 'react'
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import CustomText from '../../components/global/CustomText'
import ContainerScreen from '../../components/wrappers/ContainerScreen';
import { colors } from '../../components/global/colors';
import CustomAppButton from '../../components/global/CustomAppButton';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CheckBox from '@react-native-community/checkbox';
import { Picker } from '@react-native-picker/picker';

const Inscription = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [showSearchIcon, setShowSearchIcon] = useState(false);
    const [showAdditionalFields, setShowAdditionalFields] = useState(false);
    const [selectedFormation, setSelectedFormation] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const onChangePhoneNumber = (text) => {
        setPhoneNumber(text);
        setShowSearchIcon(text.length > 0); // Afficher l'icône si du texte est saisi
    };

    const onChangeFirstName = (text) => {
        setFirstName(text);
    };

    const onChangeLastName = (text) => {
        setLastName(text);
    };

    const onChangeNumber = (text) => {
        setNumber(text);
    };

    const onChangeEmail = (text) => {
        setEmail(text);
    };

    const onChangeConfirmPassword = (text) => {
        setConfirmPassword(text);
    };

    const onChangePassword = (text) => {
        setPassword(text);
    };

    const onSubmit = () => {
        if (phoneNumber !== '') {
            setShowAdditionalFields(true);
        }
    };

    return (
        <ContainerScreen>
            <ScrollView>
                <View>
                    <View style={styles.card}>
                        <CustomText fontSize={17} fontWeight='bold' color={colors.black}>J'ai déja un compte LogicRdv</CustomText>
                        <CustomText fontSize={16} fontWeight='bold' color={colors.blue}>SE CONNECTER</CustomText>
                    </View>
                </View>
                <View>
                    <View style={styles.card}>
                        <CustomText fontSize={17} fontWeight='bold' color={colors.black}>Inscription</CustomText>
                        <CustomText fontSize={16} color={colors.black}>Saisissez les informations demandées</CustomText>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ width: phoneNumber ? '80%' : '100%' }} >
                                <TextInput
                                    style={styles.input}
                                    placeholder="Téléphone du cabinet médical"
                                    placeholderTextColor={colors.gray}
                                    value={phoneNumber}
                                    onChangeText={onChangePhoneNumber}
                                    keyboardType='numeric'
                                />

                            </View>
                            <View>
                                {showSearchIcon && (
                                    <Icon name="search-circle" size={60} color={colors.blue} style={styles.searchIcon} />
                                )}
                            </View>
                        </View>
                        {showAdditionalFields && (
                            <View>
                                <View style={styles.dropdownContainer}>
                                    <Picker
                                        selectedValue={selectedFormation}
                                        style={styles.dropdown}
                                        dropdownIconColor={colors.black}
                                        onValueChange={(itemFormation, itemIndex) => setSelectedFormation(itemFormation)}
                                    >
                                        <Picker.Item label="Option 1" value="option1" />
                                        <Picker.Item label="Option 2" value="option2" />
                                        <Picker.Item label="Option 3" value="option3" />
                                    </Picker>
                                </View>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Nom"
                                    placeholderTextColor={colors.gray}
                                    value={lastName}
                                    onChangeText={onChangeLastName}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Prénom"
                                    placeholderTextColor={colors.gray}
                                    value={firstName}
                                    onChangeText={onChangeFirstName}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Numéro de téléphone"
                                    placeholderTextColor={colors.gray}
                                    value={number}
                                    onChangeText={onChangeNumber}
                                    keyboardType='numeric'
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Email"
                                    placeholderTextColor={colors.gray}
                                    value={email}
                                    onChangeText={onChangeEmail}
                                />
                                <View>
                                    <MaterialIcons name="lock" size={24} color={colors.gray100} style={styles.iconLeft} />
                                    <TextInput
                                        style={[styles.input, { paddingLeft: 40 }]}
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
                                    <MaterialIcons name="lock" size={24} color={colors.gray100} style={styles.iconLeft} />
                                    <TextInput
                                        style={[styles.input, { paddingLeft: 40 }]}
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
                                <View style={styles.checkboxContainer}>
                                    <CheckBox
                                        value={isChecked}
                                        onValueChange={setIsChecked}
                                        style={styles.checkbox}
                                        tintColors={{ true: colors.blue, false: colors.black }}
                                    />
                                    <CustomText fontSize={16} color={colors.black} fontWeight={'bold'}>J'ai lu et accepté </CustomText>
                                    <CustomText fontSize={16} color={colors.orange} fontWeight={'bold'}>les conditions d'utilisation </CustomText>
                                </View>
                            </View>
                        )}
                        <View style={{ marginTop: 10 }}>
                            <CustomAppButton
                                onPress={onSubmit}
                                title={showAdditionalFields ? "M'inscrire" : "Trouvez votre cabinet"}
                                alignSelf="baseline"
                                paddingVertical={16}
                                paddingHorizontal={showAdditionalFields ? 135: 90}
                                textColor={colors.white}
                                textFontSize={16}
                                borderRadius={10}
                                bkgroundColor={colors.blue}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </ContainerScreen>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.gray100,
        marginTop: 20,
        padding: 15,
        gap: 10
    },
    input: {
        borderWidth: 1,
        borderColor: colors.gray100,
        padding: 10,
        color: colors.black,
        fontSize: 18,
        borderRadius: 10,
        textAlignVertical: 'center',
        marginTop: 16,
        height: 50
    },
    dropdownContainer: {
        borderColor: colors.gray100,
        borderWidth: 1,
        borderRadius: 6,
        marginTop: 16,
        height: 50
    },
    dropdown: {
        color: colors.black,
    },
    searchIcon: {
        left: 10,
        top: '10%',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    checkbox: {
        alignSelf: 'center',
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

export default Inscription
