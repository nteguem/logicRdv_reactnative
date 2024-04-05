
import { takeLatest, call, put, select } from 'redux-saga/effects';
import { sendRequest } from '../../utils/api';
import { setModalVisible } from '../app/actions';
import { createAppointmentRequest } from './actions';
import { showMessage } from 'react-native-flash-message';
import { createPaymentMethod, confirmPayment } from '@stripe/stripe-react-native';
import {
  MAKE_PAIEMENT_REQUEST,
  MAKE_PAIEMENT_REQUEST_SUCCESS,
  MAKE_PAIEMENT_REQUEST_FAILURE
} from './types';
import * as RootNavigation from '../../routes/RootNavigation';




function createPaymentMethodAPI(cardDetails) {
  return createPaymentMethod({
    paymentMethodType: 'Card',
    card: cardDetails,
  });
}


function confirmPaymentAPI(stripeClientSecret, paymentMethodId) {
  return confirmPayment(stripeClientSecret, {
    paymentMethodType: 'Card',
    paymentMethodId,
  });
}

function* makePayment({payload}) {
  const { stripeClientSecret, cardDetails } = payload;
  try {
    const paymentMethodResponse = yield call(createPaymentMethodAPI, cardDetails.cardDetails);

    if (paymentMethodResponse.error) {
      console.log('Error creating payment method:', paymentMethodResponse.error);
      yield put({ type: MAKE_PAIEMENT_FAILURE, payload: paymentMethodResponse.error });
      return;
    }

    const { paymentIntent, error } = yield call(confirmPaymentAPI, stripeClientSecret, paymentMethodResponse.paymentMethod.id);

    if (error) {
      console.error('Erreur lors du paiement:', error);
      yield put({ type: MAKE_PAIEMENT_FAILURE, payload: error });
    } else if (paymentIntent.status === 'succeeded') {
      console.log('Payment succeeded', paymentIntent);
      yield put({ type: MAKE_PAIEMENT_FAILURE, payload: paymentIntent });
    } else if (paymentIntent.status === 'failed') {
      console.log('Payment failed', paymentIntent);
      yield put({ type: MAKE_PAIEMENT_FAILURE, payload: paymentIntent });
    } else if (paymentIntent.status === 'requires_capture') {
      console.log('requires_capture', paymentIntent);
      yield put({ type: MAKE_PAIEMENT_REQUEST_SUCCESS, payload: paymentIntent });
    } else {
      console.log('Unknown payment status', paymentIntent);
      yield put({ type: MAKE_PAIEMENT_FAILURE, payload: paymentIntent });
    }
  } catch (error) {
    yield put({ type: MAKE_PAIEMENT_FAILURE, payload: error });
    console.error('Erreur catch lors du paiement:', error);
  }
}


function* PaiementSaga() {
  yield takeLatest(MAKE_PAIEMENT_REQUEST, makePayment);
}

export default PaiementSaga;
