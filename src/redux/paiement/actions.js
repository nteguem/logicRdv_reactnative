import * as types from './types';



export const makePaiementRequest = (stripeClientSecret, cardDetails) => ({
  type: types.MAKE_PAIEMENT_REQUEST,
  payload: { stripeClientSecret, cardDetails },
});

