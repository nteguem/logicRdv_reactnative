import { getToken } from "./helpers";

const json = 'application/json; charset=utf-8';
const remoteUrl = "https://www.logicrdv.fr/api/";

export const request = async (method, url, data, headers = {}) => {
  try {
    const token = await getToken(); 
    if (token) {
      headers['X-LOGICRDV-AUTH'] = token;
    }

    const response = await fetch(remoteUrl+url, {
      method,
      headers: {
        'Content-Type': json,
        ...headers,
      },
      body: JSON.stringify(data),
      timeout: 15000,
    });
    if (!response.ok) {
      throw new Error('Erreur lors de la requête: ' + response.statusText);
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const sendRequest = async (method, url, data) => {
  try {
    return await request(method,url, data);
  } catch (error) {
    console.error('Erreur lors de la requête:', error);
    throw error;
  }
};
