import axios from "axios";


const API_KEY = "AIzaSyBcr1gE6OHEcM2pVrBBDEk-9-HR7q4M9fE"

async function createUser(email, password) {
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true
    }
  )
}
