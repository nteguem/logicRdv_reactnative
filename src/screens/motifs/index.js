import React, { useEffect } from 'react'
import ContainerScreen from '../../components/wrappers/ContainerScreen';
import Motif from '../../components/Motif/Motif';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import { createAppointmentRequest } from '../../redux/appointment/actions';


const Motifs = ({ route, isLoadingAppointment, data, session }) => {
  const { tokenappointment } = route.params;
 const dispatch = useDispatch();
  const handleMotif = async(motif) => {
    await dispatch(createAppointmentRequest(tokenappointment, motif?.onclick_week, motif?.onclick_data, motif?.onclick_action, session,motif?.description));
  };

  return (
    <ContainerScreen isLoading={isLoadingAppointment}>
      {
        data.map((motif, index) => (
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
  data: state.AppointmentReducer?.data,
  session: state.AppointmentReducer?.session,
  isLoadingAppointment: state.AppointmentReducer?.isLoading,
});

export default connect(mapStateToProps)(Motifs);
