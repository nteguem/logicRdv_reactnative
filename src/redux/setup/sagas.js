import { all } from 'redux-saga/effects';
import AuthSaga from '../auth/saga';
import SearchSaga from '../search/saga'
import AppointmentSaga from '../appointment/saga';
import NotificationSaga from '../notification/saga';
import AppSaga from '../app/saga';
/**

 * @description combine sagas.

 */

export default function* Sagas() {
  yield all([AuthSaga(),SearchSaga(),AppointmentSaga(),NotificationSaga(),AppSaga()]);
}
