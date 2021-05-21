import React, { useState, useContext } from  'react';
import { View, StyleSheet} from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign Up for Tracker</Text>
            </Spacer>
            <Spacer>
                <Input 
                    label="Email" 
                    value={email} 
                    onChangeText={setEmail} 
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </Spacer>
            <Spacer>
                <Input 
                    secureTextEntry
                    label="Password" 
                    value={password} 
                    onChangeText={setPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
            />
            </Spacer>

            
            {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null }

            <Spacer>
                <Button title="Sign up" onPress={() => signup({email, password})}></Button>
            </Spacer>
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
    errorMessage: {
        color: 'red',
        textAlign: 'center',
        fontSize: 16,
        marginVertical: 10
    }
});

export default SignupScreen;