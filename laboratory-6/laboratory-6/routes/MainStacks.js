import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesome, MaterialIcons, Feather } from '@expo/vector-icons'; 
import {View, Image, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';


import HomeStack from './HomeStack';
import AboutStack from './AboutStacks';
import ProfileStack from './ProfileStacks';



const Drawer = createDrawerNavigator();


const MainNavigator = () => {
  
  return (
    
    <NavigationContainer>
     
      <Drawer.Navigator>
        <Drawer.Screen name = "HOME" component = {HomeStack} 
        options={{drawerIcon: config =>        
          <FontAwesome name = "home" size= {30} color="black"> 
          </FontAwesome>   }}/> 
        
        <Drawer.Screen name = "PROFILE SETTING"  component={ProfileStack} 
        options={{drawerIcon: config =>        
             <MaterialIcons name="person" size={30} color="black" > </MaterialIcons>        
         }} />      
        <Drawer.Screen name = "ABOUT"  component={AboutStack} 
        options={{drawerIcon: config =>        
             <FontAwesome name = "table" size= {30} color="black"> </FontAwesome>        
         }} /> 
       
      </Drawer.Navigator>
    </NavigationContainer>  

  

  );
  
}

export default MainNavigator;
