import React, { useEffect } from 'react'
import ContainerScreen from '../../components/wrappers/ContainerScreen';
import Motif from '../../components/Motif/Motif';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import { createAppointmentRequest } from '../../redux/appointment/actions';

const Motifs = ({ route, isLoadingAppointment, navigationAppointment, motifRendezVous, session }) => {
  const { motifs, tokenappointment } = route.params;
  
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      // Assurez-vous d'ajuster les valeurs de tokenuser, week, data et action en fonction de vos besoins
      const tokenuser = '';
      const motif = motifs[0]; // Choisissez le premier motif, ou sélectionnez celui qui convient
      const week = motif.onclick_week;
      const data = motif.onclick_data;
      const action = motif.onclick_action;
      dispatch(createAppointmentRequest(tokenuser, tokenappointment, week, data, action, session));
    };

    fetchData();
  }, []);

  const handleMotif = (motif) => {
    navigation.navigate('Jour et Heure du Rdv', {motif, dataCreneau: motifRendezVous, navigationAppointment, tokenappointment});
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
  navigationAppointment: state.AppointmentReducer?.navigation,
  motifRendezVous: state.AppointmentReducer?.motifRendezVous,
  session: state.AppointmentReducer?.session,
  isLoadingAppointment: state.AppointmentReducer?.isLoading,
});

export default connect(mapStateToProps)(Motifs);
