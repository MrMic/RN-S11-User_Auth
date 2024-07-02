import { useContext, useState } from 'react';
import { Alert } from 'react-native';

import LoadingOverlay from '../components/ui/LoadingOverlay';
import AuthContent from '../components/Auth/AuthContent';
import { login } from '../util/auth';
import { AuthContext } from '../store/auth-context';


function LoginScreen() {
  const [isAuthenticating, setisAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);

  // ______________________________________________________________________
  async function loginHandler({ email, password }) {
    setisAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (err) {
      Alert.alert('Authentication failed', 'Please check your credentials.');
      setisAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Login you in..." />
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
