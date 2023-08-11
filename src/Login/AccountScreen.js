
import React from 'react';
<<<<<<< HEAD
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Account from './account';
=======
import { View, Text, Button , StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MyForm from './form';
>>>>>>> eb75c95 (login)

const AccountScreen = () => {
  const navigation = useNavigation();

  return (
<<<<<<< HEAD
    <View style={{ flex: 1}}>
      <Account/>
    </View>
  );
};
=======
    <View style={styles.container}>
      <MyForm/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
 
});

>>>>>>> eb75c95 (login)

export default AccountScreen;
