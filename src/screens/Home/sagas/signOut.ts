import { takeEvery, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { GoogleSignin } from 'react-native-google-signin';
import { Alert } from 'react-native';

// Navigation
import { NavigationService, screenNames } from '../../../navigation';

// Actions
import { SIGN_OUT_REQUEST, signOutSuccess, signOutError } from '../actions';

function* signOutWorker() {
  try {
    // GoogleSignin.revokeAccess();
    yield GoogleSignin.signOut();

    yield put(signOutSuccess());

    NavigationService.navigate(screenNames.SIGN_IN);
  } catch (e) {
    Alert.alert('Error', 'We have got an error logging you out');

    yield put(signOutError(e.message));
  }
}

function* signOutWatcher(): SagaIterator {
  yield takeEvery(SIGN_OUT_REQUEST, signOutWorker);
}

export default signOutWatcher;
