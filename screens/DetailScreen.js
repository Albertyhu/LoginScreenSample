import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

const Detail = () => {
const { colors } = useTheme();

return(
<View style = {styles.container}>
    <Text style = {{color: colors.text}}>Details</Text>
</View>
)
}

export default Detail;

const styles = StyleSheet.create({
container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
},
})