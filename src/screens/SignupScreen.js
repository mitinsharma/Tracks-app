import React, { useState, useContext } from  'react';
import { View, StyleSheet,TouchableOpacity } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import AuthForm from './components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <AuthForm 
                headerText="Sign up for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign up"
                onSubmit={signup}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Signin')} style={styles.linkStyle}>
                <Text>Already have an account? Sign in instead</Text>
            </TouchableOpacity>        
        </View>
    )
}

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100
    },
    linkStyle: {
        padding: 15,
        fontSize: 18
    }
});

export default SignupScreen;