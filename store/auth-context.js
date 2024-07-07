import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: (token) => { },
  logout: () => { },
});

function AuthContextProvider({ children }) {
  const [authToken, setauthToken] = useState()



  function authenticate(token) {
    setauthToken(token)
    AsyncStorage.setItem("token", token);
  }

  function logout() {
    setauthToken(null)
    AsyncStorage.removeItem("token");
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };

  return <AuthContext.Provider
    value={value}
  >{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
