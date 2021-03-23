import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import TextScreen from "./src/screens/TextScreen";

const Stack = new createStackNavigator();

export default function App(){
  return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Components" component={ComponentScreen} />
            <Stack.Screen name="List" component={ListScreen}/>
            <Stack.Screen name="Image" component={ImageScreen}/>
            <Stack.Screen name="Counter" component={CounterScreen}/>
            <Stack.Screen name="Color" component={ColorScreen}/>
            <Stack.Screen name="Square" component={SquareScreen}/>
            <Stack.Screen name="Text" component={TextScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#152238',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
