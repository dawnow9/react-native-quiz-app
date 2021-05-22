import * as React from 'react';
import {Button, Text, View} from "react-native";

const App = ({ navigation, route }) => {
    const previousAnswers = route.params;

    return (
        <View>
            <Text>Third Question</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus lacinia lobortis.</Text>
            <Button
                title="Answer A"
                onPress={() => navigation.navigate('FourthQuestion', {
                    ...previousAnswers,
                    question3: 'A'
                })}
            />
            <Button
                title="Answer B"
                onPress={() => navigation.navigate('FourthQuestion', {
                    ...previousAnswers,
                    question3: 'B'
                })}
            />
        </View>
    )
}

export default App
