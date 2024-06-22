import { useState } from 'react';

import LoadingOverlay from '../components/ui/LoadingOverlay';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';

function SignupScreen() {
  const [isAuthenticating, setisAuthenticating] = useState(false);

  // ______________________________________________________________________
  async function signupHandler({ email, password }) {
    setisAuthenticating(true);
    await createUser(email, password);
    setisAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
