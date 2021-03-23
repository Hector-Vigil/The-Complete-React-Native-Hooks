import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';


const HomeScreen = ({navigation}) => {

    return (
        <View>
            <Text style={styles.text}>HomeScreen</Text>
            <Button
                title="Go to components demo"
                onPress={() => navigation.navigate('Components')}
            />
            <Button
                title="Go to list demo"
                onPress={() => navigation.navigate('List')}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default HomeScreen;
