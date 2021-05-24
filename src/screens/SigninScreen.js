import React, { useState, useContext } from  'react';
import { View, StyleSheet,TouchableOpacity } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import AuthForm from './components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';

const SigninScreen = ({ navigation }) => {
    const { state, signin } = useContext(AuthContext);


    return (
        <View style={styles.container}>
            <AuthForm 
                headerText="Sign in for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign in"
                onSubmit={signin}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={styles.linkStyle}>
                <Text>Don't have an account? Sign up instead</Text>
            </TouchableOpacity>
            
        </View>
    )
}

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;