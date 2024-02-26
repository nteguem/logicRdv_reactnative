import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { colors } from '../global/colors';
import CustomAppButton from '../global/CustomAppButton';
import PasswordForm from './Pwd';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPasswordd] = useState(false);

  const handleEmailChange = (text) => {
    setEmail(text);
  };


  const handleSubmit = () => {
    console.log('Email soumis:', email);
    setEmail('');
    setPasswordd(true)
  };

  return (
    <>
      {
        password ? (
          <PasswordForm />
        ) : (
          <View style={styles.container}>
      <Text style={styles.title}>Vous etes deja inscrit, veillez vous connecter a votre espace particulier</Text>
      <TextInput
        style={styles.input}
        placeholder="Adresse email ou numero de telephone"
        placeholderTextColor={colors.gray}
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <CustomAppButton
        title="Suivant"
        onPress={handleSubmit}
        bkgroundColor={colors.blue} 
        textColor={colors.white}
        paddingHorizontal={125}
        paddingVertical={10}
        borderRadius={10}
        textFontSize={15}
        fontWeight="bold"
      />
     
    </View>
        )
      }
    </>
    
  );
};

const styles = StyleSheet.create({
  container:{
      marginVertical:10,
      marginHorizontal:10,
      backgroundColor: colors.white,
      paddingVertical: 20,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
  },
  title:{
      fontSize: 16,
      fontWeight: '500',
      color: colors.black,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign:"center",
  },
  input:{
      borderRadius: 10,
      borderWidth: 1,
      marginVertical:10,
      fontSize: 16,
      textAlignVertical: 'center',
      borderColor:colors.gray,
      paddingHorizontal: 10,
      color: colors.black
  }
})

export default EmailForm;
