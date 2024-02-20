/*
  This React Native component represents a profile option item, typically used in a settings or profile screen.
  It allows users to toggle notifications on or off for certain options and provides a customizable icon and option name.

  Component Structure:
  - TouchableOpacity: Wrapper component to make the option clickable.
    - View: Main container for the option.
      - Conditional Rendering: Displays either the provided icon or a notification icon based on the notification toggle state.
      - CustomText: Displays the option name with bold formatting.
      - Switch: Toggle switch for notifications (if enabled), positioned at the right side of the option.

  Functionality:
  - Toggle Switch: Toggles the notification state when pressed.

  Props:
  - icon: Custom icon to be displayed for the option.
  - optionName: Name of the option.
  - onPressAction: Action to be performed when the option is pressed.
  - isRightNotificationToggle: Boolean flag indicating whether to display a notification toggle switch on the right side.

  Styles:
  - container: Layout styles for the main container, providing padding, border radius, background color, and alignment.
*/

import React, {useState} from 'react';
import {StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomText from '../global/CustomText';
import {colors} from '../global/colors';

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
        <CustomText
          fontSize={17}
          fontWeight={'bold'}
          color={'#244370'}
          style={{
            marginLeft: 3,
          }}>
          {optionName}
        </CustomText>
        {isRightNotificationToggle && (
          <Switch
            style={{flex: 1}}
            trackColor={{false: colors.gray, true: colors.blue}}
            thumbColor={isEnabled ? colors.blue : colors.gray100}
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
    backgroundColor: colors.white,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 15,
  },
});

export default ProfileOptions;
