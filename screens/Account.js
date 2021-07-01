import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

const Account = () => {
const { colors } = useTheme();

return(
<View style = {styles.container}>
    <Text style = {{color: colors.text}}>Account</Text>
</View>
)
}

export default Account;

const styles = StyleSheet.create({
container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
},
})