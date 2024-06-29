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
  }

  function logout() {
    setauthToken(null)
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
