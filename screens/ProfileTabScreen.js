import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme as usePaperTheme } from 'react-native-paper';
import {useTheme as useNavTheme} from '@react-navigation/native';

import Home from './HomeScreen.js';
import DetailScreen from './DetailScreen.js';
import ProfileScreen from './Profile.js';
import AboutScreen from './About.js';
import Account from './Account.js';
import Profile from './Profile.js';
import { HomeStackScreen, DetailsStackScreen, ProfileStackScreen, AboutStackScreen, AccountStackScreen } from './MainTabScreen.js';

const Tab = createMaterialBottomTabNavigator();

function HomeBarColor () {
const PaperTheme = usePaperTheme();
return PaperTheme.dark ? "#000000" : "#009387";
}

function DetailsBarColor(){
const PaperTheme = usePaperTheme();
return PaperTheme.dark ? "#000000" : "#FF7F50";
}

function ProfileBarColor(){
const PaperTheme = usePaperTheme();
return PaperTheme.dark ? "#000000" : "#6495ED";
}

function AboutBarColor(){
const PaperTheme = usePaperTheme();
return PaperTheme.dark ? "#000000" : "#2451cb";
}

function AccountBarColor(){
const PaperTheme = usePaperTheme();
return PaperTheme.dark ? "#000000" : "#24cb29";
}

function inactiveIconColor(){
const PaperTheme = usePaperTheme();
return PaperTheme.dark ? "#acacac" : "#1b1b1b";
}

const MainTabScreen = () =>{
const { colors } = useNavTheme();

  return (
    <Tab.Navigator
      initialRouteName="Profile"
      activeColor="#fff"
      inactiveColor = {inactiveIconColor()}
      barStyle={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: HomeBarColor(),
          tabBarIcon: ({ color }) => (
            <Icon name="home-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Details',
          tabBarColor: DetailsBarColor(),
          tabBarIcon: ({ color }) => (
            <Icon name="scan-circle-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: ProfileBarColor(),
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
          name="About"
          component={AboutStackScreen}
          options={{
            tabBarLabel: 'About',
            tabBarColor: AboutBarColor(),
            tabBarIcon: ({ color }) => (
              <Icon name="albums-outline" color={color} size={26} />
            ),
          }}
       />
     <Tab.Screen
         name="Account"
         component={AccountStackScreen}
         options={{
           tabBarLabel: 'Account',
           tabBarColor: AccountBarColor(),
           tabBarIcon: ({ color }) => (
             <Icon name="color-filter-outline" color={color} size={26} />
           ),
         }}
      />
    </Tab.Navigator>
  );
}

export default MainTabScreen;
