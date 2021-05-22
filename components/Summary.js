import * as React from 'react';
import {Button, Text, View} from "react-native";

const App = ({ navigation, route }) => {
    const previousAnswers = route.params;
    const trueObject = {
        question1: 'A',
        question2: 'A',
        question3: 'A',
        question4: 'A',
        question5: 'A'
    }

    const score = () => {
        let score = 0;
        for (const [key, value] of Object.entries(previousAnswers)) {
            if (previousAnswers[key] === trueObject[key]) {
                score++
            }
        }
        return score
    }


    return (
        <View>
            <Text>Your Score</Text>
            <Text>{ score() }</Text>
            <Button
                title="Back to home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

export default App
