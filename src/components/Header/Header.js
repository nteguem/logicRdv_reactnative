import React from 'react';
import { View, Text, SafeAreaView ,StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { HeaderIcons } from "../../utils/helpers";
import { DrawerActions } from '@react-navigation/native';

const Header = ({ backgroundColor }) => {
  const navigation = useNavigation();
  const route = useRoute();

  const handleSearchIconPress = () => {
    // Action à effectuer lors du clic sur l'icône de recherche
    // Par exemple, naviguer vers une autre page
    // navigation.navigate('SearchPage');
  };

  const handleGoBackIconPress = () => {
    // Action à effectuer lors du clic sur l'icône de recherche
    // Par exemple, naviguer vers une autre page
    // navigation.navigate('SearchPage');
  };

  const handleDrawerConnectIconPress = () => {
    // Action à effectuer lors du clic sur l'icône du menu
    // Par exemple, ouvrir le menu latéral
    // navigation.openDrawer();
    navigation.dispatch(DrawerActions.openDrawer());

  };

  const handleDrawerDisConnectIconPress = () => {
    // Action à effectuer lors du clic sur l'icône du menu
    // Par exemple, ouvrir le menu latéral
    // navigation.openDrawer();
  };

  const renderLeftContent = () => {
    return (
      <>
        {route.params.left === HeaderIcons.SEARCH ? (
          <TouchableOpacity onPress={handleSearchIconPress}>
            <MaterialCommunityIcons name={HeaderIcons.SEARCH} size={22} color={backgroundColor ? '#488ee3' : 'white'} />
          </TouchableOpacity>
        ) : route.params.left === HeaderIcons.GO_BACK ? (
          <TouchableOpacity onPress={handleSearchIconPress}>
            <MaterialIcons name={HeaderIcons.GO_BACK} size={22} color={backgroundColor ? '#488ee3' : 'white'} />
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </>
    );
  };

  const renderRightContent = () => {
    return (
      <>
        {route.params.right === HeaderIcons.ACCOUNT ? (
          <TouchableOpacity onPress={handleDrawerConnectIconPress}>
            <MaterialCommunityIcons name={HeaderIcons.ACCOUNT} size={22} color={backgroundColor ? '#488ee3' : 'white'} />
          </TouchableOpacity>
        ) : route.params.right === HeaderIcons.MENU ? (
          <TouchableOpacity onPress={handleSearchIconPress}>
            <MaterialIcons name={HeaderIcons.MENU} size={22} color={backgroundColor ? '#488ee3' : 'white'} />
            
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </>
    );
  };

  const renderCenterContent = () => {
    return (
      <>
        {route.name !== null  ? (
          <Text style={styles.headerTitle}>{route.name}</Text>
        ) : (
          <View />
        )}
      </>
    );
  };

  return (
    <SafeAreaView style={[styles.header, { backgroundColor: backgroundColor || '#488ee3' }]}>
      {renderLeftContent()}
      {renderCenterContent()}
      {renderRightContent()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: "white"
  },
});

export default Header;
