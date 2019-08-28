import React, { Component } from 'react';
import { Provider } from 'react-redux';

// Store
import configureStore from './src/store';

// Navigation
import AppContainer, { NavigationService } from './src/navigation';
import { StatusBar } from 'react-native';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar barStyle="light-content" />
        <AppContainer
          ref={navigationRef => {
            NavigationService.setTopLevelNavigator(navigationRef);
          }}
        />
      </Provider>
    );
  }
}

export default App;
