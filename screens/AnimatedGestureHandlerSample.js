import React from 'react';
import {View, StyleSheet, Text } from 'react-native';
import Animated, {useAnimatedGestureHandler, useSharedValue, useAnimatedStyle, withSpring} from 'react-native-reanimated';
import { TapGestureHandler } from 'react-native-gesture-handler';

const Dot = () =>{

const pressed = useSharedValue(false);

const eventHandler = useAnimatedGestureHandler({
  onStart: (event, ctx) => {
    pressed.value = true;
  },
  onEnd: (event, ctx) => {
    pressed.value = false;
  },
});

const uas = useAnimatedStyle(() => {
  return {
    backgroundColor: withSpring(pressed.value ? '#FEEF86' : '#001972'),
    transform: [{ scale: withSpring(pressed.value ? 1.5 : 1 )}],
  };
});

return(
<View style = {styles.container}>
<TapGestureHandler onGestureEvent={eventHandler}>
    <Animated.View style={[styles.ball, uas]} />
</TapGestureHandler>
</View>
);
}

export default Dot;


const styles = StyleSheet.create({

container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
},
ball:{
    width: 100,
    height: 100,
    borderRadius: 100,
},
})