import React from 'react';
import { StyleSheet, Text, View, Platform, TouchableHighlight } from 'react-native';

import { TabNavigator } from 'react-navigation';
import { Icon } from 'native-base';


import HomeTab      from './AppTabNavigator/HomeTab';
import SearchTab    from './AppTabNavigator/SearchTab';
import AddMediaTab  from './AppTabNavigator/AddMediaTab';
import LikesTab     from './AppTabNavigator/LikesTab';
import ProfileTab   from './AppTabNavigator/ProfileTab';

import Camera from './Camera';
import DirectMessage from './DirectMessage';

import { Navigation } from 'react-native-navigation';

export default class MainScreen extends React.Component {

  static navigationOptions = {

    headerLeft: <TouchableHighlight onPress={()=>alert("Unable to Add Navigation for Camera")}><Icon name="ios-camera-outline" style={{paddingLeft:10}}/></TouchableHighlight>,

    title:"Instagram",
    headerTitleStyle :{textAlign: 'center',alignSelf:'center'},

    headerRight: <TouchableHighlight onPress={()=>alert("Unable to Add Navigation for DirectMessage")}><Icon name="ios-send-outline" style={{paddingRight:10}}/></TouchableHighlight>,

  }

  render() {
    return (

      <AppTabNavigator/>

    );
  }
}

const AppTabNavigator = TabNavigator({

  HomeTab:{
    screen: HomeTab
  },
  SearchTab:{
    screen: SearchTab
  },
  AddMediaTab:{
    screen: AddMediaTab
  },
  LikesTab:{
    screen: LikesTab
  },
  ProfileTab:{
    screen: ProfileTab
  }

},{
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
      style:{
        ...Platform.select({
          android:{
            backgroundColor:'white'
          }
        })
      },
      activeTintColor: "#000",
      inactiveTintColor: "#d1cece",
      showLabel: false,
      showIcon: true
    }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
