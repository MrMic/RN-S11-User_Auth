import { useContext, useState } from 'react';
import { Alert } from 'react-native';

import LoadingOverlay from '../components/ui/LoadingOverlay';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import { AuthContext } from '../store/auth-context';

function SignupScreen() {
  const [isAuthenticating, setisAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  // ______________________________________________________________________
  async function signupHandler({ email, password }) {
    setisAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (err) {
      Alert.alert('Authentication failed', 'Could not create user.');
      setisAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
