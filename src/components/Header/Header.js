// Header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  const renderLeftImage = () => {
    return <Text>Left</Text>;
  };

  const renderRightImage = () => {
    return <Text>Right</Text>;
  };

  return (
    <View style={styles.header}>
      <View>{renderLeftImage()}</View>
      <Text style={styles.headerTitle}>Titre de l'écran</Text>
      <View>{renderRightImage()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20, 
    paddingHorizontal: 10,
    backgroundColor: '#488ee3', 
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "white"
  },
});

export default Header;
