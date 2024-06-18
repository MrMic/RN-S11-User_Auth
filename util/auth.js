import axios from "axios";

require("dotenv").config();


async function createUser(email, password) {
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + process.env.API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true
    }
  )
}
