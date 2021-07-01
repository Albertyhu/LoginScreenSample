import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
    useTheme,
} from 'react-native-paper';

import Home from './HomeScreen.js';
import Account from './Account.js';
import Bookmark from './Bookmark.js';
import Settings from './Settings.js';
import Support from './Support.js';
import Profile from './Profile.js';
import Details from './DetailScreen.js';
import { AuthContext } from '../components/AuthContext.js';

export function DrawerContent(props) {
const { signOut } = React.useContext(AuthContext);
const { toggleTheme } = React.useContext(AuthContext);
const PaperTheme = useTheme();

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
                                name='scan-circle-outline'
                                color={color}
                                size={size}
                            />
                        )}
                          label="Details"
                          onPress = {() => {props.navigation.navigate('Details')}}
                    />
                    <DrawerItem
                        icon={({color, size}) => (
                            <Icon
                                name='ios-person'
                                color={color}
                                size={size}
                            />
                        )}
                          label="Profile"
                          onPress = {() => {props.navigation.navigate('Profile')}}
                          />
                    <DrawerItem
                        icon={({color, size}) => (
                            <Icon
                                name='albums-outline'
                                color={color}
                                size={size}
                            />
                        )}
                          label="About"
                          onPress = {() => {props.navigation.navigate('About')}}
                    />

                    <DrawerItem
                        icon={({color, size}) => (
                            <Icon
                                name='color-filter-outline'
                                color={color}
                                size={size}
                            />
                        )}
                          label="Accounts"
                          onPress = {() => {props.navigation.navigate('Account')}}
                    />
                </Drawer.Section>
                <Drawer.Section>
                   <DrawerItem
                        icon={({color, size}) => (
                            <Icon
                                name='exit-outline'
                                color={color}
                                size={size}
                            />
                        )}
                          label="Sign Out"
                          onPress = {() => {signOut()}}
                    />
                </Drawer.Section>
                <Drawer.Section title="Preferences">
                    <TouchableRipple onPress = {toggleTheme}>
                        <View style = {styles.preference}>
                            <Text>Dark Theme</Text>
                            <View pointerEvents='none'>
                                <Switch value = {PaperTheme.dark} />
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