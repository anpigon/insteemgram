import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainScreen from './src/components/MainScreen';

// Redux 적용하기
// import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from './store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigationContainer />
      </Provider>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Main:{
    screen: MainScreen
  }
});

const AppNavigationContainer = createAppContainer(AppStackNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});