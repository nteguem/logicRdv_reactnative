import React, { useState } from 'react'
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import CustomText from '../../components/global/CustomText'
import ContainerScreen from '../../components/wrappers/ContainerScreen';
import { colors } from '../../components/global/colors';
import CustomAppButton from '../../components/global/CustomAppButton';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const UserLogin = () => {
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const onChangePassword = (text) => {
    setPassword(text);
  };

  const handleSignUp = () => {
    navigation.navigate('Inscription rapide');
  };

  const onSubmit = () => {
    if (email !== '') {
      setShowAdditionalFields(true);
    }
  };

  const handleReturnToEmail = () => {
    // Logique pour retourner au composant EmailForm
    console.log('Retour au composant EmailForm');
  };

  const handlePasswordRecovery = () => {
    navigation.navigate('Mot de passe oublié');
  };

  const handleValidatePassword = () => {
    // Logique pour valider le mot de passe
    navigation.navigate('Mes rendez-vous');
    // Réinitialiser le mot de passe après la validation
    setPassword('');
  };

  return (
    <ContainerScreen>
      <ScrollView>
        <View>
          <View style={styles.card}>
            <CustomText fontSize={12} fontWeight='bold' color={colors.black} style={{ textAlign: 'center' }}>
              {showAdditionalFields ?
                'Veuillez entrer votre mot de passe'
                :
                'Vous etes deja inscrit, veuillez vous connecter à votre espace particulier'
              }
            </CustomText>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ width: '100%' }} >
                <TextInput
                  style={styles.input}
                  placeholder="Adresse email ou numero de telephone"
                  placeholderTextColor={colors.gray}
                  value={email}
                  onChangeText={handleEmailChange}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />

              </View>
            </View>
            {showAdditionalFields && (
              <View style={{ width: '100%' }}>
                <TextInput
                  style={styles.input}
                  placeholder="Mot de passe"
                  placeholderTextColor={colors.gray}
                  value={password}
                  onChangeText={onChangePassword}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Icon name={showPassword ? "eye" : "eye-off"} size={24} color={colors.gray100} style={styles.icon} />
                </TouchableOpacity>
              </View>
            )}
            <View style={{ marginTop: 10 }}>
              {showAdditionalFields ? (
                <View style={styles.buton}>
                  <CustomAppButton
                    title="Retour"
                    onPress={handleReturnToEmail}
                    alignSelf="baseline"
                    paddingVertical={16}
                    paddingHorizontal={138}
                    textColor={colors.white}
                    textFontSize={12}
                    borderRadius={10}
                    bkgroundColor={colors.blue}
                  />
                  <CustomAppButton
                    title="Mot de passe oublié"
                    onPress={handlePasswordRecovery}
                    alignSelf="baseline"
                    paddingVertical={16}
                    paddingHorizontal={86}
                    textColor={colors.white}
                    textFontSize={12}
                    borderRadius={10}
                    bkgroundColor={colors.blue}
                  />

                  <CustomAppButton
                    onPress={handleValidatePassword}
                    title="Suivant"
                    alignSelf="baseline"
                    paddingVertical={16}
                    paddingHorizontal={136}
                    textColor={colors.white}
                    textFontSize={12}
                    borderRadius={10}
                    bkgroundColor={colors.blue}
                  />
                </View>
              ) :
                (
                  <CustomAppButton
                    onPress={onSubmit}
                    title="Suivant"
                    alignSelf="baseline"
                    paddingVertical={16}
                    paddingHorizontal={135}
                    textColor={colors.white}
                    textFontSize={12}
                    borderRadius={10}
                    bkgroundColor={colors.blue}
                  />
                )}

            </View>
          </View>
        </View>
        <View>
          <View style={styles.card}>
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

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    borderColor: colors.gray100,
    marginTop: 20,
    padding: 15,
    gap: 10
  },
  input: {
    borderWidth: 1,
    borderColor: colors.gray100,
    padding: 10,
    color: colors.black,
    fontSize: 12,
    borderRadius: 10,
    textAlignVertical: 'center',
    marginTop: 16,
    height: 50
  },
  buton: {
    paddingVertical: 10,
    gap: 10,
  },
  icon: {
    position: 'absolute',
    marginRight: 10,
    right: 10,
    top: '10%',
    transform: [{ translateY: -35 }]
  },
});

export default UserLogin
