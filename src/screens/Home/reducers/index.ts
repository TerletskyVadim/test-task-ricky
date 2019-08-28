import { AnyAction } from 'redux';

// Actions
import { SIGN_IN_SUCCESS, SIGN_IN_ERROR } from '../../SignIn/actions';

export const initialState = {
  userInfo: {
    email: '',
    id: '',
    givenName: '',
    familyName: '',
    photo: '',
    name: '',
  },
  error: '',
};

export default (
  state = initialState,
  action: AnyAction,
): typeof initialState => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
      };
    case SIGN_IN_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
