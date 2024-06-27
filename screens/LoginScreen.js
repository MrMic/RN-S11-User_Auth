import { useState } from 'react';
import { Alert } from 'react-native';

import LoadingOverlay from '../components/ui/LoadingOverlay';
import AuthContent from '../components/Auth/AuthContent';
import { login } from '../util/auth';

function LoginScreen() {
  const [ isAuthenticating, setisAuthenticating ] = useState( false );

  // ______________________________________________________________________
  async function loginHandler( { email, password } ) {
    setisAuthenticating( true );
    try {
      await login( email, password );
    } catch ( err ) {
      Alert.alert( 'Authentication failed', 'Please check your credentials.' );
    }
    setisAuthenticating( false );
  }

  if ( isAuthenticating ) {
    return <LoadingOverlay message="Login you in..." />
  }

  return <AuthContent isLogin onAuthenticate={ loginHandler } />;
}

export default LoginScreen;
