import { useState } from 'react';

import LoadingOverlay from '../components/ui/LoadingOverlay';
import AuthContent from '../components/Auth/AuthContent';
import { login } from '../util/auth';

function LoginScreen() {
  const [isAuthenticating, setisAuthenticating] = useState(false);

  // ______________________________________________________________________
  async function loginHandler({ email, password }) {
    setisAuthenticating(true);
    await login(email, password);
    setisAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Login you in..." />
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
