import React, { useEffect } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import Doctor from '../../components/global/Doctor';
import { useNavigation } from '@react-navigation/native';
import ContainerScreen from '../../components/wrappers/ContainerScreen';
import { colors } from '../../components/global/colors';
import { useDispatch, connect } from 'react-redux';
import { listDoctorRequest } from '../../redux/appointment/actions';

function PatientManagement({listDoctor, isLoading}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listDoctorRequest());
  }, []);

  const handleListPatient = (doctor) => {
    console.log('doctor:::', doctor)
    const tokenappointment = doctor?.appointment?.token
    navigation.navigate('Liste des patients', {tokenappointment});
  };
  
  return (
    <ContainerScreen isLoading={isLoading}>
      <ScrollView>
        {
          listDoctor.map((doctor, index) => (
            <View  >
              <TouchableOpacity onPress={() => handleListPatient(doctor)}>
                <Doctor
                key={index}
                  texte2={doctor.category}
                  texte3={doctor.address}
                  texte4={`${doctor.zip} ${doctor.city}`}
                  texte1={doctor.civility ? `${doctor.civility} ${doctor.nom}` : doctor.nom}
                  texte5={doctor.tel}
                  colorTitle={colors.yellow}
                  colorContain={colors.blue}
                  fontWeight={'bold'}
                  isArrowIcon
                  isProfileIcon
                />
              </TouchableOpacity>
              
            </View>
          ))
        }
      </ScrollView>
    </ContainerScreen>
  );
}
const mapStateToProps = ({ AppointmentReducer }) => ({
  listDoctor: AppointmentReducer.listDoctor,
  isLoading: AppointmentReducer.isLoading,
});

export default connect(mapStateToProps)(PatientManagement);
