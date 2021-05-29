import React, {useState} from 'react';
import{
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  ScrollView
} from 'react-native';

export default function App() {
 const[enterText,setEnterText] = useState('');
 const [userInput, setUserInput] = useState([]);
 
 const goalInputHandler = (enteredText) => {
  setEnterText(enteredText);
 };
 const addGoalHandler = () => {
   setUserInput(currentInput => [...currentInput, enterText]);
  setEnterText('');
  };
  return (
   <ScrollView>
    <View style={styles.mon}>
     <View style={styles.container}>
      <TextInput 
     placeholder="Enter user Input" style={styles.holder} 
     onChangeText={goalInputHandler}
     value={enterText}
     />
      <Button title="ADD" onPress={addGoalHandler} />
     </View>
     <View>
        {userInput.map((goal) => (
           <View style={styles.listItem}>
           <Text key={goal}>{goal}</Text>
           </View>
        ))}
       </View>
    </View>
   </ScrollView>
  )
}

const styles = StyleSheet.create({
 mon: {
  padding: 40
 },
 container: {
  flexDirection: 'row', 
  justifyContent: 'space-between', 
  alignItems: 'center',
  marginLeft: 10
 },
 holder: {
  width: '80%',
  borderColor: 'black', 
  borderWidth: 1,
  padding: 10
 },
 listItem: {
  backgroundColor: 'yellow', 
  padding: 10,
  marginVertical: 10,
  marginTop: 5,
  borderColor: 'black',
  borderWidth: 1
 }
});
