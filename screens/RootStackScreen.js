import React from 'react';
import { View, Text, Dimensions, StyleSheet, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

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
import SignInScreen from './SignInScreen.js';
import SignUp from './SignUpScreen.js';
import SplashScreen from './SplashScreen.js';

const rootStackNavigator = createStackNavigator();

const RootStackScreen = () => {
return(
<rootStackNavigator.Navigator>
    <rootStackNavigator.Screen name = 'SignInScreen' component = {SignInScreen} options = {{title: 'Sign In', headerShown: false}}/>
    <rootStackNavigator.Screen name = 'SignUpScreen' component = {SignUp} options = {{title: 'Sign Up'}}/>
    <rootStackNavigator.Screen name = 'SplashScreen' component = {SplashScreen} options={{title: 'Loading'}}/>
</rootStackNavigator.Navigator>
)
}

export default RootStackScreen;

