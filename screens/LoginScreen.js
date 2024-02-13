//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenWrapper from '../components/screenWrapper';

// create a component
const MyComponent = () => {
    return (
        <ScreenWrapper >
            <View /*style={styles.container}*/>
            <Text>LOginscfrren</Text>
        </View>
        </ScreenWrapper>
        
    );
};

// define your styles
/*const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});*/

//make this component available to the app
export default MyComponent;
