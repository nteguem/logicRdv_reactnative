import React, {useState} from 'react';
import {StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomText from '../Texts/CustomText';
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
