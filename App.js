import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useMemo} from 'react';
import { StyleSheet, Text, View, useState, ActivityIndicator } from 'react-native';
import { NavigationContainer, useNavigation, DefaultTheme as NavDefaultTheme, DarkTheme as NavDarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator, openDrawer, toggleDrawer } from '@react-navigation/drawer';
import { DrawerContent } from './screens/DrawerContent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DefaultTheme as PaperDefaultTheme, DarkTheme as PaperDarkTheme, Provider as PaperProvider } from 'react-native-paper';

import Home from './screens/HomeScreen.js';
import LoginScreen from './screens/LoginScreen.js';
import CreateAccountScreen from './screens/CreateAccountScreen.js';
import MainTabScreen from './screens/MainTabScreen.js';
import Support from './screens/Support.js';
import Account from './screens/Account.js';
import Bookmark from './screens/Bookmark.js';
import Settings from './screens/Settings.js';
import Profile from './screens/Profile.js';
import DetailsTabScreen from './screens/DetailsTabScreen.js';
import AboutTabScreen from './screens/AboutTabScreen.js';
import AccountTabScreen from './screens/AccountTabScreen.js';
import ProfileTabScreen from './screens/ProfileTabScreen.js';
import RootStackScreen from './screens/RootStackScreen.js';
import { AuthContext } from './components/AuthContext.js';
import SettingsDrawer from './screens/SettingsDrawer.js';
import User from './model/users.js';

const Drawer = createDrawerNavigator();

//note: the order in which the functions and hooks appear matters. Otherwise you will get errors like "too many renderings"
export default function App() {
//const [ isLoading, setIsLoading] = React.useState(true);
//const [ userToken, setUserToken ] = React.useState(null);

const CustomDefaultTheme = {
    ...NavDefaultTheme,
    ...PaperDefaultTheme,
    colors:{
        ...NavDefaultTheme.colors,
        ...PaperDefaultTheme.colors,
        background: '#FFFFFF',
        text: '#333333',
    },
}

const CustomDarkTheme = {
    ...NavDarkTheme,
    ...PaperDarkTheme,
    colors:{
        ...NavDarkTheme.colors,
        ...PaperDarkTheme.colors,
        background: '#333333',
        text: '#ffffff',
        bar: '#000000',
    },
}

const [ theme, setTheme ] = React.useState(true);

const CurrentTheme = theme? CustomDefaultTheme : CustomDarkTheme;

const initialLoginState = {
isLoading: true,
userName: null,
userToken: null,
password: '',
}

//reducer
const loginReducer = (prevState, action) =>{
    switch(action.type){
        case 'RETRIEVE_TOKEN':
            return{
                ...prevState,
                userToken: action.token,
                isLoading: false,
            };
        case 'LOGIN':
            return{
                ...prevState,
                userName: action.id,
                userToken: action.token,
                isLoading: false,
                password: action.pass,
            };
        case 'LOGOUT':
            return{
                ...prevState,
                userName: null,
                userToken: null,
                isLoading: false,
            };
        case 'REGISTER':
            return{
            ...prevState,
            userName: action.id,
            userToken: action.token,
            isLoading: false,
            };
    }
}

const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

//any line that is commented out in this block of code means that it once had a purpose, but is now obsolete
const authContext = React.useMemo(() =>({
signIn: async (foundUser) => {

    let userToken = foundUser.userToken;
    try{
        await AsyncStorage.setItem('userToken', userToken)
    } catch (e){
        alert(e)
    }
    dispatch ({type: 'LOGIN', id: foundUser.username, token: userToken, pass: foundUser.password });
},
signOut: async () =>{
//    setUserToken(null);
//    setIsLoading(false);
    try{
        AsyncStorage.removeItem('userToken');
    } catch (e){
        alert(e);
    }

    dispatch ({type: 'LOGOUT', })
},
signUp: () =>{
//    setUserToken('asdf');
    setIsLoading(false);
},
toggleTheme: ()=>{
    setTheme(theme => !theme)
},

}),[]);
//you put the empty array in the end of useMemo so this whole block of code doesn't have to run everytime

useEffect(() => {
    setTimeout(async() => {
       // setIsLoading(false);
       let userToken;
       userToken = null;
       try{
        userToken = await AsyncStorage.getItem('userToken');
       } catch(e){
        alert(e);
       }
       dispatch({ type: 'RETRIEVE_TOKEN', token: userToken, });
    }, 1000)
}, []);

if(loginState.isLoading){
return(
    <View style = {{ justifyContent: 'center', paddingTop: 150, }}>
        <ActivityIndicator size = 'large' />
    </View>
)
}

  return (
 <PaperProvider theme = {CurrentTheme}>
     <AuthContext.Provider value = {authContext}>
          <NavigationContainer theme = {CurrentTheme}>
              {loginState.userToken !== null ?
                  <Drawer.Navigator drawerContent={props => <DrawerContent {...props} /> }>
                     <Drawer.Screen name = "HomeDrawer" component ={MainTabScreen} />
                     <Drawer.Screen name = "Details" component ={DetailsTabScreen} />
                     <Drawer.Screen name = "Profile" component ={ProfileTabScreen} />
                     <Drawer.Screen name = "About" component ={AboutTabScreen} />
                     <Drawer.Screen name = "Account" component ={AccountTabScreen} />
                  </Drawer.Navigator>
                  :
                  <RootStackScreen />
               }
          </NavigationContainer>
    </AuthContext.Provider>
</PaperProvider>
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

/*

//this does not work
const SettingsStack = createStackNavigator();

const SettingsStackScreen = ({navigation}) => {
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
*/