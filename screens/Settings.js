import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import MainTabScreen from './MainTabScreen.js';
import Home from './HomeScreen.js';
import Account from './Account.js';
import Bookmark from './Bookmark.js';
import Support from './Support.js';
import Profile from './Profile.js';

const Settings = () => {
return(
<View style = {styles.container} >
    <Text>Settings</Text>
</View>
)
}

export default Settings;

const styles = StyleSheet.create({
container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
})