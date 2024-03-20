import React, { useEffect } from 'react'
import ContainerScreen from '../../components/wrappers/ContainerScreen';
import Motif from '../../components/Motif/Motif';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import { createAppointmentRequest } from '../../redux/appointment/actions';


const Motifs = ({ route, isLoadingAppointment, motifRendezVous, session }) => {
  const { tokenappointment } = route.params;

  const navigation = useNavigation();
  const dispatch = useDispatch();
  // console.log('===================',motifRendezVous)
  const handleMotif = async(motif) => {
    await dispatch(createAppointmentRequest(tokenappointment, motif?.onclick_week, motif?.onclick_data, motif?.onclick_action, session));
    navigation.navigate('Jour et Heure du Rdv', {motif: motif, tokenappointment: tokenappointment });
  };

  return (
    <ContainerScreen isLoading={isLoadingAppointment}>
      {
        motifRendezVous.map((motif, index) => (
          <TouchableOpacity key={index} onPress={() => handleMotif(motif)}>
            <Motif
              labelplace={motif?.labelplace}
              color={motif?.color}
              description={motif?.description}
            />
          </TouchableOpacity>
        ))
      }
    </ContainerScreen>
  )
}
const mapStateToProps = (state) => ({
  motifRendezVous: state.AppointmentReducer?.motifRendezVous,
  session: state.AppointmentReducer?.session,
  isLoadingAppointment: state.AppointmentReducer?.isLoading,
  dataCreneaux: state.AppointmentReducer.dataCreneaux
});

export default connect(mapStateToProps)(Motifs);
