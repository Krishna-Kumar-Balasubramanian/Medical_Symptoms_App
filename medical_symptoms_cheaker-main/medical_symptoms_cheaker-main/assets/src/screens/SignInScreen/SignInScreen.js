import { View, Text, Image, StyleSheet, useWindowDimensions, Button, LogBox } from 'react-native'
import React, { useState } from 'react'
import Logo from '../../../images/health.png';
import Customerinput from '../../components/Customerinput';
import { auth } from '../../../../firebase'
import { signInWithEmailAndPassword } from "firebase/auth";

const SignInScreen = ({ navigation }) => {
  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { height } = useWindowDimensions();
  var useremail = '';

  const onSignInPressed = () => {
    if (!email || !password) {
      alert("Enter valid Email & Password.")
    } else {
      signInWithEmailAndPassword(auth, email, password).then(cred => {
        console.log('Logged in with: ', cred);
        var user = cred.user;
        useremail = user.displayName;
        console.log(user.displayName);
        navigation.navigate("Home", { name: useremail })
      }).catch((error) => {
        alert("Invalid Username or Password!")
      });
    }
  }

  const onSignUpPressed = () => {
    console.warn("register");
    navigation.navigate("Sign Up");
  }

  return (
    <View style={styles.root}>
      <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />
      <Customerinput placeholder="Email" value={email} setValue={setEmail} />
      <Customerinput placeholder="Password" value={password} setValue={setPassword} secureTextEntry required />
      <Button style={[styles.container, styles['container_PRIMARY']]} text="Sign In" title="Sign In" onPress={onSignInPressed} testID='loginbtn'>Sign In</Button>
      <Text style={[styles.text, styles['text_${type}']]}>Don't have an Account?</Text>
      <Button title="Create Account" onPress={onSignUpPressed} testID='signupbtn' style={[styles.container, styles['container_PRIMARY'], { backgroundColor: "#ff6666" }]} />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: "#2D3F57",
    height: '100%'

  },
  logo: {
    width: 100,
    maxWidth: 300,
    maxHeight: 200,
  },
  container: {
    backgroundColor: '#3B71F3',
    width: '100%',
    padding: 15,
    marginVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  container_PRIMARY: {
    backgroundColor: '#3B71F3',
  },
  container_TERTIARY: {
    backgroundColor: 'white',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  text_TERTIARY: {
    color: 'grey',
  }
})
export default SignInScreen