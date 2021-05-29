import React from 'react';
import {StyleSheet} from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'grey'
    },
    imageSize: {
          height: 350,
          width: 350,
          paddingBottom: 10,
          alignItems: 'center',
          },
    buttonStyle: {
          marginTop: 100,
    },
    textStyle: {
        fontWeight: 'underline', 
        fontSize: 100,
        alignItems: 'center',
    }
});