import React, { useState } from  'react';
import { View, StyleSheet} from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './components/Spacer';


const SignupScreen = ({ navigation }) => {
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
            <Spacer>
                <Button title="Sign up"></Button>
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
    }
});

export default SignupScreen;