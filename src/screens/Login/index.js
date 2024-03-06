import React, { useState } from 'react'
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native'
import CustomText from '../../components/global/CustomText'
import ContainerScreen from '../../components/wrappers/ContainerScreen';
import { colors } from '../../components/global/colors';
import CustomAppButton from '../../components/global/CustomAppButton';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, connect } from 'react-redux';
import { loginStyles } from './styles';
import { loginRequest } from '../../redux/auth/actions'
const Login = ({ session, headerError, headerMessage, inputFields, buttons, isLoading }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  
  const dispatch = useDispatch();

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
  
  const handleButtonPress = (action) => {
    let inputData = '';
  
    if (password !== '') {
      inputData = password;
      setPassword('');
    } else if (email !== '') {
      inputData = email;
      setEmail('');
    } else if (code !== '') {
      inputData = code;
      setCode('');
    }
  
    console.log(inputData);
    dispatch(loginRequest(inputData, action, session));
  };  

  const handleSignUp = () => {
    navigation.navigate('Inscription rapide');
  };

  return (
    <ContainerScreen isLoading={isLoading}>
        <ScrollView>
          <View>
            <View style={loginStyles.card}>
              <CustomText fontSize={12} fontWeight='bold' color={colors.black} style={{ textAlign: 'center' }}>
                {headerError != "" ?
                  headerError
                  :
                  headerMessage
                }
              </CustomText>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ width: '100%' }} >
                  {inputFields.map((input, index) => (
                    <View key={index} style={{ width: '100%' }}>
                      <TextInput
                        style={loginStyles.input}
                        placeholder={input.label}
                        placeholderTextColor={colors.gray}
                        value={
                          input.name === 'password' && input.value === '' ? password :
                            input.name === 'email' && input.value === '' ? email :
                              input.name === 'code' && input.value === '' ? code :
                                input.value
                        } onChangeText={(text) => handleInputChange(text, input.name)}
                        keyboardType={input.name === 'email' ? 'email-address' : input.name === 'code' ? 'numeric' : 'default'}
                        autoCapitalize={input.name === 'email' ? 'none' : 'sentences'}
                        secureTextEntry={input.name === 'password' ? !showPassword : showPassword}
                      />
                      {input.name === 'password' && (
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                          <Icon name={showPassword ? "eye" : "eye-off"} size={24} color={colors.gray100} style={loginStyles.icon} />
                        </TouchableOpacity>
                      )}
                    </View>
                  ))}
                </View>
              </View>

              <View style={{ marginTop: 10, width: '100%' }}>
                <View style={loginStyles.buton}>
                  {buttons.map((button, index) => (
                    <CustomAppButton
                      key={index}
                      onPress={() => handleButtonPress(button.onclick_action)}
                      title={button.label}
                      alignSelf="baseline"
                      paddingVertical={16}
                      textColor={colors.white}
                      textFontSize={12}
                      borderRadius={10}
                      bkgroundColor={colors.blue}
                      width='100%'
                    />
                  ))}
                </View>
              </View>
            </View>
          </View>
          <View>
            <View style={loginStyles.card}>
              <CustomText
                children="Nouveau sur LogicRdv?"
                color={colors.black}
                fontSize={12}
                fontWeight='bold'

              />
              <CustomAppButton
                title="INSCRIPTION RAPIDE"
                onPress={handleSignUp}
                textFontSize={12}
                textColor={colors.blue}
                bkgroundColor='transparent'
                fontWeight='bold'

              />
            </View>
          </View>
        </ScrollView>
    </ContainerScreen>
  )
}

const mapStateToProps = ({ AuthReducer }) => ({
  session: AuthReducer.session,
  headerMessage: AuthReducer.headerMessage,
  headerError: AuthReducer.headerError,
  inputFields: AuthReducer.inputFields,
  buttons: AuthReducer.buttons,
  isLoading: AuthReducer.isLoading,
});

export default connect(mapStateToProps)(Login);