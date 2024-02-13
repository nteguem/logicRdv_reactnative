import { all } from 'redux-saga/effects';
import AuthSaga from '../auth/saga';
import CountrySaga from '../country/saga';
/**

 * @description combine sagas.

 */

export default function* Sagas() {
  yield all([AuthSaga(),CountrySaga()]);
}
