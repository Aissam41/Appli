import React from 'react';
import { Button, Text, StyleSheet, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const ProfileScreen = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Profile" component={ProfileContent} />
    </Drawer.Navigator>
  );
};

const ProfileContent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Swipe from the side or press button below to see it!
      </Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
});

export default ProfileScreen;
