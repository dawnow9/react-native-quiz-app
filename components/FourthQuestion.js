import * as React from 'react';
import {Button, Text, View} from "react-native";

const App = ({ navigation, route }) => {
    const previousAnswers = route.params;

    return (
        <View>
            <Text>Fourth Question</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus lacinia lobortis.</Text>
            <Button
                title="Answer A"
                onPress={() => navigation.navigate('FifthQuestion', {
                    ...previousAnswers,
                    question4: 'A'
                })}
            />
            <Button
                title="Answer B"
                onPress={() => navigation.navigate('FifthQuestion', {
                    ...previousAnswers,
                    question4: 'B'
                })}
            />
        </View>
    )
}

export default App
