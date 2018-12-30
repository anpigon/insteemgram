import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Platform
    } from 'react-native';

import { Icon } from 'native-base';
import { createTabNavigator, createBottomTabNavigator, createNavigationContainer } from 'react-navigation';

// import HomeTab from './AppTabNavigator/HomeTab';
// import SearchTab from './AppTabNavigator/SearchTab';
// import AddMediaTab from './AppTabNavigator/AddMediaTab';
// import LikesTab from './AppTabNavigator/LikesTab';
// import ProfileTab from './AppTabNavigator/ProfileTab';

import { 
  HomeTab,
  SearchTab,
  AddMediaTab,
  LikesTab,
  ProfileTab
} from './AppTabNavigator';

class MainScreen extends Component{

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <AppTabContainer />
        );
    }
}
export default MainScreen;

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
        screen: ProfileTab
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

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})