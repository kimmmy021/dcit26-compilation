import React from "react";
import { View, Button, StyleSheet } from "react-native";

const Profile = ({navigation}) => {
  return (
      <View style={styles.container}>
        <Button title="About" onPress={() => navigation.navigate('About')} />
      </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});