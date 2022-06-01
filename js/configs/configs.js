// export const BASE_URL = `http://localhost:1337`;
export const BASE_URL = `https://semproject2-api.herokuapp.com`;

export const headers = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('jwt')}`,
  },
};
