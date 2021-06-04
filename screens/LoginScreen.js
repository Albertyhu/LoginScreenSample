import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput, useContext } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Home from './HomeScreen.js';
import CreateAccountScreen from './CreateAccountScreen.js';
import { login } from '../api/mock';
import { AuthContext } from '../components/AuthContext.js';

const Login = ({navigation}) =>{
const [errorMess, setErrorMess] = useState('')
const loginUser = () => {
setErrorMess('');
    login('test@test.ca', 'password')
      .then(() => {
        navigation.navigate('Home');
      })
      .catch((err) => setErrorMess(err.message));
  };

const [username, setUsername ] = useState('')
const [password, setPass ] = useState('')

//this line is in the tutorial. I don't know what it's for.
//const signIn = React.useContext(AuthContext);

const handleUsername = username =>{
    setUsername(username);
}

const handlePassword = password =>{
    setPass(password);
}

return(
    <View style = {loginStyle.container}>
        <Text>{password}</Text>
        <TextInput
            placeholder = 'Username'
            value = {username}
            onChangeText = {handleUsername}
            style = {loginStyle.textBar}
        />
        <TextInput
            placeholder = 'Password'
            value = {password}
            onChangeText = {handlePassword}
            style = {loginStyle.textBar}
        />

        <Button title = "Login" onPress = {loginUser} />
        <Button title = 'Home Screen' onPress = {() =>{navigation.navigate('Home')}} />
        <Button title = 'Create an Account' onPress = {() =>{navigation.navigate('CreateAccountScreen')}} />
        {errorMess ? <Text>{errorMess}</Text> : null}
    </View>
)
}

export default Login;
const loginStyle = StyleSheet.create({
container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
},
textBar:{
    marginBottom: 10,

},
})