import { useState } from 'react';
import { Alert } from 'react-native';

import LoadingOverlay from '../components/ui/LoadingOverlay';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';

function SignupScreen() {
  const [ isAuthenticating, setisAuthenticating ] = useState( false );

  // ______________________________________________________________________
  async function signupHandler( { email, password } ) {
    setisAuthenticating( true );
    try {
      await createUser( email, password );
    } catch ( err ) {
      Alert.alert( 'Authentication failed', 'Could not create user.' );
    }
    setisAuthenticating( false );
  }

  if ( isAuthenticating ) {
    return <LoadingOverlay message="Creating user..." />
  }

  return <AuthContent onAuthenticate={ signupHandler } />;
}

export default SignupScreen;
