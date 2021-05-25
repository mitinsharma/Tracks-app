import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Spacer from '../screens/components/Spacer';
import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, text, routeName }) => { 
    return (
        <TouchableOpacity onPress={() => navigation.navigate(routeName)} style={styles.linkStyle}>
            <Spacer>
                <Text>{text}</Text>
            </Spacer>
        </TouchableOpacity> 
    );
};

const styles = StyleSheet.create({

    linkStyle: {
        color: 'blue'
    }
});

export default withNavigation(NavLink);