import { getToken } from "./helpers";
import { showMessage } from "react-native-flash-message";

const json = 'application/json; charset=utf-8';
const remoteUrl = "https://www.logicrdv.fr/api/";

export const request = async (method, url, data, headers = {}) => {
  try {
    const token = await getToken(); 
    if (token) {
      headers['X-LOGICRDV-AUTH'] = token;
    }

    const response = await fetch(remoteUrl + url, {
      method,
      headers: {
        'Content-Type': json,
        ...headers,
      },
      body: JSON.stringify(data),
      timeout: 15000,
    });

    if (!response.ok) {
      if (response.status === 404) {
        const errorBody = await response.json();
        showMessage({
          message: 'Erreur',
          description: errorBody.message,
          type: 'danger',
          duration: 5000,
        });
        throw new Error(errorBody.message);
      } else {
        showMessage({
          message: 'Erreur',
          description: `Erreur ${response.status} lors de la requête HTTP`,
          type: 'danger',
          duration: 5000,
        });
        throw new Error('Erreur lors de la requête: ' + response.status);
      }
    }

    return await response.json();
  } catch (error) {
    showMessage({
      message: 'Erreur',
      description: error.message,
      type: 'danger',
      duration: 5000,
    });
    throw error;
  }
};


export const sendRequest = async (method, url, data) => {
  try {
    return await request(method, url, data);
  } catch (error) {
    console.error('Erreur lors de la requête:', error);
    throw error;
  }
};
