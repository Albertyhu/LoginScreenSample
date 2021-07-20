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

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const AboutStack = createStackNavigator();
const AccountStack = createStackNavigator();


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
      initialRouteName="Home"
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

export const HomeStackScreen = ({navigation}) =>{
return(
 <HomeStack.Navigator screenOptions = {{
    headerStyle: {
        backgroundColor: HomeBarColor(),
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    }
 }}>
        <HomeStack.Screen name = "Home" component ={Home} options= {{headerLeft: () => (
        <Icon.Button name='ios-menu' size = {25} backgroundColor= {HomeBarColor()} onPress = {() => navigation.openDrawer()} />)}}/>
    </HomeStack.Navigator>
)
}

export const DetailsStackScreen = ({navigation}) =>{
return(
<DetailStack.Navigator screenOptions = {{
    headerStyle: {
            backgroundColor: DetailsBarColor(),
        },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    }
}}>
    <DetailStack.Screen name = "Details" component = {DetailScreen} options = {{title: "Details",
    headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor={DetailsBarColor()} onPress = {() => navigation.openDrawer()} />)
    }}/>
</DetailStack.Navigator>
)
}

export const ProfileStackScreen = ({navigation}) =>{
return(
<ProfileStack.Navigator screenOptions = {{
    headerStyle: {
     backgroundColor: ProfileBarColor(),
        },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    }
}}>
    <ProfileStack.Screen name = 'Profile' component = {ProfileScreen}
    options = {{headerLeft: () => (<Icon.Button name= 'ios-menu' size = {25} backgroundColor={ProfileBarColor()} onPress = {() => navigation.openDrawer()} />)}} />
</ProfileStack.Navigator>
)
}

export const AboutStackScreen = ({navigation}) =>{
return(
<AboutStack.Navigator screenOptions = {{
    headerStyle:{
        backgroundColor: AboutBarColor(),
    },
    headerTintColor: '#fff',
    headerTitleStyle:{
        fontWeight: 'bold',
    },
}}>
    <AboutStack.Screen name = 'About Us' component = {AboutScreen} options = {{
       headerLeft: () => (<Icon.Button name = 'ios-menu' size = {25} backgroundColor = {AboutBarColor()} onPress = {() => (navigation.openDrawer())} />)
    }}/>
</AboutStack.Navigator>
)
}

export const AccountStackScreen = ({navigation}) =>{
return(
<AccountStack.Navigator screenOptions = {{
    headerStyle:{
        backgroundColor: AccountBarColor(),
    },
    headerTintColor: '#fff',
    headerTitleStyle:{
        fontWeight: 'bold',
    },
}}>
    <AccountStack.Screen name = 'Account' component = {Account} options = {{
       headerLeft: () => (<Icon.Button name = 'ios-menu' size = {25} backgroundColor = {AccountBarColor()} onPress = {() => (navigation.openDrawer())} />)
    }}/>
</AccountStack.Navigator>
)
}
