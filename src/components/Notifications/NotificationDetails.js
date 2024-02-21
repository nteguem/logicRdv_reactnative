import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const NotificationDetails = ({
  notifHeaderNameValue,
  notifHeaderDateTime,
  isMessageIcon = false,
  isNotifTitle = false,
  isNotifWarning = false,
  isNotifAddresse = false,
  isNotifFooter = false,
  notifTitleValue,
  notifBodyValue,
  notifAdressValue,
  notifPhoneValue,
  dateMotifFooterValue,
  motifValue,
}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {isMessageIcon ? (
            <MaterialCommunityIcons
              color="#244370"
              name="message-text"
              size={15}
            />
          ) : (
            <FontAwesome color="#244370" name="bell" size={15} />
          )}
          <Text style={{marginLeft: 5, color: '#244370'}}>
            {notifHeaderNameValue}
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Ionicons color="#244370" name="calendar-clear-outline" size={15} />
          <Text style={{marginLeft: 5}}>{notifHeaderDateTime}</Text>
        </View>
      </View>
      {isNotifTitle && (
        <View style={{paddingTop: 5}}>
          <Text>{notifTitleValue}</Text>
        </View>
      )}
      {isNotifWarning && (
        <View style={{paddingTop: 5}}>
          <Text>Testez la camera avant et ne pas oublier le prepaiement.</Text>
        </View>
      )}
      <View style={{paddingTop: 5}}>
        <Text>{notifBodyValue}</Text>
      </View>
      {isNotifAddresse && (
        <View style={{paddingTop: 5}}>
          <Text>Adresse : {notifAdressValue}</Text>
          <Text>Téléphone : {notifPhoneValue}</Text>
        </View>
      )}
      {isNotifFooter && (
        <View style={{paddingTop: 5}}>
          <Text>
            {motifValue} du : {dateMotifFooterValue}
          </Text>
          <Text>Cordialement</Text>
          <Text>LogicRdv</Text>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
});

export default NotificationDetails;
