import React, { useContext } from  'react';
import { View, StyleSheet,TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import AuthForm from './components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';
import NavLink from '../context/NavLink';

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
            <NavLink 
                routeName = "Signup"
                text = "Don't have an account? Sign up instead"
            />
            
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
    }
});

export default SigninScreen;