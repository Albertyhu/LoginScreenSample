import React, {useState, useEffect }  from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, StatusBar} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {LinearGradient} from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Home from './HomeScreen.js';
import SignInScreen from './SignInScreen.js';

const SignUp = ({navigation}) => {

const [isValid, changeValidity] = useState(false);

const [data, setData] = React.useState({
    email: '',
    password: '',
    passwordClone: '',
    validPassEntry: false,
    check_textInputChange: false,
    secureTextEntry: true,
    passDoesNotMatch: true,
})

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

const handlePassConfirmation = val =>{
setData({
...data,
passwordClone: val,
})

}

const ToggleSecureTextEntry = () =>{
setData({
...data,
secureTextEntry: !data.secureTextEntry,
})}

const validate = () =>{
const emailArr = emailInput.split('@');
if(emailArr.length < 2)
    changeValidity(false);
else
    changeValidity(true);
}

//Suggestion: Write two useEffect hooks, one each for validating username and validating password, instead of combining both into one
useEffect(() =>{
    if(data.passwordClone !== ''){
        if(data.password === data.passwordClone){
            setData({
                ...data,
                validPassEntry: true,
                passDoesNotMatch: false,
            })
        }
        else{
            setData({
                ...data,
                validPassEntry: false,
                passDoesNotMatch: true,
            })
        }
        }
    else{
    setData({
            ...data,
            passDoesNotMatch: false,
        })
    }
    //Validates email
    const emailArr = data.email.split('@');

    if(emailArr.length === 2 && emailArr[1]){
        const periodCheck = emailArr[1].split('.')
        if(periodCheck.length === 2 && periodCheck[1] )
            changeValidity(true);
        else
            changeValidity(false);
        }
    else
        changeValidity(false);

    }, [data.password, data.passwordClone, data.email]
)

return(
<View style = {styles.container}>
    <StatusBar backgroundColor = '#009387' barStyle = 'light-content'/>
<View style = {styles.header}>
    <Text style = {styles.text_header}>Welcome</Text>
</View>
<View style = {styles.footer}>
<ScrollView>
    <View style={styles.action}>
         {data.passDoesNotMatch &&
            <Text style = {styles.passwordWarning}>Warning: The passwords you typed do not match</Text>
         }
         <Text style = {styles.text_footer}>Email</Text>
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
                  { isValid ?
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
            <View style={styles.action}>
             <Text style = {styles.text_footer}>Confirm Password</Text>
              <View style = {{flexDirection: 'row'}}>
                      <FontAwesome
                          name='lock'
                          color = '#05375a'
                          size={20}
                      />
                    <TextInput
                        onChangeText = {handlePassConfirmation}
                        secureTextEntry = {data.secureTextEntry}
                        value = {data.passwordClone}
                        style = {styles.textInput}
                    />
                    { !data.passDoesNotMatch ?
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

           <View style = {{flex: 1}}>
              <TouchableOpacity style = {{flex: 1,paddingHorizontal: 30, paddingTop: 10}} onPress = {() => navigation.navigate('Home')} >
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                <Text style = {styles.textSign}>Submit</Text>
                <MaterialIcons
                    name = 'navigate-next'
                    color = '#fff'
                    size = {20}
                />
               </LinearGradient>
              </TouchableOpacity>
              <View style = {{
              alignItems: 'center',
              }}>
                <Text style = {{fontSize: 14, fontWeight: 'bold'}}> - OR -</Text>
              </View>
              <TouchableOpacity style = {styles.signIn,
                  {flex: 1,
                  paddingHorizontal: 30,
                  paddingVertical: 10,
                  }} onPress = {
              () => navigation.navigate('SignInScreen')}>
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
                        }}>Sign In</Text>
                        <MaterialIcons
                            name = 'navigate-next'
                            color = '#009387'
                            size = {20}
                        />
                     </View>
              </TouchableOpacity>
             </View>
     </ScrollView>
    </View>
</View>
)
}

export default SignUp;


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
    },
    passwordWarning: {
        color: 'red',
        fontSize: 12,
    },

  });