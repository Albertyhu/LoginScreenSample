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
import LoginScreen from './LoginScreen.js';
import CreateAccountScreen from './CreateAccountScreen.js';
import DetailScreen from './DetailScreen.js';
import ProfileScreen from './Profile.js';
import AboutScreen from './About.js';
import Account from './Account.js';
import Bookmark from './Bookmark.js';
import Settings from './Settings.js';
import Support from './Support.js';
import Profile from './Profile.js';

const HomeStack = createStackNavigator();
const LoginStack = createStackNavigator();
const CreateAccountStack = createStackNavigator();
const DetailStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const AboutStack = createStackNavigator();
const AccountStack = createStackNavigator();
const BookmarkStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const SupportStack = createStackNavigator();


const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () =>{

const { colors } = useNavTheme();
const PaperTheme = usePaperTheme();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      barStyle={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="home-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailStackScreen}
        options={{
          tabBarLabel: 'Details',
          tabBarColor: '#FF7F50',
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
          tabBarColor: '#6495ED',
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
            tabBarColor: '#2451cb',
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
           tabBarColor: '#24cb29',
           tabBarIcon: ({ color }) => (
             <Icon name="color-filter-outline" color={color} size={26} />
           ),
         }}
      />
    </Tab.Navigator>
  );
}

export default MainTabScreen;

const HomeStackScreen = ({navigation}) =>{
return(
 <HomeStack.Navigator screenOptions = {{
    headerStyle: {
        backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    }
 }}>
        <HomeStack.Screen name = "Home" component ={Home} options= {{headerLeft: () => (
        <Icon.Button name='ios-menu' size = {25} backgroundColor='#009387' onPress = {() => navigation.openDrawer()} />)}}/>
    </HomeStack.Navigator>
)
}
const CreateAccountStackScreen = ({navigation}) =>{
return(
 <CreateAccountStack.Navigator screenOptions = {{
    headerStyle: {
        backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    }
 }}>
        <CreateAccountStack.Screen name = "Create an Account" component ={CreateAccountScreen} options={{title: "Create Account",
        headerLeft: () => (  <Icon.Button name='ios-menu' size = {25} backgroundColor='#009387' onPress = {() => navigation.openDrawer()} />)
        }} />

    </CreateAccountStack.Navigator>
)
}

const LoginStackScreen = ({navigation}) =>{
return(
 <LoginStack.Navigator screenOptions = {{
    headerStyle: {
        backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    }
 }}>
        <LoginStack.Screen name = "Sign In" component ={LoginScreen} options={{title: 'Login Screen',
        headerLeft: () =>( <Icon.Button name='ios-menu' size = {25} backgroundColor='#009387' onPress = {() => navigation.openDrawer()} />)
        }} />
    </LoginStack.Navigator>
)
}

const DetailStackScreen = ({navigation}) =>{
return(
<DetailStack.Navigator screenOptions = {{
    headerStyle: {
            backgroundColor: '#FF7F50',
        },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    }
}}>
    <DetailStack.Screen name = "Details" component = {DetailScreen} options = {{title: "Details",
    headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor='#FF7F50' onPress = {() => navigation.openDrawer()} />)
    }}/>
</DetailStack.Navigator>
)
}

const ProfileStackScreen = ({navigation}) =>{
return(
<ProfileStack.Navigator screenOptions = {{
    headerStyle: {
     backgroundColor: '#6495ED',
        },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    }
}}>
    <ProfileStack.Screen name = 'Profile' component = {ProfileScreen}
    options = {{headerLeft: () => (<Icon.Button name= 'ios-menu' size = {25} backgroundColor='#6495ED' onPress = {() => navigation.openDrawer()} />)}} />
</ProfileStack.Navigator>
)
}

const AboutStackScreen = ({navigation}) =>{
return(
<AboutStack.Navigator screenOptions = {{
    headerStyle:{
        backgroundColor: '#2451cb',
    },
    headerTintColor: '#fff',
    headerTitleStyle:{
        fontWeight: 'bold',
    },
}}>
    <AboutStack.Screen name = 'About Us' component = {AboutScreen} options = {{
       headerLeft: () => (<Icon.Button name = 'ios-menu' size = {25} backgroundColor =  '#2451cb' onPress = {() => (navigation.openDrawer())} />)
    }}/>
</AboutStack.Navigator>
)
}

const AccountStackScreen = ({navigation}) =>{
return(
<AccountStack.Navigator screenOptions = {{
    headerStyle:{
        backgroundColor: '#24cb29',
    },
    headerTintColor: '#fff',
    headerTitleStyle:{
        fontWeight: 'bold',
    },
}}>
    <AccountStack.Screen name = 'Account' component = {Account} options = {{
       headerLeft: () => (<Icon.Button name = 'ios-menu' size = {25} backgroundColor =  '#24cb29' onPress = {() => (navigation.openDrawer())} />)
    }}/>
</AccountStack.Navigator>
)
}

export const SettingsStackScreen = ({navigation}) => {
return(
<SettingsStack.navigator screenOptions = {{
    headerStyle:{
        backgroundColor: '#24cb29',
    },
    headerTintColor: '#fff',
    headerTitleStyle:{
        fontWeight: 'bold',
    },
}}>
    <SettingsStack.Screen name = "Settings" component = {Settings} options = {{
    headerLeft: () =>(<Icon.Button name = 'ios-menu' size = {25} backgroundColor = '#24cb29' onPress = {()=> navigation.openDrawer()} />)
    }} />
</SettingsStack.navigator>
)
}