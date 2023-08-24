import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '@rneui/base'
import { StatusBar } from 'expo-status-bar'


const LoginScreen = () => {
  return (
    <View>
        <StatusBar style='auto'/>
      <Text>LoginScreen</Text>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})