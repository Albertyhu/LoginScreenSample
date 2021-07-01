import React, {useState, useEffect}  from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, StatusBar } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {LinearGradient} from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Home from './HomeScreen.js';
import SignUpScreen from './SignUpScreen.js';
import {AuthContext} from '../components/AuthContext.js';
import User from '../model/users.js';

const SignIn = ({navigation}) => {

const [data, setData] = React.useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    emailIsValid: false,
})

const Row = props =>{
return(
<View style = {{bottomMargin: 10,}}>
    <Text>{props.username}</Text>
    <Text>{props.email}</Text>
    <Text>{props.password}</Text>
    <Text>{'\n'}</Text>
</View>
)
}

const { signIn } = React.useContext(AuthContext);

const handleEmail = val =>{
setData({
...data,
email: val,
})
}

const handlePass = val =>{
setData({
...data,
password: val,
check_textInputChange: false,
})
}

const handleLogin = () =>{
if(data.email !== 0 && data.password !== 0){
    let token;
    const foundUser = User.filter(item => {
        return ((item.username === data.email || item.email === data.email) && item.password === data.password)
    })
    if(foundUser.length === 0){
        alert('Error: Username, email or password is incorrect.')
        return;
    }
    signIn(foundUser);
}
else if (data.login.length === 0 && data.password.length !== 0){
    alert("Error: Username field must not be empty")
}
else if (data.login.length !== 0 && data.password.length === 0){
    alert("Error: Password field must not be empty.");
}
else if(data.login.length === 0 && data.password.length === 0){
    alert("Error: Username and password fields cannot by empty.")
}
}

const ToggleSecureTextEntry = () =>{
setData({
...data,
secureTextEntry: !data.secureTextEntry,
})}

useEffect(() => {
//First, determine if user's email is following the proper format.
    const emailArr = data.email.split('@');
    if(emailArr.length === 2){
        const emailArr2 = emailArr[1].split('.');
        if(emailArr2.length === 2 && emailArr2[1]) {
            setData({
                ...data,
                emailIsValid: true,
            })
        }
        else{
            setData({
                ...data,
                emailIsValid: false,
            })
        }
    }
    else{
            setData({
                ...data,
                emailIsValid: false,
            })
    }
}, [data.email]);

return(
<View style = {styles.container}>
    <StatusBar backgroundColor = '#009387' barStyle = 'light-content'/>
<View style = {styles.header}>
    <Text style = {styles.text_header}>Welcome</Text>
</View>
<View style = {styles.footer}>
    <View style={styles.action}>
         <Text style = {styles.text_footer}>Email or Username</Text>
          <View style = {{flexDirection: 'row'}}>
                  <FontAwesome
                      name='at'
                      color = '#05375a'
                      size={20}
                  />
                 <TextInput
                      onChangeText = {handleEmail}
                      value = {data.email}
                      style = {styles.textInput}
                      autoCapitalize = 'none'
                  />
                {data.emailIsValid ?
                      <Animatable.View
                          animation = 'bounceIn'
                          delay = {1000}
                       >
                      <Feather
                          name = 'check-circle'
                          color= 'grey'
                          size={20}
                      />
                      </Animatable.View>
                      :
                      <Animatable.View
                          animation = 'bounceIn'
                          delay = {1000}
                       >
                      <Feather
                          name = 'check-circle'
                          color= '#E6E6E6'
                          size={20}
                      />
                      </Animatable.View>
                }
              </View>
         </View>
         <View style={styles.action}>
         <Text style = {styles.text_footer}>Password</Text>
          <View style = {{flexDirection: 'row'}}>
                  <FontAwesome
                      name='lock'
                      color = '#05375a'
                      size={20}
                  />
                <TextInput
                    onChangeText = {handlePass}
                    secureTextEntry = {data.secureTextEntry}
                    value = {data.password}
                    style = {styles.textInput}
                />
                {data.secureTextEntry ?
                  <Animatable.View
                    animation = 'bounceIn'
                    delay = {1500}
                    >
                  <Feather
                      name = 'eye-off'
                      color= 'grey'
                      size={20}
                      onPress = {ToggleSecureTextEntry}
                  />
                  </Animatable.View>
                  :
                    <Animatable.View
                      animation = 'bounceIn'
                      delay = {2000}
                      >
                    <Feather
                        name = 'eye'
                        color= 'grey'
                        size={20}
                        onPress = {ToggleSecureTextEntry}
                    />
                    </Animatable.View>
                  }
             </View>
            </View>
           <View style = {{flex: 1}}>
              <TouchableOpacity
                style = {{flex: 1,paddingHorizontal: 30, paddingVertical: 20}}
                onPress = {handleLogin}>
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                <Text style = {styles.textSign}>Sign In</Text>
                <MaterialIcons
                    name = 'navigate-next'
                    color = '#fff'
                    size = {20}
                />
               </LinearGradient>
              </TouchableOpacity>
              <View style = {{flex: 1, alignItems: 'center'}}>
                <Text style = {{fontWeight: 'bold',}}>- Don't have an account? - </Text>
              </View>
              <TouchableOpacity style = {styles.signIn,
                  {flex: 1,
                  paddingHorizontal: 30,
                  paddingVertical: 10,
                  }} onPress = {
              () => navigation.navigate('SignUpScreen')}>
                   <View style = {{
                        width: '150',
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 50,
                        flexDirection: 'row',
                        borderColor: '#009387',
                        borderWidth: 1,
                      }}>
                        <Text style = {{
                        fontSize: 12,
                        fontWeight: 'bold',
                        color: '#009387',
                        }}>Sign Up</Text>
                        <MaterialIcons
                            name = 'navigate-next'
                            color = '#009387'
                            size = {20}
                        />
                     </View>
              </TouchableOpacity>
             </View>
    </View>

</View>
)
}

export default SignIn;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
        marginTop: 10,
    },
    action: {
        /*flexDirection: 'row',*/
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: 0,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '150',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
    },
    textSign: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#fff'
    }
  });