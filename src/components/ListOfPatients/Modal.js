import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, View, TextInput, ScrollView } from 'react-native';
import CustomText from '../global/CustomText';
import { colors } from '../global/colors';
import CustomAppButton from '../global/CustomAppButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ModalPatient = ({
    isEdit = false,
}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');

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
                            borderBottomLeftRadius: 8,
                            borderBottomRightRadius: 8
                        }]}
                    >

                        <View
                            style={[styles.compartment,
                            {
                                backgroundColor: colors.black100,
                                paddingVertical: 20,
                                paddingTop: 15,
                            }]} >
                            {isEdit ? (
                                <View style={{ paddingHorizontal: 20 }}>
                                    <CustomText fontSize={20} color={colors.white} fontWeight='bold' style={{ textAlign: 'center' }}>
                                        Modifier un patient
                                    </CustomText>
                                </View>
                            ) : (
                                <View style={{ paddingHorizontal: 20 }}>
                                    <CustomText fontSize={20} color={colors.white} fontWeight='bold' style={{ textAlign: 'center' }}>
                                        Ajouter un patient
                                    </CustomText>
                                </View>

                            )}
                        </View>

                        <View style={styles.body}>
                            <View style={{ marginHorizontal: 5 }}>
                                <ScrollView>
                                    <View style={{ height: '83%', justifyContent: 'center' }}>
                                        <View style={styles.containInput}>
                                            <CustomText fontSize={17} fontWeight='bold' color={colors.gray300}>
                                                Nom du patient
                                            </CustomText>
                                            <TextInput
                                                style={styles.inputModal}
                                                value={nom}
                                                onChangeText={setNom}
                                                placeholder='Entrez le nom '
                                                placeholderTextColor={colors.gray}
                                            />
                                        </View>
                                        <View style={styles.containInput}>
                                            <CustomText fontSize={17} fontWeight='bold' color={colors.gray300}>
                                                Prénom du patient
                                            </CustomText>
                                            <TextInput
                                                style={styles.inputModal}
                                                value={prenom}
                                                onChangeText={setPrenom}
                                                placeholder='Entrez le prénom'
                                                placeholderTextColor={colors.gray}
                                            />
                                        </View>

                                        <View style={styles.containInput}>
                                            <CustomText fontSize={17} fontWeight='bold' color={colors.gray300}>
                                                Email du patient
                                            </CustomText>
                                            <TextInput
                                                style={styles.inputModal}
                                                value={email}
                                                onChangeText={setEmail}
                                                placeholder="Entrez l'adresse email"
                                                placeholderTextColor={colors.gray}
                                            />
                                        </View>

                                        <View style={styles.containInput}>
                                            <CustomText fontSize={17} fontWeight='bold' color={colors.gray300}>
                                                Téléphone du patient
                                            </CustomText>
                                            <TextInput
                                                style={styles.inputModal}
                                                value={telephone}
                                                onChangeText={setTelephone}
                                                placeholder="Entrez le numéro du patient"
                                                placeholderTextColor={colors.gray}
                                            />
                                        </View>
                                    </View>
                                    <View style={[styles.containButton,]}>
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

                        </View>
                    </View>
                </View>
            </Modal>
            <View style={{ flex: 1 }}>
                {isEdit ? (
                    <MaterialCommunityIcons
                        onPress={() => setModalVisible(!modalVisible)}
                        name="pencil-circle"
                        size={25}
                        color={colors.blue}
                        marginRight={5}
                        style={{ marginTop: -15 }}
                    />
                ) : (
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                        <CustomAppButton
                            onPress={() => setModalVisible(!modalVisible)}
                            title="AJOUTER UN PATIENT"
                            alignSelf="baseline"
                            paddingVertical={16}
                            paddingHorizontal={20}
                            textColor={colors.white}
                            textFontSize={12}
                            borderRadius={10}
                            bkgroundColor={colors.blue}
                            width='100%'
                            fontWeight='bold'
                        />
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
        height: '76%'
    },
    compartment: {
        marginTop: -35,
        marginHorizontal: -35
    },
    body: {
        flexDirection: 'column',
        marginVertical: 16,
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
    modalBackground: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Couleur de fond semi-transparente
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },

});

export default ModalPatient;