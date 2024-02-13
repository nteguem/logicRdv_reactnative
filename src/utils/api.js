const json = `application/json; charset=utf-8`;

const request = async (method, url, data, headers = {}) => {
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': json,
        ...headers,
      },
      body: data,
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

export const sendRequest = async (method, url, data, isAuthenticated = false) => {
  try {
    const headers = {};

    if (isAuthenticated) {
      const token = "token"; // Fonction pour récupérer le token d'authentification eg: await getToken();
      headers['Authorization'] = 'Bearer ' + token;
    }

    const response = await request(method, url, data, headers);
    return response;
  } catch (error) {
    console.log('Erreur lors de la requête:', error);
    throw error;
  }
};
