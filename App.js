/*
 * @Descripttion: 入口文件
 * @version: 
 * @Author: PERKER
 * @Date: 2019-06-28 11:00:58
 * @LastEditors: PERKER
 * @LastEditTime: 2019-07-10 02:40:38
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';

/* 
import { StackNavigator } from 'react-navigation';
import RouteConfig from './src/RouteConfig';
import StackNavigatorConfig from './src/StackNavigatorConfig';
const Navigator = StackNavigator(RouteConfig, StackNavigatorConfig); 
*/
export default class App extends Component {
  render() {
    return (
        <View>
          {/* <Navigator /> */}
          <Text>HELLO WORLD!</Text>
        </View>
    );
  }
}