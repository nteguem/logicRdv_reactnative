import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';

const DrawerContent = ({ navigation }) => {
  const navigateToScreen = (screenName) => () => {
    navigation.navigate(screenName);
  };

  return (
    <DrawerContentScrollView>
      <TouchableOpacity onPress={navigateToScreen('Home')}>
        <Text style={styles.drawerItem}>Drawer Screen 1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToScreen('Home')}>
        <Text style={styles.drawerItem}>Drawer Screen 2</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerItem: {
    color: 'black',
    fontSize: 16, 
    paddingVertical: 10,
    paddingHorizontal: 20, 
  },
});

export default DrawerContent;
