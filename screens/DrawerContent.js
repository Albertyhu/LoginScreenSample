import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,

} from 'react-native-paper';

import Home from './HomeScreen.js';
import Account from './Account.js';
import Bookmark from './Bookmark.js';
import Settings from './Settings.js';
import Support from './Support.js';
import Profile from './Profile.js';
import { AuthContext } from '../components/AuthContext.js';

export function DrawerContent(props) {
const { signOut } = React.useContext(AuthContext);

return(
    <View>
        <DrawerContentScrollView {...props} >
            <View style = {styles.drawerContent}>
                <View style={styles.userInfoSection}>
                    <View style = {{flexDirection: 'row', marginTop: 15, }}>
                        <Avatar.Image
                            source={{uri: 'https://randomuser.me/api/portraits/men/11.jpg'}}
                            size={50}
                        />
                        <View>
                            <Title>John Edwards</Title>
                            <Caption>@johnedwards</Caption>
                        </View>
                    </View>
                    <View style = {styles.row}>
                        <View style = {styles.row}>
                            <Paragraph style = {styles.paragraph, styles.caption}>80</Paragraph>
                            <Caption style ={styles.caption, {marginLeft: 5}}>Following</Caption>
                        </View>
                        <View style = {[styles.row, {marginLeft: 10,}]}>
                            <Paragraph style = {styles.paragraph, styles.caption}>100</Paragraph>
                            <Caption style ={styles.caption, {marginLeft: 5}}>Followers</Caption>
                        </View>
                    </View>
                </View>
                <Drawer.Section style = {styles.drawerSection}>
                    <DrawerItem
                        icon={({color, size}) => (
                            <Icon
                                name='home-outline'
                                color={color}
                                size={size}
                            />
                        )}
                          label="Home"
                          onPress = {() => {props.navigation.navigate('Home')}}
                    />
                    <DrawerItem
                        icon={({color, size}) => (
                            <Icon
                                name='account-outline'
                                color={color}
                                size={size}
                            />
                        )}
                          label="Accounts"
                          onPress = {() => {props.navigation.navigate('Account')}}
                    />
                    <DrawerItem
                        icon={({color, size}) => (
                            <Icon
                                name='file-settings-outline'
                                color={color}
                                size={size}
                            />
                        )}
                          label="Settings"
                          onPress = {() => {props.navigation.navigate('Settings')}}
                    />
                    <DrawerItem
                        icon={({color, size}) => (
                            <Icon
                                name='bookmark-outline'
                                color={color}
                                size={size}
                            />
                        )}
                          label="Bookmarks"
                          onPress = {() => {props.navigation.navigate('Bookmark')}}
                    />
                   <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name='account-check-outline'
                                    color={color}
                                    size={size}
                                />
                            )}
                              label="Support"
                              onPress = {() => {props.navigation.navigate('Support')}}
                        />
                   <DrawerItem
                        icon={({color, size}) => (
                            <Icon
                                name='exit-to-app'
                                color={color}
                                size={size}
                            />
                        )}
                          label="Sign Out"
                          onPress = {() => {signOut()}}
                    />
                </Drawer.Section>
                <Drawer.Section title="Preferences">
                    <TouchableRipple onPress = ''>
                        <View style = {styles.preference}>
                            <Text>Dark Theme</Text>
                            <View pointerEvents='none'>
                                <Switch value = '' />
                            </View>
                        </View>
                    </TouchableRipple>
                </Drawer.Section>
            </View>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection} >

        </Drawer.Section>
    </View>
)
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });