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

import React, { useState } from 'react';
import { StyleSheet, Switch, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomText from '../global/CustomText';
import { colors } from '../global/colors';

const ProfileOptions = ({
  onPressAction,
}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const options = [
    { icon: <Ionicons name="settings-sharp" size={25} style={styles.icon} />, text: "Parametres du compte", route: "/account-settings" },
    { icon: <MaterialIcons name="notifications" size={25} style={styles.icon} />, text: "Notifications", route: "/notifications" },
    { icon: <MaterialIcons name="policy" size={25} style={styles.icon} />, text: "Polices de confidentialité", route: "/privacy-policy" },
  ];

  return (
    <View style={styles.optionContainer}>
      {options.map((option, index) => (
        <TouchableOpacity key={index} onPress={() => onPressAction(option.route)}>
          <View style={styles.container}>
            {option.icon}
            <CustomText
              fontSize={17}
              fontWeight={'bold'}
              color={colors.blue100}
              style={{ marginLeft: 3 }}>
              {option.text}
            </CustomText>
          </View>
        </TouchableOpacity>
      ))}
      <View style={[styles.container, {justifyContent:'space-between'}]}>
        <View style={{flexDirection:'row', alignItems:'center'}}> 
          {isEnabled ? <MaterialIcons name="notifications-on" size={25} style={styles.icon} /> : <MaterialIcons name="notifications-off" size={25} style={styles.icon} />}
          <CustomText
            fontSize={17}
            fontWeight={'bold'}
            color={colors.blue100}
            style={{ marginLeft: 3 }}>
            Notifications
          </CustomText>
        </View>
        <Switch
          trackColor={{ false: colors.gray300, true: colors.blue }}
          thumbColor={isEnabled ? colors.blue : colors.gray100}
          ios_backgroundColor={colors.gray200}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: 'column',
    gap: 15
  },
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 25,
    paddingHorizontal: 24,
  },
  icon: {
    color: colors.gray,
    marginRight: 15
  },
});

export default ProfileOptions;