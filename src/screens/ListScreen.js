import React from 'react';
import { Text, StyleSheet, FlatList} from "react-native";

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age: 34 },
        { name: 'Friend #2', age: 32 },
        { name: 'Friend #3', age: 84 },
        { name: 'Friend #4', age: 72 },
        { name: 'Friend #5', age: 12 },
        { name: 'Friend #6', age: 22 },
        { name: 'Friend #7', age: 32 },
        { name: 'Friend #8', age: 23 },
        { name: 'Friend #9', age: 56 },
        { name: 'Friend #10', age: 73 }
    ];

    return (
        <FlatList
            keyExtractor = {friend => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return (
                    <Text style={styles.textStyle}>
                    { item.name } - age {item.age}
                </Text>
            )
            }}
        />
    );

};
const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }

});


export default ListScreen;


