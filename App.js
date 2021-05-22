import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen'
import FirstQuestion from "./components/FirstQuestion";
import SecondQuestion from "./components/SecondQuestion";
import ThirdQuestion from "./components/ThirdQuestion";
import FourthQuestion from "./components/FourthQuestion";
import FifthQuestion from "./components/FifthQuestion";
import Summary from "./components/Summary";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={HomeScreen}
        />
        <Stack.Screen
            name="FirstQuestion"
            component={FirstQuestion}
        />
        <Stack.Screen
            name="SecondQuestion"
            component={SecondQuestion}
        />
        <Stack.Screen
            name="ThirdQuestion"
            component={ThirdQuestion}
        />
        <Stack.Screen
            name="FourthQuestion"
            component={FourthQuestion}
        />
        <Stack.Screen
            name="FifthQuestion"
            component={FifthQuestion}
        />
        <Stack.Screen
            name="Summary"
            component={Summary}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;