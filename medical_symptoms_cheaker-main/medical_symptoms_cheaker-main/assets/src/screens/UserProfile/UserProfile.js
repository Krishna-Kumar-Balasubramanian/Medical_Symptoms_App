import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Customerinput from '../../components/Customerinput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UserProfile = () => {
const navigation = useNavigation();

const onUpdateProfile = () => {
        console.warn("updated");
        navigation.navigate("Home");
 }
  return (
    <View  style={styles.root}>
        <Text>UserProfile</Text>
        <Image  source={require('../../../../assets/images/medical.png')}   style={{width: 200, height: 200, borderRadius: 400/ 2, marginTop: "30%"}} />
        <Customerinput placeholder="Pooja"  />
        <Customerinput placeholder="Srinivasan"  />
        <Customerinput placeholder="19-sep-1999"  />
        <Customerinput placeholder="Female"  />
        <Customerinput placeholder="153 cm"  />
        <Customerinput placeholder="155 lb" />
        <Customerinput placeholder="O positive"  />
        <CustomButton text="Update Profile" onPress={onUpdateProfile}/>   
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white",
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "#2D3F57",
    }
 
  });

export default UserProfile