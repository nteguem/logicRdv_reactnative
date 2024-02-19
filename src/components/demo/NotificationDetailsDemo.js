import React from 'react';
import SmallText from '../components/Texts/SmallText';
import Regulartext from '../components/Texts/RegularText';
import BigText from '../components/Texts/BigText';
import {Alert, StyleSheet, View} from 'react-native';
import CustomAppButton from '../components/global/CustomAppButton';
import PatientdetailsTwo from '../components/reusable/PatientdetailsTwo';
import PatientDetailsThree from '../components/reusable/PatientDetailsThree';
import NotificationDetails from '../components/reusable/NotificationDetails';

function NotificationDetailsDemo() {
  const data = [
    {
      notifHeaderName: 'Ndeh Wilfried',
      date: '08/09/2024 14:05',
      title: 'Bonjour Ndeh Wilfried',
      addresse: 'Le 08/09/24 sur votre CB xxx 0003',
      phone: '00332211',
      motif: 'Anunulation du RDV',
      textBody:
        '40.00 EUR a prelever en fin de consultation 40.00 EUR a prelever en fin de consultation 40.00 EUR a prelever en fin de consultation 40.00 EUR a prelever en fin de consultation 40.00 EUR a prelever en fin de consultation',
      isNotifTitle: true,
      isMessageIcon: false,
      isWarning: false,
      isAdresse: true,
      isFooter: true,
    },
    {
      notifHeaderName: 'Ndeh Wilfried',
      date: '08/09/2024 14:05',
      title: 'Bonjour Ndeh Wilfried',
      addresse: 'Le 08/09/24 sur votre CB xxx 0003',
      phone: '00332211',
      motif: 'Anunulation du RDV',
      textBody:
        '40.00 EUR a prelever en fin de consultation 40.00 EUR a prelever en fin de consultation 40.00 EUR a prelever en fin de consultation 40.00 EUR a prelever en fin de consultation 40.00 EUR a prelever en fin de consultation',
      isNotifTitle: false,
      isMessageIcon: true,
      isWarning: false,
      isAdresse: false,
      isFooter: false,
    },
    {
      notifHeaderName: 'Ndeh Wilfried',
      date: '08/09/2024 14:05',
      title: 'Bonjour Ndeh Wilfried',
      addresse: 'Le 08/09/24 sur votre CB xxx 0003',
      phone: '00332211',
      motif: 'Anunulation du RDV',
      textBody:
        'lien https://google.com/bqffzerkjfdjskhfjdhkshjf/ksjdjhfjdshjfhjdhkshfjdhskjhf/page',
      isNotifTitle: false,
      isMessageIcon: true,
      isWarning: true,
      isAdresse: false,
      isFooter: false,
    },
    {
      notifHeaderName: 'Ndeh Wilfried',
      date: '08/09/2024 14:05',
      title: 'Bonjour Ndeh Wilfried',
      addresse: 'Le 08/09/24 sur votre CB xxx 0003',
      phone: '00332211',
      motif: 'Anunulation du RDV',
      textBody:
        'lien https://google.com/bqffzerkjfdjskhfjdhkshjf/ksjdjhfjdshjfhjdhkshfjdhskjhf/page',
      isNotifTitle: false,
      isMessageIcon: true,
      isWarning: true,
      isAdresse: false,
      isFooter: false,
    },
  ];

  return data.map((result, index) => (
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
  ));
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
  customStyle: {
    color: 'yellow',
  },
});

export default NotificationDetailsDemo;
