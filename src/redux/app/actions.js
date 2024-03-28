import * as types from './types';


export const setModalVisible = (show, message) => ({ type: types.SET_MODAL_VISIBLE_REQUEST, payload: { show, message } });
