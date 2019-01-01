import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    ScrollView
    } from 'react-native';
import { Icon, Container, Content, Thumbnail, Header, Left, Right, Body } from 'native-base';
import { FontAwesome, SimpleLineIcons, Ionicons } from "@expo/vector-icons";

import CardComponent from '../CardComponent';

class HomeTab extends Component{

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='ios-home' style={{color:tintColor}} />
        )
    }

    render(){
        return (
            <Container style = {style.container}>
                <Header>
                    <Left>
                        <Icon name='ios-camera' style={{paddingLeft:10}}/>
                        {/* <Ionicons name='ios-camera' size={30} style={{paddingLeft:10}}/> */}
                        {/* <SimpleLineIcons name='camera' size={20} style={{paddingLeft:10}}/> */}
                    </Left>
                    <Body><Text style={{fontWeight:'900'}}>Insteemgram</Text></Body>
                    <Right>
                        <Icon name='ios-send' style={{paddingRight:10}}/>
                        {/* <Ionicons name='ios-send' size={30} style={{paddingRight:10}}/> */}
                        {/* <SimpleLineIcons name='paper-plane' size={20} style={{paddingLeft:10}}/> */}
                    </Right>
                </Header>
                <Content>
                    <View style={{height:100}}>
                        <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:7}}>
                            <Text style={{fontWeight:'bold'}}>스토리</Text>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Icon name='md-play' style={{fontSize:14}}/>
                                <Text style={{fontWeight:'bold'}}>모두 보기</Text>
                            </View>
                        </View>
                        <View style={{flex:3}}>
                            <ScrollView 
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{
                                    alignItems:'center',
                                    paddingStart:5,
                                    paddingEnd:5
                                }}
                            >
                                <Thumbnail style={{marginHorizontal:5, borderColor:'red', borderWidth:2}} source={{uri: 'https://steemitimages.com/100x100/https://cdn.steemitimages.com/DQmQmWhMN6zNrLmKJRKhvSScEgWZmpb8zCeE2Gray1krbv6/BC054B6E-6F73-46D0-88E4-C88EB8167037.jpeg'}}/>
                                <Thumbnail style={{marginHorizontal:5, borderColor:'red', borderWidth:2}} source={{uri: 'https://steemitimages.com/100x100/https://cdn.steemitimages.com/DQmQmWhMN6zNrLmKJRKhvSScEgWZmpb8zCeE2Gray1krbv6/BC054B6E-6F73-46D0-88E4-C88EB8167037.jpeg'}}/>
                                <Thumbnail style={{marginHorizontal:5, borderColor:'red', borderWidth:2}} source={{uri: 'https://steemitimages.com/100x100/https://cdn.steemitimages.com/DQmQmWhMN6zNrLmKJRKhvSScEgWZmpb8zCeE2Gray1krbv6/BC054B6E-6F73-46D0-88E4-C88EB8167037.jpeg'}}/>
                                <Thumbnail style={{marginHorizontal:5, borderColor:'red', borderWidth:2}} source={{uri: 'https://steemitimages.com/100x100/https://cdn.steemitimages.com/DQmQmWhMN6zNrLmKJRKhvSScEgWZmpb8zCeE2Gray1krbv6/BC054B6E-6F73-46D0-88E4-C88EB8167037.jpeg'}}/>
                                <Thumbnail style={{marginHorizontal:5, borderColor:'red', borderWidth:2}} source={{uri: 'https://steemitimages.com/100x100/https://cdn.steemitimages.com/DQmQmWhMN6zNrLmKJRKhvSScEgWZmpb8zCeE2Gray1krbv6/BC054B6E-6F73-46D0-88E4-C88EB8167037.jpeg'}}/>
                                <Thumbnail style={{marginHorizontal:5, borderColor:'red', borderWidth:2}} source={{uri: 'https://steemitimages.com/100x100/https://cdn.steemitimages.com/DQmQmWhMN6zNrLmKJRKhvSScEgWZmpb8zCeE2Gray1krbv6/BC054B6E-6F73-46D0-88E4-C88EB8167037.jpeg'}}/>
                                <Thumbnail style={{marginHorizontal:5, borderColor:'red', borderWidth:2}} source={{uri: 'https://steemitimages.com/100x100/https://cdn.steemitimages.com/DQmQmWhMN6zNrLmKJRKhvSScEgWZmpb8zCeE2Gray1krbv6/BC054B6E-6F73-46D0-88E4-C88EB8167037.jpeg'}}/>
                                <Thumbnail style={{marginHorizontal:5, borderColor:'red', borderWidth:2}} source={{uri: 'https://steemitimages.com/100x100/https://cdn.steemitimages.com/DQmQmWhMN6zNrLmKJRKhvSScEgWZmpb8zCeE2Gray1krbv6/BC054B6E-6F73-46D0-88E4-C88EB8167037.jpeg'}}/>
                                
                            </ScrollView>
                        </View>
                    </View>
                    <CardComponent imageSource='1' likes='2324'/>
                    <CardComponent imageSource='2' likes='46'/>
                    <CardComponent imageSource='3' likes='208'/>
                </Content>
            </Container>
        );
    }
}
export default HomeTab;

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})