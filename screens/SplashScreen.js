import React from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Image, TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import { useNavigation, useTheme } from '@react-navigation/native';
import SignInScreen from './SignInScreen.js';

const SplashScreen = ({navigation}) =>{
const {colors} = useTheme();

return(
    <View style={[styles.container, {backgroundColor: colors.SignInBackground}]}>
        <View style = {styles.header}>
            <Animatable.Image
            animation = 'bounceInDown'
            source = {require ('../assets/logo.png')}
            style={styles.logo}
            resizeMode="stretch"
            />
        </View>
        <Animatable.View
            style = {styles.footer}
            animation='fadeInUpBig'
        >
            <Text style = {[styles.title, {paddingBottom: 5,}]}>Welcome</Text>
            <Text style = {{paddingBottom: 5,}}>Stay connected with everyone!</Text>
            <Text style = {{paddingBottom: 5,}}>Sign into your account</Text>
            <TouchableOpacity style = {{flex: 1,}} onPress = {() => navigation.navigate('SignInScreen')}>
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                <Text style = {styles.textSign}>Get Started</Text>
                <MaterialIcons
                    name = 'navigate-next'
                    color = '#fff'
                    size = {20}
                />
                </LinearGradient>
            </TouchableOpacity>
        </Animatable.View>
    </View>
);
}

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30,
      justifyContent: 'center',
      alignItems: 'center',
  },
  logo: {
      width: height_logo,
      height: height_logo,
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});