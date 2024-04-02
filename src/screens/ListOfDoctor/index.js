import React, { useEffect, useState } from 'react'
import ContainerScreen from '../../components/wrappers/ContainerScreen';
import { useNavigation } from '@react-navigation/native';
import Doctor from '../../components/global/Doctor';
import { colors } from '../../components/global/colors';
import { useDispatch, connect } from 'react-redux';
import { createAppointmentRequest, listDoctorRequest } from '../../redux/appointment/actions';

const DoctorListScreen = ({ listDoctor, isLoading }) => {

  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listDoctorRequest());
  }, []);

  const handleMotifs = async (doctor) => {
    const tokenappointment = doctor.appointment.token
    await dispatch(createAppointmentRequest(tokenappointment, '', '', '', ''));
  };
  return (
    <ContainerScreen isLoading={isLoading}>
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
          isDelete
          isAppointment
          isRightIcons
          lat={doctor.lat}
          lng={doctor.lng}
        />
      ))}
    </ContainerScreen>
  )
}

const mapStateToProps = ({ AppointmentReducer }) => ({
  listDoctor: AppointmentReducer.listDoctor,
  isLoading: AppointmentReducer.isLoading,
});

export default connect(mapStateToProps)(DoctorListScreen);
