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

const Drawer = createDrawerNavigator();

const Settings = () => {
return(
    <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} /> } >
            <Drawer.Screen name = "HomeDrawer" component ={MainTabScreen} />
            <Drawer.Screen name = "Support" component ={Support} />
            <Drawer.Screen name = "Account" component ={Account} />
            <Drawer.Screen name = "Profile" component ={Profile} />
            <Drawer.Screen name = "Bookmark" component ={Bookmark} />
        </Drawer.Navigator>
    </NavigationContainer>
)
}

export default Settings;