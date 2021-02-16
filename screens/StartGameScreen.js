import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    Dimensions
} from "react-native";

import Card from '../components/Card';
import Input from '../components/Input';
import MainButton from '../components/MainButton';
import NumberContainer from '../components/NumberContainer';
import BodyText from '../components/textsStyles/BodyText';

import COLORS from '../constants/colors';
import FONTS from '../constants/fontsSizes';

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();


    const numberInputHandler = inputText => {

        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (
            isNaN(chosenNumber) ||
            chosenNumber <= 0 ||
            chosenNumber > 99
        ) {
            Alert.alert('Warning',
                'Enter a number between 1-99,',
                [{
                    text: 'Okay',
                    style: 'destructive',
                    onPress: resetInputHandler
                }
                ]
            );
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput;

    if (confirmed) {

        confirmedOutput =
            <Card style={styles.output}>
                <Text style={styles.outputText}>
                    Chosen number:
                </Text>
                <NumberContainer>
                    {selectedNumber}
                </NumberContainer>
                <View style={styles.startButton} >
                    <MainButton
                        color={COLORS.primary}
                        onPress={() => props.onStartGame(selectedNumber)}
                    >
                        Start game
                    </MainButton>
                </View>

            </Card>
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss
        }}>
            <View style={styles.screen}>
                <BodyText style={styles.title}>
                    Start a new game
                </BodyText>
                <Card style={styles.inputContainer}>
                    <Text style={styles.inputTitle}>
                        Select a number!
                    </Text>
                    <Input
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType="number-pad"
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                        style={styles.textInput}
                    />
                    <View style={styles.buttonContainer}>
                        <View>
                            <MainButton
                                style={styles.button}
                                onPress={resetInputHandler}
                                color={COLORS.opcional}>
                                Reset
                            </MainButton>
                        </View>
                        <View>
                            <MainButton
                                style={styles.button}
                                onPress={confirmInputHandler}
                                color={COLORS.secondary} >
                                Confirm
                            </MainButton>
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'

    },
    title: {
        fontSize: FONTS.h1,
        marginVertical: 10,
        fontFamily: 'open-sans-bold'

    },
    inputContainer: {
        padding: 20,
        width: '80%',
        minWidth: 300,
        maxWidth: '95%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    inputTitle: {
        fontSize: FONTS.h3
    },
    textInput: {
        maxWidth: 200,
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    button: { 
        minWidth: '25%'
        
        
    },
    output: {
        padding: 10,
        marginVertical: 15
    },
    outputText: {
        color: COLORS.primary,
        fontSize: FONTS.h1
    },
    startButton: {
        marginTop: 20
    }


});

export default StartGameScreen;
