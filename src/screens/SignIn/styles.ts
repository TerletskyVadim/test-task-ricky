import { StyleSheet } from 'react-native';

// Constants
import colors from '../../common/constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.BISCAY,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    color: colors.ICE_COLD,
  },
  buttonContainer: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  button: {
    width: 195,
    height: 48,
  },
});
