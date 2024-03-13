import React, { useState, useEffect } from 'react';
import { View, Text, Modal, Button, FlatList, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import LoginForm from '../LoginComponent/LoginForm';
import RegistrationButtons from '../LoginComponent/RegistrationButtons';
import { colors } from '../global/colors';
import CustomText from '../global/CustomText';
import { loginRequest } from '../../redux/auth/actions';

const LoginModal = ({ openModalProp }) => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    dispatch(loginRequest('','',''));
    setModalVisible(openModalProp);
  }, [openModalProp]);

  const closeModal = () => {
    setModalVisible(false);
  };

  const data = [
    { id: 'loginForm', component: <LoginForm /> },
    { id: 'registrationButtons', component: <RegistrationButtons /> },
  ];

  const renderItem = ({ item }) => <View>{item.component}</View>;

  return (
    <Modal visible={modalVisible} onRequestClose={closeModal} transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <CustomText style={styles.closeButtonText}>X</CustomText>
          </TouchableOpacity>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ flexGrow: 1 }}
          />
        </View>
      </View>
    </Modal>
  );
};

const { height, width } = Dimensions.get('window');
const modalWidth = width * 0.8;
const modalHeight = height * 0.7;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: modalWidth,
    height: modalHeight,
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 20,
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 15,
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginModal;