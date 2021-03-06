import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Platform,
    AsyncStorage
    } from 'react-native';

import { Icon } from 'native-base';
import { createTabNavigator, createBottomTabNavigator, createNavigationContainer, createAppContainer } from 'react-navigation';

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
  HomeTab:{ screen: HomeTab },
  Search:{ screen: SearchTab },
  AddMedia:{ screen: AddMediaTab },
  Likes:{ screen: LikesTab },
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
const AppTabContainer = createNavigationContainer(AppTabNavigator);

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

  async init() {
    const { getAccountAsync } = this.props.actions;
    // global properties 조회

    // 피드 조회

    // user_id 로 사용자 정보 조회
    const userId = (await AsyncStorage.getItem('user_id')) || 'anpigon';
    if( userId ) {
      // 사용자 정보 조회
      await getAccountAsync(userId);

      // 블로그 조회
    } else {
      // 최신 글 조회 
    }
  }

  componentWillMount() {
    // console.log('componentWillMount');
    this.init();
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