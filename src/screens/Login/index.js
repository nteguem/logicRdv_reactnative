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

  const navigation = useNavigation();

  const handleInputChange = (text, type) => {
    switch (type) {
      case 'email':
        setEmail(text);
        break;
      case 'password':
        setPassword(text);
        break;
      case 'code':
        setCode(text);
        break;
      default:
        break;
    }
  };
  
  const handleButtonPress = (action, label) => {
    let inputData = '';

    if (code !== '') {
      inputData = code;
    } else if (email !== '') {
      inputData = email;
    } else if (password !== '') {
      inputData = password;
    }

    dispatch(loginRequest(inputData, action, session));

    setEmail('');
    setCode('');
    if (label === "Mot de passe Oublié") {
      setPassword('');
    }
  };


  const handleSignUp = () => {
    navigation.navigate('Inscription rapide');
  };

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