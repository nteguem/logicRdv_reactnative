import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { colors } from '../global/colors';
import CustomText from '../global/CustomText';
import CustomAppButton from '../global/CustomAppButton';
import { useNavigation } from '@react-navigation/native';

const PasswordForm = ({ email }) => {
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleReturnToEmail = () => {
    // Logique pour retourner au composant EmailForm
    console.log('Retour au composant EmailForm');
  };

  const handleModifyPassword = () => {
    // Logique pour naviguer vers l'écran de modification du mot de passe
    navigation.goBack();
    console.log('Navigation vers l\'écran de modification du mot de passe');
  };

  const handleValidatePassword = () => {
    // Logique pour valider le mot de passe
    console.log('Mot de passe validé:', password);
    // Réinitialiser le mot de passe après la validation
    setPassword('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Veuillez entrez votre mot de passe </Text>
     <TextInput
        style={styles.input}
        placeholder={email}
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry={true}
      />
     
      <TextInput
        style={styles.input}
        placeholder="Entrez votre mot de passe"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry={true}
      />
       <View style={styles.buton}>
       <CustomAppButton
        title="Retour"
        onPress={handleReturnToEmail}
        bkgroundColor={colors.blue} 
        textColor={colors.white}
        paddingHorizontal={120}
        paddingVertical={10}
        borderRadius={10}
        textFontSize={15}
        fontWeight="bold"
      />
       <CustomAppButton
        title="Mot de passe oublier"
        onPress={handleModifyPassword}
        bkgroundColor={colors.blue} 
        textColor={colors.white}
        paddingHorizontal={20}
        paddingVertical={10}
        borderRadius={10}
        textFontSize={15}
        fontWeight="bold"
      />

     <CustomAppButton
        title="Suivant"
        onPress={handleValidatePassword}
        bkgroundColor={colors.blue} 
        textColor={colors.white}
        paddingHorizontal={120}
        paddingVertical={10}
        borderRadius={10}
        textFontSize={15}
        fontWeight="bold"
      />
      
       
       </View>
     
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
        width:280,
  
    },
    buton:{
        paddingVertical:10,
        gap:10,
    }
  })

export default PasswordForm;
