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
import EditProfile from './EditProfileScreen.js';
import EditProfileTwo from './EditProfileScreen2.js';
import BottomSheetSample from './BottomSheetSample.js';
import AnimatedSample from './AnimatedGestureHandlerSample.js';

const rootStackNavigator = createStackNavigator();

const RootStackScreen = () => {
return(
<rootStackNavigator.Navigator>
    {/*<rootStackNavigator.Screen  name = 'AnimatedSample' component = {AnimatedSample} options = {{title: 'Sign Up', headerShown: false}} />*/}
    {/*<rootStackNavigator.Screen name = 'BottomSheetSample' component = {BottomSheetSample} options = {{title: 'Sign Up', headerShown: false}}/>*/}
        <rootStackNavigator.Screen name = "EditProfileTwo" component = {EditProfileTwo} options = {{title: 'Sign Up', headerShown: false}}/>
   <rootStackNavigator.Screen name = 'EditProfile' component = {EditProfile}  options = {{title: 'Sign Up', headerShown: false}}/>

    <rootStackNavigator.Screen name = 'SignUpScreen' component = {SignUp} options = {{title: 'Sign Up', headerShown: false}}/>
    <rootStackNavigator.Screen name = 'SplashScreen' component = {SplashScreen} options={{title: 'Loading', headerShown: false,}}/>
    <rootStackNavigator.Screen name = 'SignInScreen' component = {SignInScreen} options = {{title: 'Sign In', headerShown: false}}/>

</rootStackNavigator.Navigator>
)
}

export default RootStackScreen;

