import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';
import { MaterialIcons, MaterialCommunityIcons, EvilIcons, Ionicons, AntDesign } from "@expo/vector-icons";

class CardCompnent extends Component{
    render(){
        const images = {
            '1': require('../../assets/react_native.jpg'),
            '2': require('../../assets/python.jpg'),
            '3': require('../../assets/deep_learning.png')
        }

        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../../assets/1.jpg')} />
                        <Body>
                            <Text>anpigon</Text>
                            <Text note>2018년 5월 22일</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem>
                    {/* <Image source={require('../assets/react_native.jpg')} style={{height:200, width:null, flex:1}}/> */}
                    <Image source={images[this.props.imageSource]} style={{height:200, width:null, flex:1}}/>
                </CardItem>
                <CardItem style={{height:45}}>
                    <Left>
                        <Button transparent>
                            <Icon name='ios-heart' style={{color:'black'}}/>
                            {/* <AntDesign name="hearto" size={30}/> */}
                        </Button>
                        <Button transparent>
                            <Icon name='ios-chatbubbles' style={{color:'black'}}/>
                            {/* <AntDesign name="message1" size={30}/> */}
                        </Button>
                        <Button transparent>
                            <Icon name='ios-send' style={{color:'black'}}/>
                            {/* <AntDesign name="export" size={30}/> */}
                        </Button>
                    </Left>
                </CardItem>
                <CardItem style={{ height:40 }}>
                    {/* <Text>좋아요 101개</Text> */}
                    <Text>좋아요 {this.props.likes}개</Text>
                </CardItem>
                <CardItem>
                    <Text>
                        <Text style={{fontWeight:'900'}}>anpigon </Text>
                        #인스타그램 #따라하기 #리액트네이티브</Text>
                </CardItem>
            </Card>
        );
    }
}
export default CardCompnent;

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})