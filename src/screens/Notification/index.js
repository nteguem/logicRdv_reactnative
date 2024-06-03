import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FlatList, Image, View } from 'react-native';
import ContainerScreen from '../../components/wrappers/ContainerScreen';
import Item from '../../components/Notifications/Item';
import { listNotificationsRequest } from '../../redux/notification/actions';
import CustomText from '../../components/global/CustomText';
import { colors } from '../../components/global/colors';

const Notifications = ({ list, isLoading }) => {
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
        <FlatList
          data={list}
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
      )
      }

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