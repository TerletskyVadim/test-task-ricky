import { all } from 'redux-saga/effects';

import signIn from '../screens/SignIn/sagas';
import signOut from '../screens/Home/sagas';

export default function* rootSaga() {
  yield all([signIn, signOut]);
}
