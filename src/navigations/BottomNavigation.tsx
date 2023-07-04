/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {Component} from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../blocks/home/Home';
import Todo from '../blocks/todo/Todo';
import {homeImg, todoImg} from '../config';
const Tab = createBottomTabNavigator();
export class BottomNavigation extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={homeImg}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: focused ? '#CDE7BE' : '#EAF4F4',
                }}
              />
            ),
            tabBarActiveBackgroundColor: '#181A1A',
            tabBarInactiveBackgroundColor: '#181A1A',
            tabBarActiveTintColor: '#CDE7BE',
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={todoImg}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: focused ? '#CDE7BE' : '#EAF4F4',
                }}
              />
            ),
            tabBarActiveBackgroundColor: '#181A1A',
            tabBarInactiveBackgroundColor: '#181A1A',
            tabBarActiveTintColor: '#CDE7BE',
          }}
          name="Todo"
          component={Todo}
        />
      </Tab.Navigator>
    );
  }
}

export default BottomNavigation;
