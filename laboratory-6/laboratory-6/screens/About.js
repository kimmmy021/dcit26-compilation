import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import { globalStyles } from '../styles/global';

const About = ({navigation}) => {
  return (
  <ScrollView>
    <View style ={globalStyles.container}>
    <Text style ={globalStyles.content}>
    {'\n'} The persons listed below is the developer that made this application for laboratory exercise on the subject of Mr.Charles Mendoza which is DCIT26 - Application Development and Emerging Technology {'\n'}
    {'\n'}
    </Text>

    <Text style = {globalStyles.textHeader}>DEVELOPER</Text>
    <Image style={globalStyles.image} source ={require('../assets/Vidar/vidar.jpg')} />
    <Text style = {globalStyles.text}>Kim Aira A.Vidar </Text>
    <Text style = {globalStyles.content}>
      {'\n'} Ms.Kim Aira A. Vidar is a 20 years old and was born June 1, 2000, She lives in 132 Banaba Lejos Indang, Cavite, She was studying Bachelor of Science in Computer Science. She is the first daughter of Mrs. Josielyn A. Vidar and Mr. Edgar R. Vidar. She loves to dance on tiktok and she my day it everyday. 
    </Text>

    <Text style = {globalStyles.textHeader}>DEVELOPERS</Text>
    <Image style={globalStyles.image} source ={require('../assets/florendo/florendo.jpg')} />
    <Text style = {globalStyles.text}>Giselle I. Florendo</Text>
    <Text style = {globalStyles.content}>
      {'\n'} Ms.Giselle I. Florendo is a 21 years old and was born January 12, 2000, She lives in Blk32 Lot 21 Phase 7 Carissa Homes Tanza Cavite, She was studying Bachelor of Science in Computer Science. She the daughter of Mrs. Glenda Florendo and Mr. Melchor Florendo. She loves to sing and dance at the same time. 
    </Text>

    <Text style = {globalStyles.textHeader}>DEVELOPERS</Text>
    <Image style={globalStyles.image} source ={require('../assets/Vidallon/Vidallon.jpg')} />
    <Text style = {globalStyles.text}>Niño Jerome L. Vidallon</Text>
    <Text style = {globalStyles.content}>
      {'\n'} Mr. Niño Jerome L. Vidallon is a 21 years old and was born at a very young age, He lives in 164 Sta.Rita Road Kaybagal Central Tagaytay City, Cavite. He was studying Bachelor of Science in Computer Science. He is the first Son of Mrs. Johanna L. Vidallon and Mr. Modesto M. Vidallon. He loves to play basketball and computer games.
      </Text>
      </View>
      </ScrollView>
  );
};

export default About;


 

