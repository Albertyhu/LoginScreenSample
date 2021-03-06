import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useMemo} from 'react';
import { StyleSheet, Text, View, useState, ActivityIndicator } from 'react-native';
import { NavigationContainer, useNavigation, DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
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
import AccountTabScreen from './screens/AccountTabScreen.js';
import BookmarkTabScreen from './screens/BookmarksTabScreen.js';
import SupportTabScreen from './screens/SupportTabScreen.js';
import SettingsTabScreen from './screens/SettingsTabScreen.js';
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
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors:{
        ...NavigationDefaultTheme.colors,
        ...PaperDefaultTheme.colors,
        background: '#ffffff',
        text: '#333333'
    },
}

const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors:{
        ...NavigationDarkTheme.colors,
        ...PaperDarkTheme.colors,
        background: '#333333',
        text: '#ffffff',
    }
}

const [ theme, setTheme ] = React.useState(true);
const CurrentTheme = theme ? CustomDefaultTheme : CustomDarkTheme;

const initialLoginState = {
isLoading: true,
userName: null,
userToken: null,
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
signIn: async (username, password) => {
   // setUserToken('asdf');
    //setIsLoading(false);
    let userToken;
    //userName = null;
    if( username == 'user' && password == 'pass' ){
        userToken = 'asdf';
    }
    else
        userToken = null;

    try{
        await AsyncStorage.setItem('userToken', userToken)
    } catch (e){
        alert(e)
    }
    dispatch ({type: 'LOGIN', id: username, token: userToken, });
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
}

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
                     <Drawer.Screen name = "Support" component ={SupportTabScreen} />
                     <Drawer.Screen name = "Settings" component ={SettingsTabScreen} />
                     <Drawer.Screen name = "Account" component ={AccountTabScreen} />
                     <Drawer.Screen name = "Profile" component ={ProfileTabScreen} />
                     <Drawer.Screen name = "Bookmark" component ={BookmarkTabScreen} />
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