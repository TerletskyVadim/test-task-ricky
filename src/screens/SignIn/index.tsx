import React, { Component } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { GoogleSigninButton } from 'react-native-google-signin';

// Actions
import { signIn } from './actions';

// Styles
import styles from './styles';

interface IProps {
  signIn: () => void;
}

export class SignIn extends Component<IProps> {
  render() {
    const { signIn: signInGoogle } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Welcome to the Test App!</Text>
        </View>

        <View style={styles.buttonContainer}>
          <GoogleSigninButton
            style={styles.button}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Light}
            onPress={signInGoogle}
          />
        </View>
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
)(SignIn);
