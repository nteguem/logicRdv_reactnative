
import { takeLatest, call, put, select } from 'redux-saga/effects';
import { sendRequest } from '../../utils/api';
import { setModalVisible } from '../app/actions';
import { cancelAppointmentRequest,createAppointmentRequest } from '../appointment/actions';
import { showMessage } from 'react-native-flash-message';
import { createPaymentMethod, confirmPayment } from '@stripe/stripe-react-native';
import {
  MAKE_PAIEMENT_REQUEST,
  MAKE_PAIEMENT_SUCCESS,
  MAKE_PAIEMENT_FAILURE
} from './types';
import * as RootNavigation from '../../routes/RootNavigation';




// function* createPaymentMethodAPI(cardDetails) {
//   return createPaymentMethod({
//     paymentMethodType: 'Card',
//     card: cardDetails,
//   });
// }


// function* confirmPaymentAPI(stripeClientSecret, paymentMethodId) {
//   return confirmPayment(stripeClientSecret, {
//     paymentMethodType: 'Card',
//     paymentMethodId,
//   });
// }

function* makePayment({payload}) {
  const { paiementIntent,data,session,params } = yield select(state => state.AppointmentReducer);
  try {
    const { paymentIntent, error } = yield confirmPayment(paiementIntent, { paymentMethodType: 'Card',
    paymentMethodData: {
      paymentMethodId:payload,
    }});

    if (error) {
      console.error('Erreur lors du paiement:', error);
      yield put(cancelAppointmentRequest({ tokenappointment: params.tokenappointment }));
      yield put({ type: MAKE_PAIEMENT_FAILURE, payload: error });
    }
     else if (paymentIntent.status === 'RequiresCapture') {
      console.log('requires_capture', paymentIntent);
      yield put(createAppointmentRequest(data.appointment, data.apptbuttonvalidation.onclick_week, data.apptbuttonvalidation.onclick_data, data.apptbuttonvalidation.onclick_action, session));
      yield put({ type: MAKE_PAIEMENT_SUCCESS, payload: paymentIntent });
    } else { 
      console.log('Payment failed', paymentIntent);
      yield put(cancelAppointmentRequest({ tokenappointment: params.tokenappointment }));
      yield put({ type: MAKE_PAIEMENT_FAILURE, payload: paymentIntent });
    }
  } catch (error) {
    yield put(cancelAppointmentRequest({ tokenappointment: params.tokenappointment }));
    yield put({ type: MAKE_PAIEMENT_FAILURE, payload: error });
    console.error('Erreur catch lors du paiement:', error);
  }
}


function* PaiementSaga() {
  yield takeLatest(MAKE_PAIEMENT_REQUEST, makePayment);
}

export default PaiementSaga;
