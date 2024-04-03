import React, { useEffect, useState } from 'react'
import ContainerScreen from '../../components/wrappers/ContainerScreen';
import { useNavigation } from '@react-navigation/native';
import Doctor from '../../components/global/Doctor';
import { colors } from '../../components/global/colors';
import { useDispatch, connect } from 'react-redux';
import { createAppointmentRequest, listDoctorRequest, removeDoctorRequest } from '../../redux/appointment/actions';
import { Modal, ScrollView, StyleSheet, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import CustomText from '../../components/global/CustomText';
import CustomAppButton from '../../components/global/CustomAppButton';

const DoctorListScreen = ({ listDoctor, isLoading, doctorDeletedMessage }) => {

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [doctorToDelete, setDoctorToDelete] = useState(null);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listDoctorRequest());
  }, []);

  const handleMotifs = async (doctor) => {
    const tokenappointment = doctor.appointment.token
    await dispatch(createAppointmentRequest(tokenappointment, '', '', '', ''));
  };

  const handleDeleteDoctor = async () => {
    if (doctorToDelete) {
      const id = doctorToDelete.id
      await dispatch(removeDoctorRequest({ id: id }));
      setDoctorToDelete(null);
      setShowDeleteModal(false);
    }
  };

  return (
    <ContainerScreen isLoading={isLoading}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showDeleteModal}
        onRequestClose={() => setShowDeleteModal(false)}
      >
        <View style={styles.modalBackground}></View>
        <View style={styles.centeredView}>
          <View
            style={[styles.modalView,
            {
              borderRadius: 8
            }]}
          >
            <View style={styles.body}>
              <CustomText fontSize={12} fontWeight='bold'>Êtes-vous sûr de vouloir supprimer ce praticien ?</CustomText>
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 8 }}>
                <CustomAppButton
                  onPress={() => setShowDeleteModal(false)}
                  title="Annuler"
                  alignSelf="baseline"
                  paddingVertical={16}
                  paddingHorizontal={40}
                  textColor={colors.white}
                  textFontSize={12}
                  borderRadius={5}
                  bkgroundColor={colors.blue}
                  userIcon
                  display='none'
                />
                <CustomAppButton
                  onPress={() => handleDeleteDoctor(doctorToDelete)}
                  title="Confirmer"
                  alignSelf="baseline"
                  paddingVertical={16}
                  paddingHorizontal={30}
                  textColor={colors.white}
                  textFontSize={12}
                  borderRadius={5}
                  bkgroundColor={colors.red}
                  userIcon
                  display='none'
                />
              </View>

            </View>
          </View>
        </View>
      </Modal>

      <ScrollView>
        {listDoctor.map((doctor, index) => (
          <Doctor
            key={index}
            handleChange={() => handleMotifs(doctor)}
            texte2={doctor.category}
            texte4={doctor.address}
            texte3={`${doctor.zip} ${doctor.city}`}
            texte1={doctor.civility ? `${doctor.civility} ${doctor.nom}` : doctor.nom}
            texte5={doctor.tel}
            colorTitle={colors.yellow}
            colorContain={colors.blue}
            fontWeight={'bold'}
            isPhoneIcons
            isProfileIcon
            isDelete={listDoctor.length > 1}
            isAppointment
            isRightIcons
            lat={doctor.lat}
            lng={doctor.lng}
            handleDelete={() => {
              setDoctorToDelete(doctor);
              setShowDeleteModal(true);
            }}
          />
        ))}
      </ScrollView>
    </ContainerScreen>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "80%",
  },
  compartment: {
    marginTop: -10,
    marginHorizontal: -10
  },
  body: {
    flexDirection: 'column',
    marginVertical: 16,
    gap: 12
  },
  containButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 8,
    marginTop: 14
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

const mapStateToProps = ({ AppointmentReducer }) => ({
  listDoctor: AppointmentReducer.listDoctor,
  doctorDeletedMessage: AppointmentReducer.doctorDeletedMessage,
  isLoading: AppointmentReducer.isLoading,
});

export default connect(mapStateToProps)(DoctorListScreen);
