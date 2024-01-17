import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import Homepage from '../screens/homepage/Homepage';
import Symptoms from '../screens/Symptoms/Symptoms';
import Dropdown from '../components/Dropdown/Dropdown';
import UserProfile from "../screens/UserProfile/UserProfile";
import MultipleSelect from '../components/MultipleSelect/MultipleSelect';
import ResultScreen from "../screens/ResultScreen";
import MedReccs from '../screens/ResultScreen/MedReccs';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Sign In" component={SignInScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="Symptoms" component={Symptoms} />
        <Stack.Screen name="DropDown" component={Dropdown} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="MultipleSelect" component={MultipleSelect} />
        <Stack.Screen name="ResultScreen" component={ResultScreen} />
        <Stack.Screen name="MedReccs" component={MedReccs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;