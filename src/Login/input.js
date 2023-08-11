import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';

const MyForm = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
  };
  
  const handleCodeChange = (text) => {
    setCode(text);
  };

  const handleSubmit = () => {
    console.log('Email:', email);
    console.log('Code:', code);
  };
  
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email :</Text>
      <TextInput
        style={[styles.input, { backgroundColor: '#F5F5F5', borderRadius: 10 }]}
        placeholder="Entrez votre email"
        value={email}
        onChangeText={handleEmailChange}
      />
      <Text style={styles.label}>Code :</Text>
      <TextInput
        style={[styles.input, { backgroundColor: '#F5F5F5', borderRadius: 10 }]}
        placeholder="Entrez votre code"
        secureTextEntry={true}
        value={code}
        onChangeText={handleCodeChange}
      />
      <Button title="Connexion" onPress={() => { navigation.navigate('Profile', { id: code }) }} />
      
      <TouchableOpacity onPress={() => {navigation.navigate('Forget')}}>
        <Text style={{ color: '#3326CB' }}>{'\n'}Mot de passe oublié</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default MyForm;
