import { combineReducers } from 'redux';

import home, { initialState as homeState } from '../screens/Home/reducers';

export interface IAppState {
  home: typeof homeState;
}

export default () => combineReducers({ home });
