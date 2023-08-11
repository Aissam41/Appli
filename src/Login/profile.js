import React from 'react';
import { View, Text,Image, StyleSheet } from 'react-native';
  const MyProfile = () => {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../Assets/my-profile-icon.png')} // Spécifiez le chemin de l'image depuis votre projet
          style={{ width: 200, height: 200 }}/>
        
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      marginTop: 50,
      marginLeft : '25%'
    },
  });
  
  export default MyProfile;
  