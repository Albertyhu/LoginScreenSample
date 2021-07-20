import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator, openDrawer } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import MainTabScreen from './MainTabScreen.js';
import Home from './HomeScreen.js';
import Account from './Account.js';
import Bookmark from './Bookmark.js';
import Support from './Support.js';
import Profile from './Profile.js';

import AccountTabScreen from './AccountTabScreen.js';
import BookmarkTabScreen from './BookmarksTabScreen.js';
import SupportTabScreen from './SupportTabScreen.js';
import SettingsTabScreen from './SettingsTabScreen.js';
import ProfileTabScreen from './ProfileTabScreen.js';
import RootStackScreen from './RootStackScreen.js';

import { DrawerContent } from './DrawerContent.js';

const Drawer = createDrawerNavigator();

const Settings = () => {
return(
  <Drawer.Navigator drawerContent={props => <DrawerContent {...props} /> }>
     <Drawer.Screen name = "Settings" component ={Settings} />
     <Drawer.Screen name = "HomeDrawer" component ={MainTabScreen} />
     <Drawer.Screen name = "Support" component ={SupportTabScreen} />
     <Drawer.Screen name = "Account" component ={AccountTabScreen} />
     <Drawer.Screen name = "Profile" component ={ProfileTabScreen} />
     <Drawer.Screen name = "Bookmark" component ={BookmarkTabScreen} />
  </Drawer.Navigator>
)
}

export default Settings;