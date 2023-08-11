import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountScreen from './AccountScreen';
import ProfileScreen from '../Profile/ProfileScreen';
// import DrawerNavigation from '../Profile/DrawerNavigation'
import ForgotPasswordScreen from '../ForgetPass/Forget'
const Stack = createNativeStackNavigator();


const AuthNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Account"
          component={AccountScreen}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
          headerShown: false, // Masquer l'en-tête complet de l'écran "Profile"
      
          }} />
        
        <Stack.Screen
          name="Forget"
          component={ForgotPasswordScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigation;
