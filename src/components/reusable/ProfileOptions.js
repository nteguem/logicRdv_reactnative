import React, {useState} from 'react';
import {StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ProfileOptions = ({
  icon,
  optionName,
  onPressAction,
  isRightNotificationToggle,
}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const myIcon4 = <MaterialIcons name="notifications-on" size={20} />;
  return (
    <TouchableOpacity onPressOut={onPressAction}>
      <View style={styles.container}>
        {icon && !isEnabled ? (
          <View style={{paddingHorizontal: 20}}>{icon}</View>
        ) : (
          <View style={{paddingHorizontal: 20}}>{myIcon4}</View>
        )}
        <Text
          style={{
            marginLeft: 3,
            color: '#244370',
            fontWeight: 'bold',
            fontSize: 17,
          }}>
          {optionName}
        </Text>
        {isRightNotificationToggle && (
          <Switch
            style={{flex: 1}}
            trackColor={{false: '767577', true: '#81bOff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        )}
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
