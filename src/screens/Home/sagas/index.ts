import { all, fork } from 'redux-saga/effects';

import signOut from './signOut';

export default all([
  fork(signOut),
]);
