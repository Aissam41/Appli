
import React,{useState} from 'react';
import {View} from 'react-native';
import MyProfile from './profile'
import MyForm from './input'
import Footer from './footer'

const Account = () => {
  return (
    <View style={{ flex: 1 }} >
        <MyProfile />
        <MyForm />
        <Footer />
    </View>
  );
}



export default Account;
