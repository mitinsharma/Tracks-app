import React, { useContext } from  'react';
import { View, StyleSheet } from 'react-native';
import AuthForm from './components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';
import NavLink from '../context/NavLink';

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
            <NavLink 
                routeName = "Signin"
                text = "Already have an account? Sign in instead"
            />
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
    }
});

export default SignupScreen;