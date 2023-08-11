import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleResetPassword = () => {
    // Ici, vous pouvez ajouter la logique pour réinitialiser le mot de passe
    console.log('Réinitialisation du mot de passe pour:', email);
  };

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mot de passe oublié</Text>
      <Text style={styles.label}>Entrez votre adresse e-mail :</Text>
      <TextInput
        style={[styles.input, { backgroundColor: '#F5F5F5', borderRadius: 10 }]}
        placeholder="Adresse e-mail"
        value={email}
        onChangeText={handleEmailChange}
      />
      <Button title="Réinitialiser le mot de passe" onPress={handleResetPassword} />
      <TouchableOpacity onPress={() => navigation.navigate('Account')}>
        <Text style={styles.link}>Retour à la connexion</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
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
  link: {
    color: '#3326CB',
    marginTop: 10,
  },
});

export default ForgotPasswordScreen;
