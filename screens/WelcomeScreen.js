import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../store/auth-context';

function WelcomeScreen() {
  const [fetchedMessage, setfetchedMessage] = useState("");
  const authCtx = useContext(AuthContext);
  // console.log("🪚 authCtx:", authCtx);
  const token = authCtx.token;

  // ______________________________________________________________________
  useEffect(() => {
    axios.get(
      "https://react-native-course-5bb70-default-rtdb.europe-west1.firebasedatabase.app/message.json?auth=" + token
    ).then((response) => {
      setfetchedMessage(response.data);
    });
  }, [token]);

  // ______________________________________________________________________
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
