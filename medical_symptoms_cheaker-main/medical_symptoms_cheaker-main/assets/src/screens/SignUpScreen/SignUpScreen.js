import { View, Text, StyleSheet, useWindowDimensions, LogBox } from 'react-native'
import React, { useState } from 'react'
import Customerinput from '../../components/Customerinput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { auth } from '../../../../firebase';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const SignUpScreen = ({ navigation }) => {
  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password).then(cred => {
      alert('Signed Up Successfully!');
      var user = cred.user;
      useremail = user.email;
      console.log(user.email);
      updateProfile(auth.currentUser, { displayName: username }).then(() => {
        navigation.navigate("Home", { name: username })
      }).catch(
        (err) => console.log(err)
      );
    }).catch((error) => {
      alert('Sign Up Error: ' + error.message);
    });
  }

  const onSignInPressed = () => {
    navigation.navigate("Sign In")
  }

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Create an Account</Text>
      <Customerinput placeholder="Name" value={username} setValue={setUsername} />
      <Customerinput placeholder="Email" value={email} setValue={setEmail} />
      <Customerinput placeholder="Password" value={password} setValue={setPassword} secureTextEntry />
      <CustomButton text="Register" onPress={handleSignup} />
      <CustomButton text="Login" onPress={onSignInPressed} />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: "#2D3F57",
    height: "100%",

  },
  logo: {
    width: 100,
    maxWidth: 300,
    maxHeight: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#051C60",
    margin: 10,
    color: "white"
  }
})
export default SignUpScreen