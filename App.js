import React from 'react';
import { StyleSheet, Text, View,TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';

import MainScreen from './Components/MainScreen';
import Camera from './Components/Camera';

import Icon from "native-base";

import { Navigation } from 'react-native-navigation';

export default class App extends React.Component {



  render() {
    return (
      <AppStackNavigator/>
    );
  }
}

const   AppStackNavigator = StackNavigator({

  Main:{
    screen: MainScreen,
  },
  Camera:{
    screen: Camera,
    navigationOptions:{
        title:  "Camera",
    },
  },

});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
