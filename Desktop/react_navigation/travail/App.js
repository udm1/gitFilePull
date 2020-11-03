
import React from 'react';
import Feed from './feed';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialButtonTabNavigator} from '@react-navigation/material-botton-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Screen1 from './screens/screen1';
import Screen2 from './screens/screen2';
import Screen3 from './screens/'

import {NavigationContainer} from '@react-navigation/native';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialButtonTabNavigator = createMaterialButtonTabNavigator();
const createMaterialTopTabNavigator = createMaterialTopTabNavigator();

export default class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home"/>
          <Drawer.Screen name="Login"/>
          <Drawer.Screen name="Module"/>
          <Drawer.Screen name="Faculte"/>
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}
  //return (
   // <MyNavi/>
    
 // );
//}
