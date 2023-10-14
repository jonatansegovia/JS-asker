export const getData = async () => {
  try {
    const response = await fetch(
      'https://asker-83340-default-rtdb.firebaseio.com/data.json'
    );

    if (!response.ok) {
      throw new Error('Erro when obtaining data');
    }

    const data = await response.json();

    if (!data || typeof data !== 'object') {
      throw new Error('Unexpected format');
    }

    return data;
  } catch (error) {
    console.error('There was an error:', error);
    throw error;
  }
};
