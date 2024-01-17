import { View, Text, StyleSheet, LogBox } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton/CustomButton';
import { auth } from '../../../../firebase'

const Homepage = ({ route, navigation }) => {
  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();

  const { name } = route.params ? route.params : null;

  const handleSignOut = () => {
    auth.signOut()
      .then(() => {
        navigation.replace("Sign In")
      })
      .catch(error => alert(error.message))
  }

  const Symptoms = () => {
    console.warn("diagnosis");
    navigation.navigate("Symptoms", { name: name });
  }

  return (
    <View style={styles.root}>
      <Text style={styles.text}>Welcome,</Text>
      <Text style={[styles.text, { fontSize: 24, fontWeight: 'bold' }]}>{name}</Text>
      <Text>{"\n"}</Text>
      <Text style={styles.text}>Click Below to Begin Diagnosis</Text>
      <CustomButton text="Enter Symptoms" onPress={Symptoms} style={styles.textbtn} />
      <Text>{"\n"}</Text>
      <CustomButton text="Sign Out" onPress={handleSignOut} style={styles.textbtn} />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    paddingTop: "3%",
    padding: 20,
    backgroundColor: "#2D3F57",
    height: "100%",
    color: "white"
  },

  text: {
    marginTop: "1%",
    padding: 20,
    color: "white",
    fontSize: 18
  },

  textbtn: {
    width: "80%",
  }
})

export default Homepage