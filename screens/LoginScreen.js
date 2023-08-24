import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Image } from '@rneui/base'
import { StatusBar } from 'expo-status-bar'


const LoginScreen = () => {
  return (
    <View>
        <StatusBar style='auto'/>
        <Image
            source={require("../image/chat.jpg")}
            style={{ width: 200, height: 200 }}
         />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})