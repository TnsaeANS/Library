// auth.js

export const isLoggedIn = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  return token !== null;
};