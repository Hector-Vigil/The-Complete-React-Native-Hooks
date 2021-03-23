import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () => {
    const name = 'Hector';
    return(
        <View>
            <Text style={Styles.textStyle}>Getting started with react native</Text>
            <Text style={Styles.subHeaderStyle}>My Name is {name}</Text>
        </View>
)
};

const Styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentScreen;