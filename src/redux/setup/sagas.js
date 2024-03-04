import { all } from 'redux-saga/effects';
import AuthSaga from '../auth/saga';
import SearchSaga from '../search/saga'
/**

 * @description combine sagas.

 */

export default function* Sagas() {
  yield all([AuthSaga(),SearchSaga()]);
}
