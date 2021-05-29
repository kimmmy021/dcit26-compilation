import React from 'react';
import {
  View, Button, Image, ImageBackground, StyleSheet, Text
} from "react-native";

function Messages  ({navigation})  {
  return (
    <ImageBackground 
    style= {{
      flex: 1,
    }} 
    source = {{uri: 'https://usabilitygeek.com/wp-content/uploads/2017/06/ux-case-study-10-bumble-settingsa.jpg' }}>
    <View style = { styles.container}>
   
    </View>
    </ImageBackground>  
  );
}

export default Messages;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
     
     
});