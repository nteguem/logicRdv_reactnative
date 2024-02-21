import React from 'react';
import NotificationDetails from '../../components/Notifications/NotificationDetails';
import data from '../../components/data/dataNotif';
import {ScrollView, View} from 'react-native';
import ContainerScreen from '../../components/wrappers/ContainerScreen';

const Notifications = () => {
  return (
    <ContainerScreen>
      <ScrollView>
        {data.map((result, index) => (
          <View style={{paddingTop: 10}}>
            <NotificationDetails
              key={index}
              isMessageIcon={result.isMessageIcon}
              notifHeaderNameValue={result.notifHeaderName}
              notifHeaderDateTime={result.date}
              isNotifTitle={result.isNotifTitle}
              notifTitleValue={result.title}
              isNotifWarning={result.isWarning}
              notifBodyValue={result.textBody}
              isNotifAddresse={result.isAdresse}
              notifAdressValue={result.addresse}
              notifPhoneValue={result.phone}
              isNotifFooter={result.isFooter}
              motifValue={result.motif}
              dateMotifFooterValue={result.date}
            />
          </View>
        ))}
      </ScrollView>
    </ContainerScreen>
  );
};

export default Notifications;
