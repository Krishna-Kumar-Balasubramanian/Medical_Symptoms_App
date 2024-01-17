import { Button, View, Text, Linking, StyleSheet, LogBox } from 'react-native'
import React, { useCallback } from 'react'

const MedReccs = ({ route, navigation }) => {
  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();

  const { med_data, name } = route.params;

  const returnHome = async () => {
    navigation.navigate("Home", { name: name });
  }

  const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      }
    }, [url]);
    return <Button
      style={styles.link}
      title={children}
      onPress={handlePress} />;
  };

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Text style={styles.textCont}>Medical Recommendations:</Text>

        {med_data.map((element, key) => (
          <View key={key} style={styles.textData}>
            <Text style={styles.text}>{"\u2023 "}Name: {element.name}</Text>
            <Text style={styles.text}>Address: {element.address}</Text>
            <OpenURLButton url={"tel://+" + element.phone}>Call</OpenURLButton>
            <OpenURLButton url={element.link}>Open Maps for Directions</OpenURLButton>
          </View>
        ))}
      </View>
      <Text>{"\n"}</Text>
      <Button title="Return to Homepage" onPress={returnHome} style={[styles.btncontainer, styles['container_PRIMARY'], { backgroundColor: "#ff6666" }]} />
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
  container: {
    padding: "3%",
    backgroundColor: "#FFB6C1",
    fontSize: 100,
  },
  button: {
    fontSize: 20,
    maxWidth: "50%",
    marginHorizontal: "50%",
  },

  textCont: {
    alignItems: 'center',
    color: "black",
    padding: "1%",
    fontSize: 20,
  },

  text: {
    color: "black",
    padding: "2%",
    fontSize: 18,
  },
  textData: {
    color: "black",
    padding: "2%",
    fontSize: 24,
  },

  textfield: {
    marginTop: "5%",
    color: "black"
  },

  link: {
    width: "50%",
    marginHorizontal: "5%",
    borderRadius: 5
  },

  btncontainer: {
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
  text_TERTIARY: {
    color: 'grey',
  }

})

export default MedReccs