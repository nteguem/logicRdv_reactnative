import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { colors } from '../global/colors';
import CustomAppButton from '../global/CustomAppButton';

const EmailForm = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleSubmit = () => {
    // Logique pour traiter l'email
    console.log('Email soumis:', email);
    // Réinitialiser l'email après la soumission
    setEmail('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vous etes deja inscrit, veillez vous connecter a votre espace particulier</Text>
      <TextInput
        style={styles.input}
        placeholder="Adresse email ou numero de telephone"
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
        paddingHorizontal={120}
        paddingVertical={10}
        borderRadius={10}
        textFontSize={15}
        fontWeight="bold"
      />
     
    </View>
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
      marginVertical:10,

  }
})

export default EmailForm;
