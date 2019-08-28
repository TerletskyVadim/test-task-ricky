import React, { Component } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import { GoogleSignin } from 'react-native-google-signin';
import { NavigationScreenProps } from 'react-navigation';

// Navigation
import { screenNames } from '../../navigation';

// Actions
import { signIn } from '../SignIn/actions';

// Styles
import styles from './styles';

interface IProps {
  signIn: () => void;
}

class AuthLoadingScreen extends Component<IProps & NavigationScreenProps> {
  componentDidMount() {
    this.bootstrapAsync();
  }

  bootstrapAsync = async () => {
    const { navigation, signIn: userSignIn } = this.props;

    const isUserSignedIn = await GoogleSignin.isSignedIn();

    if (isUserSignedIn) {
      userSignIn();
    } else {
      navigation.navigate(screenNames.SIGN_IN);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      signIn,
    },
    dispatch,
  );

export default connect(
  null,
  mapDispatchToProps,
)(AuthLoadingScreen);
