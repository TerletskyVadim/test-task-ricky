import { User} from 'react-native-google-signin';

export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR';

export const signIn = () => ({
  type: SIGN_IN_REQUEST,
});

export const signInSuccess = (payload: User['user']) => ({
  payload,
  type: SIGN_IN_SUCCESS,
});

export const signInError = (error: string) => ({
  error,
  type: SIGN_IN_ERROR,
});
