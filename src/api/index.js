/** @format */

export const url = 'http://localhost:5000/api';

export const setHeaders = () => {
  const header = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
  return header;
};
