import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Image, ScrollView, View } from 'react-native';
import ContainerScreen from '../../components/wrappers/ContainerScreen';
import Item from '../../components/Notifications/Item';
import { listNotificationsRequest } from '../../redux/notification/actions';
import CustomText from '../../components/global/CustomText';
import { colors } from '../../components/global/colors';

const Notifications = ({ list, isLoading }) => {
  console.log("list is ::::", list); 
  useEffect(() => {
    listNotificationsRequest();
  }, []);


  return (
    <ContainerScreen isLoading={isLoading}>

      {list?.length === 0 ? (
        <View style={{ height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../../assets/images/favicon.jpg')} style={{ width: 25, height: 25, borderRadius: 5 }} />
          <CustomText color={colors.blue}>Aucune donnée disponible</CustomText>
        </View>
      ) : (
        <View style={{marginVertical: 2}}>
        <ScrollView style={{marginVertical: 3}}>
          {list.map((item, index) => (
            <Item
              key={index.toString()}
              date={item.date}
              username={item.nom}
              message={item.message}
              nameIcon={item.nature}
            />
          ))}
        </ScrollView>
        </View>
      )}
    </ContainerScreen>
  );
};

const mapStateToProps = (state) => ({
  list: state.NotificationReducer.list,
  isLoading: state.NotificationReducer.isLoading,
});

const mapDispatchToProps = {
  listNotificationsRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);