import React from  'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const TrackListScreen = ({ navigation }) => {
    return <>
    <Button title="Go to Track Detail" onPress={ () => navigation.navigate('TrackDetail')}></Button>
</>
}

const styles = StyleSheet.create({});

export default TrackListScreen;