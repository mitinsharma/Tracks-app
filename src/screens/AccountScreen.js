import React, { useContext } from  'react';
import {View, StyleSheet, Text} from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from './components/Spacer'; 
import { Context as AuthContext } from '../context/AuthContext'; 

const AccountScreen = (navigation) => {
    const { signout } = useContext(AuthContext);

    return <>
        <Text style={{ fontSize:48}}>AccountScreen</Text>
        <Spacer>
            <Button title="Sign out" onPress={signout}></Button>
        </Spacer>
    </>
}


const styles = StyleSheet.create({});

export default AccountScreen;