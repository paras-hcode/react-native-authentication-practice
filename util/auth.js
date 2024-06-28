import axios from "axios";
const API_KEY = "AIzaSyDVUX_R-xAqrC0_D452FhLwK6jfc2-xCtY";
const SIGNUP_URL =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY;

const SIGNIN_URL =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
  API_KEY;

const authenticate = async (mode, email, password) => {
  const url =
    `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=` + API_KEY;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  const token = response.data.idToken;
  console.log("token", token);
  return token;
};

export const createUser = ({ email, password }) => {
  return authenticate("signUp", email, password);
};

export const loginUser = ({ email, password }) => {
  return authenticate("signInWithPassword", email, password);
};
