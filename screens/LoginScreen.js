import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Image, Input } from '@rneui/base'
import { StatusBar } from 'expo-status-bar'


const LoginScreen = ( {navigation} ) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = () => {

    }
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <StatusBar style='auto'/>
        <Image
            source={require("../image/chat.jpg")}
            style={{ width: 200, height: 200 }}
         />

         <View style={styles.inputContainer}>
            <Input placeholder='Email'
             
             type="email"
             value={email}
             onChangeText={(text) => setEmail(text)}
             />
            <Input placeholder='Password'
             secureTextEntry
             type="password"
             value={password}
             onChangeText={(text) => setPassword(text)}
             />
         </View>

         <Button containerStyle={styles.button} onPress={signIn} title="login" />
         <Button onPress={() => navigation.navigate("Register")} containerStyle={styles.button} type='outline' title="Register" />
         <View style={{ height: 150 }} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white'
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,
    },
})