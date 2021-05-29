import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationDrawerStructure from './Drawer';
import ProfileSettings from '../screens/Developer';



const Stack = createStackNavigator();



function MessagesStack ({navigation}) {
  return (
    
      <Stack.Navigator>
          <Stack.Screen name="PROFILE SETTING" component={ProfileSettings} options={{ 
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation}/>

          ),
          headerStyle: { backgroundColor: 'black'},
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
          
          }}/>         
         
      </Stack.Navigator>
    
  );
}

export default MessagesStack;

