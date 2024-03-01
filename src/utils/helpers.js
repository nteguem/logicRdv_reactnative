import AsyncStorage from '@react-native-async-storage/async-storage';
import { sendRequest } from './api';

export const HeaderIcons = {
  SEARCH: 'magnify',
  GO_BACK: 'arrow-back-ios',
  ACCOUNT: 'account-circle',
  MENU: 'menu',
  PLUS: 'plus-circle'
};

export const getToken = async () => {
  return AsyncStorage.getItem('tokenLogicRdv');
};

const setToken = async (token) => {
  AsyncStorage.setItem('tokenLogicRdv', token);
};

export const generateToken = async () => {
  try {
    dataToken = {
      client_project: 'cf6c306bab',
      client_secret: '043a348ddcb9031c4a192f2ae4917cf096c799a4'
    };
    const response = await sendRequest('POST', 'token/get/', dataToken );

    const authorizationHeader = response.data.authorization;
    const token = authorizationHeader.split(' ')[1];
    await setToken(token);
    return token;
  } catch (error) {
    console.error('Erreur lors de la génération du token:', error);
    throw error;
  }
};

export const checkTokenValidity = async () => {
  try {
    const response = await sendRequest('POST', 'token/check/', null);

    if (response.httpstatut === 200) {
      return true;
    } else if (response.httpstatut === 401) {
      return false;
    } else {
      throw new Error('Erreur lors de la vérification du token');
    }
  } catch (error) {
    console.error('Erreur lors de la vérification du token:', error);
    throw error;
  }
};

export const initializeApp = async () => {
  try {
    const token = await getToken();
    if (!token) {
      const newToken = await generateToken();
      return newToken;
    } else {
      const tokenIsValid = await checkTokenValidity();
      if (!tokenIsValid) {
        const newToken = await generateToken();
        return newToken;
      } else {
        return token;
      }
    }
  } catch (error) {
    console.error("Erreur lors de l'initialisation de l'application:", error);
    throw error;
  }
};
