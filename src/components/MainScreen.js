import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Platform,
    AsyncStorage
    } from 'react-native';

import { Icon } from 'native-base';
import { createTabNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../store/modules/steem';

import { 
  HomeTab,
  SearchTab,
  AddMediaTab,
  LikesTab,
  ProfileTab
} from './AppTabNavigator';

const AppTabNavigator = createBottomTabNavigator({
  HomeTab:{
    screen: HomeTab
  },
  Search:{
    screen: SearchTab
  },
  AddMedia:{
    screen: AddMediaTab
  },
  Likes:{
    screen: LikesTab
  },
  Profile:{
    screen: ProfileTab,
    // screen: (props) => <ProfileTab { ...props } />,
    // screen: ({ navigation, screenProps }) => <ProfileTab screenProps={{ rootNavigation: navigation, ...screenProps }} />,
  }
}, {
  animationEnabled: true,
  swipeEnabled: true,
  tabBarPosition: "bottom",
  tabBarOptions: {
    style: {
      ...Platform.select({
        android:{
          backgroundColor:'white'
        }
      })
    },
    activeTintColor: '#000',
    inactiveTintColor: '#d1cece',
    showLabel: false,
    showIcon: true,
  }
});
const AppTabContainer = createAppContainer(AppTabNavigator);

class MainScreen extends Component{

  static navigationOptions = {
    header: null
  }

  // async _getUserId() {
  //   try {
  //     return await AsyncStorage.getItem('user_id');
  //   } catch (error) {
  //     console.log('error', error);
  //   }
  //   return '';
  // }

  componentWillMount() {
    // console.log('componentWillMount');
    // user_id 로 사용자 정보 조회
    AsyncStorage.getItem('user_id')
      .then(value => {
        // console.log('id', r || 'anpigon')
        const userId = value || 'anpigon';
        this.props.actions.getAccount(userId);
      })
      .catch(err => console.log(err));
  }

  render() {
    // console.log('MainScreen', this.props);
    return (
      <AppTabContainer />
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

// export default MainScreen;
export default connect(
    (state) => ({
      ...state
    }), 
    (dispatch) => ({
        actions: bindActionCreators(actions, dispatch)
    })
  )(MainScreen);