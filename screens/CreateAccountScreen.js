import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Home from './HomeScreen.js';
import LoginScreen from './LoginScreen.js';


const CreateAccount = ({ navigation }) =>{
    const createUser = () => {

    };
    const [ data, setData ] = React.useState({
        username: '',
        password: '',
    });
return(
    <View style = {CRStyle.container}>
        <Text style = {{fontSize: 20,}}>Create an Account </Text>
        <TextInput
            placeholder = "Username"
            onChangeText = ''
            value = ''
            style = {CRStyle.input}
        />
        <Button title = 'Create User' onPress = {createUser} />
        <Button title = 'Home Screen' onPress = {() =>{navigation.navigate('Home')}} />
        <Button title = 'Login' onPress = {() =>{navigation.navigate('LoginScreen')}} />
    </View>
)
}

export default CreateAccount;

const CRStyle = StyleSheet.create({
container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
},
input:{
    textAlign: 'center',
    color: 'blue',
    padding: 5,
},
})