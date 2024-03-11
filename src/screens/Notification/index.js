import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FlatList, View } from 'react-native';
import ContainerScreen from '../../components/wrappers/ContainerScreen';
import Item from '../../components/Notifications/Item';
import { listNotificationsRequest } from '../../redux/notification/actions';

const Notifications = ({ isSubscribed, list, isLoading, listNotificationsRequest }) => {
  useEffect(() => {
    listNotificationsRequest();
  }, [listNotificationsRequest]);

  const listnotification = list.list;
 

  return (
    <ContainerScreen isLoading={isLoading}>
      <FlatList
        data={isSubscribed ? listnotification : []}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Item
            key={item.id}
            date={item.date}
            username={item.nom}
            message={item.message}
            nameIcon={item.nature}
          />
        )}
      />
    </ContainerScreen>
  );
};

const mapStateToProps = (state) => ({
  list: state.NotificationReducer.list,
  isLoading: state.NotificationReducer.isLoading,
  isSubscribed: state.NotificationReducer.isSubscribed
});

const mapDispatchToProps = {
  listNotificationsRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);