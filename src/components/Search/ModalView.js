import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import CustomText from '../global/CustomText';
import { colors } from '../global/colors';
import CustomAppButton from '../global/CustomAppButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const ModalView = ({
    isLocation = false,
    onChange,
    placeholder,
    borderWidth,
    borderRadius,
    borderColor
}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [profession, setProfession] = useState('');
    const [value, setValue] = useState('');
    const [showCrossIcon, setShowCrossIcon] = useState(false);

    const handleProfessionChange = (text) => {
        setProfession(text);
        setShowCrossIcon(text !== '');
    };

    const clearText = () => {
        setValue('');
        setProfession(''),
            setShowCrossIcon(false);
    };
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="none"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.modalBackground}></View>
                <View style={styles.centeredView}>
                    <View
                        style={[styles.modalView,
                        {
                            borderBottomLeftRadius: isLocation ? 8 : 0,
                            borderBottomRightRadius: isLocation ? 8 : 0
                        }]}
                    >

                        <View
                            style={[styles.compartment,
                            {
                                backgroundColor: isLocation ? colors.black100 : colors.blue,
                                paddingVertical: isLocation ? 30 : 0,
                                paddingTop: isLocation ? 15 : 8,
                            }]} >
                            {isLocation ? (
                                <View style={{ paddingHorizontal: 20 }}>
                                    <CustomText fontSize={20} color={colors.white} fontWeight='bold' style={{ textAlign: 'center' }}>
                                        ADRESSE DE RECHERCHE
                                    </CustomText>
                                </View>
                            ) : (
                                <View>
                                    <CustomText fontSize={16} color={colors.white} fontWeight='bold' style={{ marginLeft: 8 }}>
                                        Nom, Spécialité, Téléphone
                                    </CustomText>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: -18 }}>
                                        <View style={{ width: '78%' }}>
                                            <TextInput
                                                value={profession}
                                                onChange={handleProfessionChange}
                                                style={styles.inputProfession}
                                                placeholder="Nom, Spécialité, Téléphone"
                                                placeholderTextColor={colors.gray100}
                                            />
                                            {showCrossIcon && (
                                                <TouchableOpacity onPress={clearText}>
                                                    <Icon name="close" size={24} color={colors.red} style={styles.icon} />
                                                </TouchableOpacity>
                                            )}
                                        </View>
                                        <TouchableOpacity onPress={clearText}>
                                            <Icon
                                                onPress={() => setModalVisible(!modalVisible)}
                                                name="close"
                                                size={32}
                                                color={colors.white}
                                                style={{ marginLeft: 12, marginRight: -20 }}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            )}
                        </View>

                        <View style={styles.body}>
                            {isLocation ? (
                                <View style={{ marginHorizontal: -45 }}>
                                    <ScrollView>
                                        <View style={{ height: '80%', justifyContent: 'center', marginHorizontal: 25 }}>
                                            <View style={styles.containInput}>
                                                <CustomText fontSize={17} fontWeight='bold' color={colors.gray300}>
                                                    Addresse
                                                </CustomText>
                                                <TextInput
                                                    style={styles.inputModal}
                                                    value={address}
                                                    onChangeText={setAddress}
                                                    placeholder='Entrez une adresse'
                                                    placeholderTextColor={colors.gray}
                                                />
                                            </View>
                                            <View style={styles.containInput}>
                                                <CustomText fontSize={17} fontWeight='bold' color={colors.gray300}>
                                                    Code postal
                                                </CustomText>
                                                <TextInput
                                                    style={styles.inputModal}
                                                    value={city}
                                                    onChangeText={setCity}
                                                    placeholder='Code postal, Ville'
                                                    placeholderTextColor={colors.gray}
                                                />
                                            </View>

                                            <View style={styles.containInput}>
                                                <CustomText fontSize={17} fontWeight='bold' color={colors.gray300}>
                                                    Ville
                                                </CustomText>
                                                <TextInput
                                                    style={styles.inputModal}
                                                    value={zipCode}
                                                    onChangeText={setZipCode}
                                                    placeholder='Entrez une ville'
                                                    placeholderTextColor={colors.gray}
                                                />
                                            </View>
                                        </View>
                                        <View style={[styles.containButton, { marginHorizontal: 15 }]}>
                                            <CustomAppButton
                                                onPress={() => setModalVisible(!modalVisible)}
                                                title='Annuler'
                                                alignSelf="baseline"
                                                paddingVertical={10}
                                                paddingHorizontal={30}
                                                textColor={colors.white}
                                                textFontSize={15}
                                                borderWidth={1}
                                                borderRadius={5}
                                                borderColor={colors.white}
                                                bkgroundColor={colors.blue200}
                                            />
                                            <CustomAppButton
                                                // onPress={() => setModalVisible(!modalVisible)}
                                                title='Valider'
                                                alignSelf="baseline"
                                                paddingVertical={10}
                                                paddingHorizontal={30}
                                                textColor={colors.white}
                                                textFontSize={15}
                                                borderWidth={1}
                                                borderRadius={5}
                                                borderColor={colors.white}
                                                bkgroundColor={colors.blue}
                                            />
                                        </View>
                                    </ScrollView>
                                </View>
                            ) : (
                                <View style={{ height: '99%', marginHorizontal: -35 }}>
                                    <ScrollView>
                                        <View>
                                            {/* <CustomText fontSize={18} color={colors.black} style={{ marginLeft: 12 }}>
                                                Ville
                                            </CustomText>
                                            <CustomText fontSize={18} color={colors.gray} style={{ marginLeft: 12 }}>
                                                Ville
                                            </CustomText>
                                            <CustomText fontSize={18} color={colors.black} style={{ marginLeft: 12 }}>
                                                Ville
                                            </CustomText>
                                            <View style={styles.divider} /> */}
                                        </View>
                                    </ScrollView>
                                </View>
                            )}
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                <View style={{ flex: 1 }}>
                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                        <TextInput
                            style={[styles.input, 
                                {
                                    borderWidth: borderWidth, 
                                    borderRadius:borderRadius,
                                    borderColor:borderColor
                                }
                            ]}
                            placeholder={placeholder}
                            placeholderTextColor={colors.gray100}
                            editable={false}
                            onFocus={() => setModalVisible(true)}
                            value={value}
                            onChangeText={onChange}
                        />
                        {showCrossIcon && (
                            <TouchableOpacity onPress={clearText}>
                                <Icon name="close" size={24} color={colors.red} style={styles.icon} />
                            </TouchableOpacity>
                        )}
                    </Pressable>
                </View>
                {isLocation && (
                    <View style={styles.containerIcon}>
                        <Entypo name="home" size={25} style={styles.iconLocation} onPress={() => setModalVisible(!modalVisible)} />
                        <Entypo name="location-pin" size={25} style={styles.iconLocation} />
                    </View>
                )}
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        backgroundColor: 'white',
        padding: 35,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: '75%'
    },
    compartment: {
        marginTop: -35,
        marginHorizontal: -35
    },
    body: {
        flexDirection: 'column',
        marginVertical: 15,
        gap: 12
    },
    containInput: {
        flexDirection: 'column',
        gap: 8
    },
    containButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        marginTop: 14
    },
    input: {
        marginVertical: 10,
        padding: 10,
        color: colors.black,
        fontSize: 18,
        textAlignVertical: 'center',
        backgroundColor: colors.white,
        height: 50
    },
    inputProfession: {
        marginVertical: 10,
        padding: 10,
        color: colors.black,
        fontSize: 13,
        borderRadius: 10,
        textAlignVertical: 'center',
        backgroundColor: colors.white,
        height: 40
    },
    inputModal: {
        borderWidth: 0.5,
        borderColor: colors.gray,
        borderRadius: 5,
        color: colors.black,
        padding: 10,
        marginVertical: 3,
        textAlignVertical: 'center',
        // width: "90%"
    },
    divider: {
        marginVertical: 12,
        height: 1,
        backgroundColor: colors.gray100,
    },
    icon: {
        position: 'absolute',
        marginRight: 10,
        right: 1,
        top: '10%',
        transform: [{ translateY: -40 }]
    },
    modalBackground: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Couleur de fond semi-transparente
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    containerIcon: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '20%',
        marginLeft: 4
    },
    iconLocation: {
        color: colors.blue
    },

});

export default ModalView;