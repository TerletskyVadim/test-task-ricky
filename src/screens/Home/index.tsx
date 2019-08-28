import React, { Component } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity } from 'react-native';

// Actions
import { signOut } from './actions';
import { signIn } from '../SignIn/actions';

// Interfaces
import { IAppState } from '../../store/reducers';

// Styles
import styles from './styles';

interface IProps {
  userInfo: { name: string };
  signOut: () => void;
  signIn: () => void;
}

export class Home extends Component<IProps> {
  componentDidMount() {
    const { signIn: userSignIn } = this.props;

    userSignIn();
  }

  render() {
    const {
      userInfo: { name },
      signOut: userSignOut,
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.textWrapper}>
          <Text style={styles.userNameText}>User:</Text>
          <Text style={styles.userNameText}>{name}</Text>
        </View>

        <View style={styles.logOutButtonWrapper}>
          <TouchableOpacity style={styles.logOutButton} onPress={userSignOut}>
            <Text style={styles.logOutText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: IAppState) => ({
  userInfo: state.home.userInfo,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ signOut, signIn }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
