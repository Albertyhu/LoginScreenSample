import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, useState, TouchableOpacity, ImageBackground, ScrollView, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated, { withSpring, useSharedValue, useAnimatedGesture, useAnimatedStyle } from 'react-native-reanimated';
import { useTheme as useNavTheme } from '@react-navigation/native';
import { useTheme as usePaperTheme } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import {PanGestureHandler, TapGestureHandler } from 'react-native-gesture-handler';

const EditProfile = () =>{
const [image, setImage] = React.useState('https://toppng.com/uploads/preview/cool-avatar-transparent-image-cool-boy-avatar-11562893383qsirclznyw.png')
const [data, setData] = React.useState({
    firstName: 'John',
    lastName: 'Doe',
    email: '',
    phone: '',
    country: '',
})

const { colors } = useNavTheme();
const PaperTheme = usePaperTheme();

const handleFirst = val =>{
    setData({
    ...data,
    firstName: val})
}

const handleLast = val =>{
    setData({
    ...data,
    lastName: val})
}
const handlePhone = val =>{
    setData({
    ...data,
    phone: val})
}
const handleEmail = val =>{
     setData({
     ...data,
     email: val})
 }
 const handleCountry = val =>{
     setData({
     ...data,
     country: val})
 }

const renderContent = () =>{
return(
<View style = {styles.bottomSheetBody}>
<Text style = {styles.bottomSheetTitle}>Upload Photo</Text>
{/* Take Photo Button */}
<TouchableOpacity  onPress = {() => alert(bs.value)} style = {{ alignItems: 'center !important',}}>
<LinearGradient
    colors = {colors.editButtonGradient}
    style = {styles.button}
    >
        <Text
            style = {{color: colors.editButtonText,
             fontSize: 25,
             paddingTop: 10,
             paddingBottom: 10,
             alignItems: 'center',
             }}
        >Take Photo</Text>
</LinearGradient>
</TouchableOpacity>

{/* Choose Photo from library*/}
<TouchableOpacity  onPress = {() => bs.current.snapTo(1)} style = {{ alignItems: 'center !important',}}>
<LinearGradient
    colors = {colors.editButtonGradient}
    style = {styles.button}
    >
        <Text
            style = {{color: colors.editButtonText,
             fontSize: 25,
             paddingTop: 10,
             paddingBottom: 10,
             alignItems: 'center',
             }}
        >Choose Photo From Library</Text>
</LinearGradient>
</TouchableOpacity>

{/*Cancel Button*/}
<TouchableOpacity  onPress = {() => bs.current.snapTo(1)} style = {{ alignItems: 'center !important',}}>
<LinearGradient
    colors = {colors.editButtonGradient}
    style = {[styles.button, {marginBottom: 50,}]}
    >
        <Text
            style = {{color: colors.editButtonText,
             fontSize: 25,
             paddingTop: 10,
             paddingBottom: 10,
             alignItems: 'center',
             }}
        >Cancel</Text>
</LinearGradient>
</TouchableOpacity>
</View>
)
}

const renderHeader = () =>{
return(
<View style = {styles.header}>
<View style = {styles.panelHeader}>
    <View style = {styles.panelHandler} />
</View>
</View>
)
}

const bs = React.createRef(null);
const fall = useSharedValue(0);
const pressed = useSharedValue(false);

{/*
//need to find a way to retrieve value of snap points for following code to work;
const bodyOpacity = useAnimatedStyle(()=>{
    return{
        opacity: withSpring();
    };
})
*/}

return(
<SafeAreaView style = {[styles.container, {backgroundColor: PaperTheme.dark ? '#000' : '#fff' }]}>

{/*the value of initial snap refers to the index of the snapPoints array [200, 0]
Thus, setting initialSnap to 1 means to set it at snapPoint value 0.
*/}
<BottomSheet
ref = {bs}
renderContent = {renderContent}
renderHeader = {renderHeader}
snapPoints = {['50%', 0]}
initialSnap = {1}
callbackNode = {fall.value}
borderRadius = {10}
style = {styles.bottomSheet}
enabledGestureInteraction =  {true}
/>
<Animated.View style={{margin: 20,
   opacity: Animated.add(0.1, Animated.multiply(1.0, 1.0)),
   }}>
<View style = {{alignItems: 'center'}}>
    <TouchableOpacity
        onPress = {() => bs.current.snapTo(0)}
        >
        <View style = {{
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 25,
            height: 200,
            width: 200,
            marginTop: 20,
        }}>
        <ImageBackground
        source = {{uri: image}}
        style = {styles.imageStyle}
        imageStyle = {{borderRadius: 15,}}
        >
            <View style = {{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Icon name = 'camera' size = {75}  color = "#fff" style = {{opacity: 0.75,}}/>
            </View>
        </ImageBackground>
        </View>
    </TouchableOpacity>
</View>

<View style = {styles.titleCont}>
    <Text style = {[styles.fullname, {color: colors.text}]}>{data.firstName} {data.lastName}</Text>
</View>
    <View style = {styles.action}>
        <FontAwesome
            size = {25}
            name = 'user-o'
            style = {styles.fontAwesomeIcon}

        />
        <TextInput
            placeholder = "First Name"
            value = {data.firstName}
            onChangeText = {handleFirst}
            style = {styles.textInput}
        />
    </View>
    <View style = {styles.action}>
        <FontAwesome
            size = {25}
            name = 'user-o'
            style = {styles.fontAwesomeIcon}
        />
          <TextInput
                placeholder = "Last Name"
                value = {data.lastName}
                onChangeText = {handleLast}
                style = {styles.textInput}
            />
      </View>
      <View style = {styles.action}>
        <FontAwesome
            size = {25}
            name = 'phone'
            style = {styles.fontAwesomeIcon}
        />
            <TextInput
                placeholder = "Phone number"
                value = {data.phone}
                onChangeText = {handlePhone}
                style = {styles.textInput}
                keyboardType= 'numeric'
            />
       </View>
       <View style = {styles.action}>
           <FontAwesome
               size = {25}
               name = 'envelope'
            style = {styles.fontAwesomeIcon}
           />
            <TextInput
                placeholder = "Email"
                value = {data.email}
                onChangeText = {handleEmail}
                style = {styles.textInput}
                keyboardType = 'email-address'
            />
        </View>
        <View style = {styles.action}>
            <FontAwesome
                size = {25}
                name = 'map'
            style = {styles.fontAwesomeIcon}
            />
            <TextInput
                placeholder = "Country"
                value = {data.country}
                onChangeText = {handleCountry}
                style = {styles.textInput}
            />
         </View>

         <View  style = {{alignItems: 'center'}}>
         <TouchableOpacity style = {{
            borderRadius: 10,
            alignItems: 'center',

            margin: 10,
         }}>
            <LinearGradient colors = {colors.editButtonGradient}
            style = {{borderRadius: 10,

            }}
            >
                <View>
                    <Text
                    style = {{color: colors.editButtonText,
                    fontSize: 25,
                     alignItems: 'center',
                     paddingTop: 10,
                     paddingBottom: 10,
                     paddingLeft: 25,
                     paddingRight: 25,
                     }}>Save Edits</Text>
                </View>
             </LinearGradient>
         </TouchableOpacity>
        </View>
</Animated.View>
</SafeAreaView>
)
}

export default EditProfile;

const styles = StyleSheet.create({
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    backgroundColor: '#ffffff',
    marginLeft: 50,
    marginRight: 50,
  },
 bottomSheet:{
    flex: 1,
 },
bottomSheetBody:{
   flex: 1,
   alignItems: 'center',
   backgroundColor: '#fff',
   height: '50%',

},
bottomSheetTitle:{
    fontSize: 50,
    marginTop: 20,
    marginBottom: 20,
},
button:{
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    width: 350,
    color: '#fff',
    marginVertical: 7
},
commandButton: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center',
},
container: {
    flex: 1,
    bottom: 0,

},

header:{
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: '#ffffff',
    shadowOffset: {width: -1, height: -3},
    shadowOpacity: .5,
    shadowColor: '#333333',
    shadowRadius: 2,
    elevation: 5,
},
fontAwesomeIcon:{
    padding: 15,
},
panelHeader:{
    alignItems: 'center',
},
panelHandler:{
    backgroundColor: "#000040",
    width: 40,
    height: 8,
    borderRadius: 5,
    marginBottom: 15,
    marginTop: 15,
},
titleCont:{
    alignItems: 'center',
},
fullname:{
    fontWeight: 'bold',
    fontSize: 50,
    alignItems: 'center',
},

imageStyle:{
    width: 200,
    height: 200,
},

textInput:{
    padding: 5,
    flex: 1,
    borderWidth: 1,
    borderColor: '#cfcfcf',
},

})
