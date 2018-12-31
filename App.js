import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainScreen from './src/components/MainScreen';

export default class App extends React.Component {
  render() {
    return (
      <AppNavigationContainer />
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