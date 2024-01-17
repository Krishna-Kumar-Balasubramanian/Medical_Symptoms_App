import { Button, View, Text, TextInput, StyleSheet, LogBox } from 'react-native'
import React, { useState, useEffect } from 'react'

const ResultScreen = ({ route, navigation }) => {
  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();
  const [zipcode, setZipCode] = useState('');
  const { pred, perc, list, tier, name } = route.params;
  const truth = tier != 1 && perc > 15;
  let med_data = []

  const recommend = async () => {
    console.log(zipcode);
    const ipdata = JSON.stringify(zipcode);
    await fetch('http://10.0.2.2:5001/recommend', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: ipdata
    }).then((response) => response.json())
      .then((json) => {
        if (json.result) {
          console.log(json.result)
        } else {
          med_data = json.response
          console.log(json.response[0])
        }
      })
      .catch((error) => {
        console.error(error);
      });
    navigation.navigate("MedReccs", { med_data: med_data ? med_data : null, name: name });
  }

  const returnHome = async () => {
    navigation.navigate("Home", { name: name });
  }

  return (
    <View style={styles.root}>
      <View style={styles.container}>

        <Text style={styles.text}>Diagnosis:</Text>
        <Text style={styles.textData}> {pred} {"\n"}({perc} {"%)"}</Text>
        <Text style={styles.text}>Probable List of Diagnoses:</Text>

        {Object.keys(list).map((key, index) => (
          <Text style={styles.textCont}>{"\u2023 "}{key} {": "} {list[key]}%</Text>
        ))}

      </View>
      {truth ? (<Text style={[styles.text, { color: "white" }]}>Recommendation: Seek medical attention.{"\n\n"}
        Find Nearest Medical Resources: {" "}
        <View style={styles.inputcont}>
          <TextInput
            style={styles.input}
            value={zipcode}
            onChangeText={setZipCode}
            placeholder="ZIP Code"
          />
        </View>
        <Button style={styles.button} title="Go" testID="go" onPress={recommend} />
        <Text>{"\n\n"}</Text>
        <Button style={styles.button} title="Return to Homepage" onPress={returnHome} />

      </Text>) : (<Text style={[styles.text, { color: "white" }]}>Diagnostic: No actions needed but continue to monitor health. {"\n\n"}
        <Button style={styles.button} title="Return to Homepage" onPress={returnHome} /></Text>

      )}

    </View>

  );
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

  container: {
    padding: "3%",
    backgroundColor: "#FFB6C1",
    fontSize: 100,
    marginHorizontal: "5%",
  },
  button: {
    alignSelf: "center",
    alignItems: "center",
    fontSize: 20,
    marginLeft: 10,
  },

  textCont: {
    marginTop: "1%",
    padding: '3%',
    color: "black",
    fontSize: 20
  },

  inputcont: {
    width: '100%',
    borderColor: 'white',
    color: 'white',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {
    padding: 10,
    color: "white",
    fontSize: 18,
    width: '100%'
  },
  placeholder: {
    color: 'white'
  },

  text: {
    marginTop: "1%",
    padding: '3%',
    color: "black",
    fontSize: 18
  },
  textData: {
    marginTop: "1%",
    padding: '3%',
    color: "black",
    fontSize: 24,
    fontWeight: 'bold'
  },

  textfield: {
    marginTop: "5%",
    color: "black"
  }
})

export default ResultScreen