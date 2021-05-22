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
                onPress={() => navigation.navigate('Summary', {
                    ...previousAnswers,
                    question5: 'A'
                })}
            />
            <Button
                title="Answer B"
                onPress={() => navigation.navigate('Summary', {
                    ...previousAnswers,
                    question5: 'B'
                })}
            />
        </View>
    )
}

export default App
