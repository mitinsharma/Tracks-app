import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './Spacer';


const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>
            <View>
                <Spacer>
                    <Text h3>{headerText}</Text>
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

                
                {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null }

                <Spacer>
                    <Button title={submitButtonText} onPress={() => onSubmit({email, password})}></Button>
                </Spacer>
            </View>
        </>
    );
};


const styles = StyleSheet.create({
    errorMessage: {
        color: 'red',
        textAlign: 'center',
        fontSize: 16,
        marginVertical: 10
    }
});

export default AuthForm;
