import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View, useState } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {AuthContext} from './components/AuthContext.js';
import {createDrawerNavigator, openDrawer, toggleDrawer } from '@react-navigation/drawer';
import { DrawerContent } from './screens/DrawerContent';

import Home from './screens/HomeScreen.js';
import LoginScreen from './screens/LoginScreen.js';
import CreateAccountScreen from './screens/CreateAccountScreen.js';
import MainTabScreen from './screens/MainTabScreen.js';
import Support from './screens/Support.js';
import Account from './screens/Account.js';
import Bookmark from './screens/Bookmark.js';
import Settings from './screens/Settings.js';
import Profile from './screens/Profile.js';
import AccountTabScreen from './screens/AccountTabScreen.js';
import BookmarkTabScreen from './screens/BookmarksTabScreen.js';
import SupportTabScreen from './screens/SupportTabScreen.js';
import SettingsTabScreen from './screens/SettingsTabScreen.js';
import ProfileTabScreen from './screens/ProfileTabScreen.js';

const Drawer = createDrawerNavigator();

export default function App() {
    const [isLoading, setIsLoading ] = React.useState(true);
    const [userToken , setUserToken ] = React.useState(null);
    const authContext = React.useMemo(() =>({
        signIn:() =>{
            setUserToken('sdfs');
            setIsLoading(false);
        },
        signOut: () =>{
            setUserToken(null);
            setIsLoading(false);
        },
        signUp: () => {
            setUserToken('sdfs');
            setIsLoading(false);
        },
    }));

//simulates the loading screen
    useEffect(() =>{
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

  return (
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} /> }>
  {/*   the name of the home screen can no longer be home or else the home link on the drawer doesn't work*/}
            <Drawer.Screen name = "HomeDrawer" component ={MainTabScreen} />
            <Drawer.Screen name = "Support" component ={SupportTabScreen} />
            <Drawer.Screen name = "Settings" component ={SettingsTabScreen} />
            <Drawer.Screen name = "Account" component ={AccountTabScreen} />
            <Drawer.Screen name = "Profile" component ={ProfileTabScreen} />
            <Drawer.Screen name = "Bookmark" component ={BookmarkTabScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
