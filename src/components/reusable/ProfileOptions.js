import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ProfileOptions = ({icon, optionName, onPressAction}) => {
  return (
    <TouchableOpacity onPressOut={onPressAction}>
      <View style={styles.container}>
        {icon && <View style={{paddingHorizontal: 20}}>{icon}</View>}
        <Text style={{marginLeft: 3}}>{optionName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 15,
  },
});

export default ProfileOptions;
