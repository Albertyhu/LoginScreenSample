import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

const About = () => {
const { colors } = useTheme();

return(
<View style = {styles.container}>
    <Text style = {{color: colors.text}}>About</Text>
</View>
)
}

export default About;

const styles = StyleSheet.create({
container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
},
})