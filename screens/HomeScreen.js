import React from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import LoginScreen from './LoginScreen.js';
import { getUsers } from '../api/mock.js';
import {createDrawerNavigator, openDrawer, closeDrawer } from '@react-navigation/drawer';

export default function HomeScreen () {
const theme = useTheme();
const {colors} = useTheme()
return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style = {{color: colors.text}}>HomeScreen</Text>
  </View>

);

}

/*
const Home = () =>{
const Navigation = useNavigation();
return(
    <View style = {homeStyle.container} >
        <Button title = 'Login' onPress = {() =>{Navigation.push('LoginScreen')}} />
    </View>
)
}

export default Home;
*/
const homeStyle = StyleSheet.create({
container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
},
})