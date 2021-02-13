import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Alert } from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import BodyText from '../components/textsStyles/BodyText';
import MainButton from '../components/MainButton';
import COLORS from '../constants/colors';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {

        return rndNum;
    }
};

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(
        generateRandomBetween(1, 100, props.userChoise)
    );
    const [rounds, setRounds] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(rounds);
        }
    }, [currentGuess, userChoice, onGameOver]);

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoice)
            || (direction === 'greater' && currentGuess > props.userChoice)) {
            Alert.alert(
                'Don\'t lie',
                'You know that this is wrong',
                [{
                    text: 'Sorry!',
                    style: 'cancel',

                }]);
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }
        const nextNumber = generateRandomBetween(
            currentLow.current,
            currentHigh.current,
            currentGuess
        );
        setCurrentGuess(nextNumber);
        setRounds(curRounds => curRounds + 1);
    };

    return (
        <View style={styles.screen}>
            <Card style={styles.container}>
                <BodyText>
                    Opponent's guess
                </BodyText>
                <NumberContainer>
                    {currentGuess}
                </NumberContainer>
                <View style={styles.gameButtons}>
                    <MainButton
                        color={COLORS.secondary}
                        onPress={nextGuessHandler.bind(this, 'lower')}>
                        Lower
                    </MainButton>
                    <MainButton
                        color={COLORS.primary}
                        onPress={nextGuessHandler.bind(this, 'greater')}>
                        Greater
                    </MainButton>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    container: {

        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        padding: 10,
        width: 300,
        
    },
    gameButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20
    }
});

export default GameScreen;


