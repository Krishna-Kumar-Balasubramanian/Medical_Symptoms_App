import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  SafeAreaView,
} from "react-native";
import SignInScreen from "./assets/src/screens/SignInScreen";
import Navigation from "./assets/src/navigation";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <SafeAreaView style={styles.root}>
      <Navigation />
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#2D3F57',
  },
});
