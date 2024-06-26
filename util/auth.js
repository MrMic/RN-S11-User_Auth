import axios from "axios";

// * NOTE: With Expo, one can fetch env variables from .env* files
const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
// console.log("🪚 API_KEY:", API_KEY);

// ______________________________________________________________________
export async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true
  });

  // console.log("🪚 response.data:", response.data);
  const token = response.data.idToken;

  return token;
}

// ______________________________________________________________________
export function createUser(email, password) {
  // * INFO: return the token
  return authenticate('signUp', email, password);

}

// ______________________________________________________________________
export function login(email, password) {
  // * INFO: return the token
  return authenticate('signInWithPassword', email, password);

}
