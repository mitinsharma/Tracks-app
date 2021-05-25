import React, { useContext } from  'react';
import { View, StyleSheet } from 'react-native';
import AuthForm from './components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';
import NavLink from '../context/NavLink';
import { NavigationEvents } from 'react-navigation';

const SigninScreen = ({ navigation }) => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);

    <NavigationEvents onWillFocus = { clearErrorMessage }  />
    
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
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
});

export default SigninScreen;