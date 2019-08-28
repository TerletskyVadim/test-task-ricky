import { takeEvery, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { GoogleSignin, User } from 'react-native-google-signin';
import { Alert } from 'react-native';

// Navigation
import { NavigationService, screenNames } from '../../../navigation';

// Constants
import { WEB_CLIENT_ID } from '../../../common/constants/google-api';

// Actions
import { SIGN_IN_REQUEST, signInSuccess, signInError } from '../actions';

function* signInWorker() {
  try {
    let userInfo: User;
    const isUserSignedIn = yield GoogleSignin.isSignedIn();

    if (isUserSignedIn) {
      userInfo = yield GoogleSignin.getCurrentUser();
    } else {
      GoogleSignin.configure({
        webClientId: WEB_CLIENT_ID,
        offlineAccess: true,
        hostedDomain: '',
        loginHint: '',
        forceConsentPrompt: true,
        accountName: '',
      });
      yield GoogleSignin.hasPlayServices();

      userInfo = yield GoogleSignin.signIn();
    }

    yield put(signInSuccess(userInfo.user));

    NavigationService.navigate(screenNames.HOME);
  } catch (e) {
    Alert.alert('Error', 'We have got an error logging you in');

    yield put(signInError(e.message));
  }
}

function* signInWatcher(): SagaIterator {
  yield takeEvery(SIGN_IN_REQUEST, signInWorker);
}

export default signInWatcher;
