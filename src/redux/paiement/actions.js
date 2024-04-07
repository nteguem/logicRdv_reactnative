import * as types from './types';



export const makePaiementRequest = (cardDetails) => ({
  type: types.MAKE_PAIEMENT_REQUEST,
  payload:  cardDetails ,
});

