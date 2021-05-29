import React from 'react';
import {View, Text, ScrollView, Image, Button, Modal, StyleSheet} from 'react-native';

const SampleModal = props => {
  return (
     <Modal visible={props.visible}> 
    <View style={styles.containers}>       
    <Image style = {styles.picture} source={{uri:'https://cvsuresearchjournal.webs.com/logo%20web.png'}} />
      <ScrollView>
      <Text style={styles.text}>
      Mandate{'\n\n'}
Section 2 of Republic Act No. 8468 “An Act Converting the Don Severino Agricultural College in the Municipality of Indang, Province of Cavite into a State University, to be Known as the Cavite State University” states that,{'\n\n'}

“The University shall primarily provide advance instruction and professional training in agriculture, science and technology, education and other related fields, undertake research and extension services, and provide progressive leadership in these areas.”{'\n\n'}

Vision{'\n\n'}
The premier university in historic Cavite recognized for excellence in the development of globally competitive and morally upright individuals{'\n\n'}
Mission
Cavite State University shall provide excellent, equitable and relevant educational opportunities in the arts, sciences and technology through quality instruction and responsive research and development activities. It shall produce professional, skilled and morally upright individuals for global competitiveness. {'\n\n'}
Core Values{'\n\n'}
Truth            Excellence          Service{'\n\n'}
Quality Policy{'\n\n'}
We Commit to the highest standards of education, value our stakeholders, Strive for continual improvement of our products and services, and Uphold the University’s tenets of Truth, Excellence, and Service to produce globally competitive and morally upright individuals.{'\n\n'}
      </Text>
      </ScrollView>
    </View>
    
  <View style={styles.close}>
   <Button title  = "Close" onPress={props.onClose}/>
     </View>
    </Modal> 
    
  );
}

const styles= StyleSheet.create({
  containers: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow'
  },
  text: {
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20
  },
  picture:{
    width: 100,
    height: 100,
  },
  close: {
    paddingLeft: 100,
    paddingRight: 100,
  }
});

export default SampleModal;