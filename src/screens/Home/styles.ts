import { StyleSheet } from 'react-native';

import colors from '../../common/constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.BISCAY,
  },
  textWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userNameText: {
    fontSize: 22,
    textAlign: 'center',
    color: colors.ICE_COLD,
  },
  logOutButtonWrapper: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logOutButton: {
    width: 180,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.BLAZE_ORANGE,
  },
  logOutText: {
    fontSize: 22,
    textAlign: 'center',
    color: colors.BISCAY,
  },
});
