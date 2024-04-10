import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View } from 'react-native';
import ContainerScreen from '../../components/wrappers/ContainerScreen';
import Item from '../../components/Notifications/Item';
import { listNotificationsRequest } from '../../redux/notification/actions';

const Notifications = ({ list, isLoading }) => {
  useEffect(() => {
    listNotificationsRequest();
  }, []);

 
  return (
    <ContainerScreen isLoading={isLoading}>
      <ScrollView>
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