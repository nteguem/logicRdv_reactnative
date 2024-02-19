import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import ProfileOptions from '../components/reusable/ProfileOptions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function ProfileOptionsDemo() {
  const myIcon1 = <Ionicons name="settings-sharp" size={20} />;
  const myIcon2 = <MaterialIcons name="notifications" size={20} />;
  const myIcon3 = <MaterialIcons name="policy" size={20} />;
  const myIcon4 = <MaterialIcons name="notifications-off" size={20} />;
  const data = [
    {
      optionName: 'Parametres du compte',
      icon: myIcon1,
      isRightNotificationToggle: false,
    },
    {
      optionName: 'Notifications',
      icon: myIcon2,
      isRightNotificationToggle: false,
    },
    {
      optionName: 'Politiques de confidentialité',
      icon: myIcon3,
      isRightNotificationToggle: false,
    },
    {
      optionName: 'Notifications',
      icon: myIcon4,
      isRightNotificationToggle: true,
    },
  ];

  return (
    <View
      style={{
        justifyContent: 'space-between',
        height: 250,
        marginTop: 100,
        paddingHorizontal: 10,
      }}>
      {data.map((result, index) => (
        <ProfileOptions
          key={index}
          icon={result.icon}
          optionName={result.optionName}
          isRightNotificationToggle={result.isRightNotificationToggle}
          onPressAction={() => Alert.alert(result.optionName)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customTextStyle: {
    marginBottom: 8,
  },
});

export default ProfileOptionsDemo;
