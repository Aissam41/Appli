import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MyForm = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [showPassword, setShowPassword] = useState(false); // État pour afficher/masquer le mot de passe

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
      <TextInput
        style={[styles.input, { backgroundColor: '#F5F5F5', borderRadius: 10 }]}
        placeholder="Entrez votre email"
        value={email}
        onChangeText={handleEmailChange}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, { backgroundColor: '#F5F5F5', borderRadius: 10 }]}
          placeholder="Entrez votre code"
          secureTextEntry={!showPassword} // Utilisez secureTextEntry avec l'état showPassword
          value={code}
          onChangeText={handleCodeChange}
        />

        {/* Bouton pour afficher/masquer le mot de passe */}
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.eyeIcon}
        >
          <Icon name={showPassword ? 'eye-slash' : 'eye'} size={30} color="black" />
        </TouchableOpacity>

      </View>
      <TouchableOpacity style={styles.Button}
        onPress={() => { navigation.navigate('Home', { id: code }) }}
      >
        <Text style={{ color: '#fff', textAlign: 'center', fontSize: 18 }}>Se connecter</Text>
      </TouchableOpacity>
      <View style={styles.MoPass}>
        <TouchableOpacity onPress={() => { navigation.navigate('Forget') }}>
          <Text style={{ color: '#3326CB' }}>Mot de passe oublié ?{'\n'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    

  },
  Button:{
    padding: 5,
     width: '100%',
     height:40,
     fontSize:30,
     backgroundColor: '#141f1f',
     borderRadius :10,
  },
  MoPass:{
    padding: 5,
    width: '100%',

  },
  input: {
    marginBottom: 10,
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  passwordContainer: {
    position: 'relative', // Position relative pour aligner l'icône avec le champ de saisie
    width: '100%',

  },
  
  eyeIcon: {
    position: 'absolute',
    top: '35%',
    right: 10,
    transform: [{ translateY: -10 }], // Ajustement vertical pour aligner l'icône avec le champ de saisie
  },
});


export default MyForm;