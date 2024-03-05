import React, { useState, useEffect } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import CustomText from '../global/CustomText';
import { colors } from '../global/colors';
import CustomAppButton from '../global/CustomAppButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { useDispatch, connect } from 'react-redux';
import { searchRequest, resultRequest } from '../../redux/search/actions';
import { useNavigation } from '@react-navigation/native';

const ModalView = ({
    isLocation = false,
    isCity = false,
    onChange,
    placeholder,
    borderWidth,
    borderRadius,
    borderColor,
    clearInputText,
    results,
    isLoading
}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [input, setInput] = useState('');
    const [value, setValue] = useState('');
    const [selectedItem, setSelectedItem] = useState(null);

    const dispatch = useDispatch();
    const navigation = useNavigation();

    useEffect(() => {
        if (modalVisible) {
            setInput('');
            setValue('');
        }
    }, [modalVisible]);

    const handleInputChange = (text) => {
        if (isCity) {
            setInput(text);
            dispatch(searchRequest({ "kind": "city", "proxy_istelecons": "0", "term": text }));
        } else {
            setInput(text);
            dispatch(searchRequest({ "kind": "name", "cp": "0", "proxy_istelecons": "0", "term": text }));
        }
    };

    const handleSelectItem = (item) => {
        console.log('Praticien choisi::', item)
        if (isCity) {
            setValue(item.clientinfos);
            onChange(item.clientinfos);
        } else {
            if (!item.civility) {
                setValue(item.nom);
                onChange(item.nom);
            } else {
                navigation.navigate('Détail du médécin', {
                    civility: item.civility,
                    name: item.nom,
                    profession: item.category,
                    adresse: item.address,
                    zip: item.zip,
                    city: item.city,
                    tel: item.tel,
                    proxy_ville_id: item.id_city,
                    proxy_nom_id: item.id
                })
            }
        }
        setModalVisible(false);
        setSelectedItem(item);
    };

    useEffect(() => {
        // dispatch(searchRequest({"kind":"city","proxy_istelecons":"0","term":""}));
        // dispatch(searchRequest({ "kind": "name", "cp": "0", "proxy_istelecons": "0", "term": "med" }));
        // dispatch(resultRequest({"proxy_ville":"75001 PARIS 1er","proxy_nom":"Médecin Généraliste","proxy_ville_id":"30924","proxy_nom_id":"c1","proxy_search":"","proxy_page":"1"}));
    }, []);

    const clearText = () => {
        setSelectedItem(null)
        setValue('')
        setInput('');
        clearInputText(true);
        dispatch(searchRequest({ "kind": "", "proxy_istelecons": "", "term": "" }));
        dispatch(searchRequest({ "kind": "", "cp": "", "proxy_istelecons": "", "term": "" }));
    };

    const handleTextInputClick = () => {
        dispatch(searchRequest({ "kind": "", "proxy_istelecons": "", "term": "" }));
        dispatch(searchRequest({ "kind": "", "cp": "", "proxy_istelecons": "", "term": "" }));
        setModalVisible(true); // Afficher la modal
    };

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="none"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.modalBackground}></View>
                <View style={styles.centeredView}>
                    <View
                        style={[styles.modalView,
                        {
                            borderBottomLeftRadius: isLocation ? 8 : 0,
                            borderBottomRightRadius: isLocation ? 8 : 0,
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
                                <View style={{ width: '100%' }}>
                                    <CustomText fontSize={15} color={colors.white} fontWeight='bold' style={{ textAlign: 'center' }}>
                                        ADRESSE DE RECHERCHE
                                    </CustomText>
                                </View>
                            ) : (
                                <View>
                                    <CustomText fontSize={15} color={colors.white} fontWeight='bold' style={{ marginLeft: 8 }}>
                                        {isCity ? 'Code postal, Ville' : 'Nom, Spécialité, Téléphone'}
                                    </CustomText>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: -18 }}>
                                        <View style={{ width: '78%' }}>
                                            <TextInput
                                                value={input}
                                                onChangeText={handleInputChange}
                                                style={styles.inputProfession}
                                                placeholder={isCity ? 'Code postal, Ville' : 'Nom, Spécialité, Téléphone'}
                                                placeholderTextColor={colors.gray100}
                                            />
                                            {input !== '' && (
                                                <Icon name="close" size={24} color={colors.red} style={styles.icon} onPress={clearText} />
                                            )}
                                        </View>
                                        <TouchableOpacity>
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
                                                <CustomText fontSize={12} fontWeight='bold' color={colors.gray300}>
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
                                                <CustomText fontSize={12} fontWeight='bold' color={colors.gray300}>
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
                                                <CustomText fontSize={12} fontWeight='bold' color={colors.gray300}>
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
                                        <View style={styles.containButton}>
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
                                <View style={styles.body}>
                                    {isLoading ? (
                                        <View style={styles.overlay}>
                                            <ActivityIndicator size="large" color={colors.blue} />
                                        </View>
                                    ) : (
                                        <View style={{ height: '98%', marginHorizontal: -35 }}>
                                            <ScrollView>
                                                {results.map((result, index) => (
                                                    <TouchableOpacity key={index} onPress={() => handleSelectItem(result)}>
                                                        <View >
                                                            <CustomText fontSize={12} fontWeight={'bold'} color={colors.black} style={{ marginLeft: 12 }}>
                                                                {isCity ? result.clientinfos : result.civility ? `${result.civility} ${result.nom}` : result.nom}
                                                            </CustomText>
                                                            {result.address && (
                                                                <CustomText fontSize={12} fontWeight={'bold'} color={colors.gray} style={{ marginLeft: 12 }}>
                                                                    {result.address}
                                                                </CustomText>
                                                            )}
                                                            {result.zip && (
                                                                <CustomText fontSize={12} fontWeight={'bold'} color={colors.black} style={{ marginLeft: 12 }}>
                                                                    {result.zip}
                                                                </CustomText>
                                                            )}
                                                            <View style={styles.divider} />
                                                        </View>
                                                    </TouchableOpacity>
                                                ))}
                                            </ScrollView>
                                        </View>
                                    )}
                                </View>

                            )}
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                <View style={{ flex: 1 }}>
                    {!isLocation && (
                        <Pressable onPress={handleTextInputClick}>
                            <TextInput
                                style={[styles.input,
                                {
                                    borderWidth: borderWidth,
                                    borderRadius: borderRadius,
                                    borderColor: borderColor
                                }
                                ]}
                                placeholder={placeholder}
                                placeholderTextColor={colors.gray100}
                                editable={false}
                                onFocus={() => {
                                    if (!selectedItem) {
                                        setModalVisible(true);
                                    }
                                }}
                                value={selectedItem && (isCity ? selectedItem.clientinfos : selectedItem.nom)}
                                onChangeText={onChange}
                            />
                            {selectedItem || input ? (
                                <Icon name="close" size={24} color={colors.red} style={styles.icon} onPress={clearText} />
                            ) : null}
                        </Pressable>
                    )}
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
        maxHeight: '60%',
        width: '85%'
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
        marginTop: 14,
    },
    input: {
        marginVertical: 10,
        padding: 10,
        color: colors.black,
        fontSize: 12,
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
        height: 50,
        fontSize: 12
    },
    inputModal: {
        borderWidth: 0.5,
        borderColor: colors.gray,
        borderRadius: 5,
        color: colors.black,
        padding: 10,
        marginVertical: 3,
        textAlignVertical: 'center',
        fontSize: 12
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
        transform: [{ translateY: 15 }]
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
        gap: 12
    },
    iconLocation: {
        color: colors.blue
    },

});


const mapStateToProps = ({ SearchReducer }) => ({
    results: SearchReducer?.results,
    isLoading: SearchReducer?.isLoading,
});

export default connect(mapStateToProps)(ModalView);


