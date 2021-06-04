import React from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginScreen from './LoginScreen.js';
import { getUsers } from '../api/mock.js';
import {createDrawerNavigator, openDrawer, closeDrawer } from '@react-navigation/drawer';

export default class HomeScreen extends React.Component {
  state = { users: [], hasLoadedUsers: false, userLoadingErrorMessage: '' };

  loadUsers() {
    this.setState({ hasLoadedUsers: false, userLoadingErrorMessage: '' });
    getUsers()
      .then((res) =>
        this.setState({
          hasLoadedUsers: true,
          users: res.users,
        }),
      )
      .catch(this.handleUserLoadingError);
  }

  handleUserLoadingError = (res) => {
    if (res.error === 401) {
      this.props.navigation.navigate('LoginScreen');
    } else {
      this.setState({
        hasLoadedUsers: false,
        userLoadingErrorMessage: res.message,
      });
    }
  }

  componentDidMount() {
    this.loadUsers();
  }

  render() {
    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>HomeScreen</Text>
        {this.state.users.map((user) => (
          <Text key={user.email}>{user.email}</Text>
        ))}
        <Button title = 'Sign In' onPress = {() => this.props.navigation.navigate('Sign In')} />
        <Button title = 'Menu' onPress = {() => {this.props.navigation.openDrawer()}} />
      </View>

    );
  }
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