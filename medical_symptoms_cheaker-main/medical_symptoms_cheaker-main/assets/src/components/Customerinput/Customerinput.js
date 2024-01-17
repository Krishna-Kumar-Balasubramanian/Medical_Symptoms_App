import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const Customerinput = ({ value, setValue, placeholder, secureTextEntry, required }) => {
  return (
    <View style={styles.container}>
        <TextInput 
        value={value}
        onChangeText={setValue}
        placeholder={placeholder} 
        style={styles.input}
        secureTextEntry = {secureTextEntry} 
        required = {required}
        />
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'white',
        width: '100%',
        borderColor:'#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,  
        paddingHorizontal: 10,
        marginVertical: 5,
      },
    input: {
       padding: 20,
       color:"white",
       fontSize: 18,
    },
    placeholder: {
      color: 'white'
    }
});
export default Customerinput