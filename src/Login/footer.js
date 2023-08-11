import React,{useState}  from 'react';
import { View, Text, StyleSheet} from 'react-native';
const Footer = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Ceci est le footer dee l'application</Text>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f0f0f0',
      padding: 10,
      alignItems: 'center',
      height : 100
    },
    text: {
      fontSize: 16,
    },
  });
  export default Footer;
    