import React from 'react'
import ContainerScreen from '../../components/wrappers/ContainerScreen';
import Motif from '../../components/Motif/Motif';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import { createAppointmentRequest } from '../../redux/appointment/actions';

const Motifs = ({ route, isLoadingAppointment }) => {
  const { motifs } = route.params;

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleMotif = (motif) => {
    // dispatch(createAppointmentRequest(tokenuser, tokenappointment, onClickWeek, onClickData, onClickAction, session));
    navigation.navigate('Jour et Heure du Rdv', {motif});
  };

  return (
    <ContainerScreen isLoading={isLoadingAppointment}>
      {
        motifs.map((motif, index) => (
          <TouchableOpacity key={motif.onclick_data} onPress={() => handleMotif(motif)}>
            <Motif
              labelplace={motif.labelplace}
              color={motif.color}
              description={motif.description}
            />
          </TouchableOpacity>
        ))
      }
    </ContainerScreen>
  )
}
const mapStateToProps = (state) => ({
  isLoadingAppointment: state.AppointmentReducer?.isLoading,
});

export default connect(mapStateToProps)(Motifs);
