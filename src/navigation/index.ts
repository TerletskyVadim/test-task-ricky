import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';

import { AuthLoading, SignIn, Home } from '../screens';

import NavigationService from './NavigationService';

import * as screenNames from './screenNames';

const AuthStack = createStackNavigator(
  {
    [screenNames.SIGN_IN]: SignIn,
  },
  {
    initialRouteName: screenNames.SIGN_IN,
    defaultNavigationOptions: { header: null },
  },
);

const AppStack = createStackNavigator(
  {
    [screenNames.HOME]: Home,
  },
  {
    headerLayoutPreset: 'center',
    defaultNavigationOptions: { header: null },
  },
);

export { NavigationService, screenNames };

export default createAppContainer(
  createSwitchNavigator({
    [screenNames.AUTH_LOADING]: AuthLoading,
    [screenNames.AUTH]: AuthStack,
    [screenNames.APP]: AppStack,
  }),
);
