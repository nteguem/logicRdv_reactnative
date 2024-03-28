import { takeLatest, put } from 'redux-saga/effects';
import { SET_MODAL_VISIBLE,SET_MODAL_VISIBLE_REQUEST } from './types';

function* setModalVisible(action) {
  const { show, message } = action.payload;
  yield put({ type: SET_MODAL_VISIBLE, payload: { show, message } });
}


function* AppSaga() {
  yield takeLatest(SET_MODAL_VISIBLE_REQUEST, setModalVisible);
}

export default AppSaga;
