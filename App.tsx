import React from 'react';
<<<<<<< HEAD
import AuthNavigation from './src/Login/AuthNavigation';

const App = () => {
  return (
    <AuthNavigation></AuthNavigation>
  );
};
export default App;
=======
import 'react-native-gesture-handler';
import AccountScreen from './src/Login/AccountScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const App = () => {
  return (
     <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen
         name="Account"
         component={AccountScreen}  
         options={{
          headerShown: false, // Masquer l'en-tête complet de l'écran "Profile"
      }} />  
       
     </Stack.Navigator> 
   </NavigationContainer>
  
  );
}
export default App;


// import React, {useRef, useState} from 'react';
// import {
//   Button,
//   DrawerLayoutAndroid,
//   Text,
//   StyleSheet,
//   View,
// } from 'react-native';

// const App = () => {
//   const drawer = useRef<DrawerLayoutAndroid>(null);
 
 

//   const navigationView = () => (
//     <View style={[styles.container, styles.navigationContainer]}>
//       <Text style={styles.paragraph}>I'm in the Drawer!</Text>
//       <Button
//         title="Close drawer"
//         onPress={() => drawer.current?.closeDrawer()}
//       />
//     </View>
//   );

//   return (
//     <DrawerLayoutAndroid
//       ref={drawer}
//       drawerWidth={300}
//       renderNavigationView={navigationView}>
//       <View style={styles.container}>        
  
//         <Button
//           title="Open drawer"
//           onPress={() => drawer.current?.openDrawer()}
//         />
//       </View>
//     </DrawerLayoutAndroid>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 16,
//   },
//   navigationContainer: {
//     backgroundColor: '#ecf0f1',
//   },
//   paragraph: {
//     padding: 16,
//     fontSize: 15,
//     textAlign: 'center',
//   },
// });

// export default App;
>>>>>>> eb75c95 (login)
