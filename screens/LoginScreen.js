import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Image, Input } from '@rneui/base'
import { StatusBar } from 'expo-status-bar'


const LoginScreen = () => {
  return (
    <View>
        <StatusBar style='auto'/>
        <Image
            source={require("../image/chat.jpg")}
            style={{ width: 200, height: 200 }}
         />

         <View style={styles.inputContainer}>
            <Input placeholder='Email' autoFocus type="email" />
            <Input placeholder='Password' secureTextEntry type="password" />
         </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    inputContainer: {

    }
})