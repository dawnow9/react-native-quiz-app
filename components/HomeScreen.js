import * as React from 'react';
import {Button, Text, View} from "react-native";

const App = ({ navigation }) => {
    return (
        <View>
            <Text>Quiz App</Text>
            <Button
                title="Start Quiz"
                onPress={() => navigation.navigate('FirstQuestion')}
            />
        </View>
    )
}

export default App
