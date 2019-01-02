import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions
  } from 'react-native';
import { Icon, Container, Content, Header, Left, Body, Right, Button } from 'native-base';
import CardCompnent from '../CardComponent';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../store/modules/steem';

var images=[
  require('../../../assets/1.jpg'),
  require('../../../assets/2.jpg'),
  require('../../../assets/3.jpg'),
  require('../../../assets/4.jpg'),
  require('../../../assets/5.jpg'),
  require('../../../assets/6.jpeg'),
  require('../../../assets/7.jpg'),
  require('../../../assets/1.jpg'),
  require('../../../assets/deep_learning.png'),
  require('../../../assets/python.jpg')
]

var {width,height} = Dimensions.get('window')
class ProfileTab extends Component{
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name='person' style={{color:tintColor}} />
    )
  }
  constructor(props){
    super(props)

    this.state = {
      activeIndex: 0
    };
  }

  segmentClicked=(index)=>{
    this.setState({
      activeIndex: index
    });
  }

  renderSectionOne = () => {
    return images.map((image,index) => {
      return (
        <View key={index} style={[{width:(width)/3}, {height:(width)/3}, index % 3 !== 0 ? {paddingLeft:2}:{paddingLeft:0},{marginBottom:2}]}>
          <Image 
            style={{flex:1, width:undefined, height:undefined}}
            source = {image}
          />
        </View>
      )
    })
  }

  renderSection = () =>{
    if (this.state.activeIndex == 0){
      return(
        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
          {this.renderSectionOne()}
        </View>
      )
    }
    else if(this.state.activeIndex == 1){
      return(
        <View>
          <CardCompnent imageSource='1' likes='100'/>
          <CardCompnent imageSource='2' likes='36'/>
          <CardCompnent imageSource='3' likes='240'/>
        </View>
      )
    }
  } 
    
  render(){
    // console.log('ProfileTab', this.props) 
    // const { steem: { account } } = this.props;
    const account = this.props.account;
    // console.log('account:', account);
    const name = account.name;
    const { profile } = account.json_metadata;
    console.log('profile:', profile);

    return (
      <Container style={{flex:1, backgroundColor:'white'}}>
        <Header>
          <Left style={{flexDirection:'row', alignItems:'center'}}>
            {/* 멀티 계정 선택 가능? */}
            <Text style={{fontWeight:'bold', fontSize:17}}>anpigon</Text>
            <Icon name='caret-down' type='FontAwesome' style={{paddingLeft:10, fontSize:14}}/>
          </Left>
          <Right style={{flexDirection:'row', alignItems:'center'}}>
            <Icon name='back-in-time' type='Entypo' style={{paddingRight:10, fontSize:23}}/>
            <Icon name='user-plus' type='Feather' style={{paddingRight:10, fontSize:23}}/>
            <Icon name='dots-vertical' type='MaterialCommunityIcons' style={{fontSize:23}}/>
          </Right>
        </Header>
        <Content>
          <View style={{paddingTop:10}}>
            <View style={{flexDirection:'row'}}>
              <View style={{flex:1, alignItems:'center'}}>
                {/* 프로필 이미지 */}
                <Image 
                  source={{ url: profile.profile_image }}
                  style={{width:75, height:75, borderRadius:37.5}}/>
              </View>
              <View style={{flex:3}}>
                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                  <View style={{alignItems:'center'}}>
                    { /* TODO: 댓글을 제외한 포스팅 갯수만 체크 가능하면 좋겠음. */ }
                    <Text style={{fontSize:17, fontWeight:'bold'}}>{ account.post_count }</Text>
                    <Text style={{fontSize:12, color:'gray'}}>게시물</Text>
                  </View>
                  <View style={{alignItems:'center'}}>
                      <Text style={{fontSize:17, fontWeight:'bold'}}>346</Text>
                      <Text style={{fontSize:12, color:'gray'}}>팔로워</Text>
                  </View>
                  <View style={{alignItems:'center'}}>
                      <Text style={{fontSize:17, fontWeight:'bold'}}>192</Text>
                      <Text style={{fontSize:12, color:'gray'}}>팔로잉</Text>
                  </View>
                </View>
                <View style={{flexDirection:'row'}}>
                  <Button bordered dark
                    style={{flex:1, justifyContent:'center', height:30, marginHorizontal:10, marginTop:10}}>
                    <Text>프로필 수정</Text>
                  </Button>
                </View>
              </View>
            </View>
            <View style={{paddingHorizontal:10, paddingVertical:10}}>
              <Text style={{fontWeight:'bold'}}>{ profile.name }({ account.reputation })</Text>
              <Text>{ profile.about }</Text>
            </View>
          </View>

          {/* 하단 */}
          <View>
            <View style={{flexDirection:'row', justifyContent:'space-around', borderTopWidth:1,borderTopColor:'#eae5e5'}}>
              <Button transparent onPress={()=>this.segmentClicked(0)} active={this.state.activeIndex == 0}>
                <Icon name='ios-apps' style={[this.state.activeIndex == 0 ? {} : {color:'grey'}]}/>
              </Button>
              <Button transparent onPress={()=>this.segmentClicked(1)} active={this.state.activeIndex == 1}>
                <Icon name='ios-list' style={[this.state.activeIndex == 1 ? {} : {color:'grey'}]}/>
              </Button>
              <Button transparent onPress={()=>this.segmentClicked(2)} active={this.state.activeIndex == 2}>
                <Icon name='ios-people' style={[this.state.activeIndex == 2 ? {} : {color:'grey'}]}/>
              </Button>
              <Button transparent onPress={()=>this.segmentClicked(3)} active={this.state.activeIndex == 3}>
                <Icon name='ios-bookmark' style={[this.state.activeIndex == 3 ? {} : {color:'grey'}]}/>
              </Button>
            </View>
            <View>
                {this.renderSection()}
            </View>
          </View>
        </Content>
      </Container>
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

// export default ProfileTab;
export default connect(
  (state) => ({
    // ...state,
    account: state.steem.account,
  }), 
  (dispatch) => ({
      actions: bindActionCreators(actions, dispatch)
  })
)(ProfileTab);