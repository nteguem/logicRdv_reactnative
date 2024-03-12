import React from 'react';
import { View, FlatList } from 'react-native';
import ContainerScreen from '../../components/wrappers/ContainerScreen';
import { connect } from 'react-redux';
import LoginForm from '../../components/LoginComponent/LoginForm';
import RegistrationButtons from '../../components/LoginComponent/RegistrationButtons';

const Login = ({ isLoading }) => {
  const data = [
    { id: 'loginForm', component: <LoginForm /> },
    { id: 'registrationButtons', component: <RegistrationButtons /> },
  ];

  const renderItem = ({ item }) => <View>{item.component}</View>;

  return (
    <ContainerScreen isLoading={isLoading}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ flexGrow: 1 }}
      />
    </ContainerScreen>
  );
};

const mapStateToProps = ({ AuthReducer }) => ({
  isLoading: AuthReducer.isLoading,
});

export default connect(mapStateToProps)(Login);