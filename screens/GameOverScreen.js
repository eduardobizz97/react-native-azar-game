import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import TitleText from '../components/textsStyles/TitleText';

import COLORS from '../constants/colors';
import FONTS from '../constants/fonts';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText style={styles.outputText}>
                The game is over!
            </TitleText>
            <TitleText style={styles.outputText}>
                Number of rounds: {props.roundsNumber}
            </TitleText>
            <TitleText style={styles.outputText}>
                The number was:
            </TitleText>
            <Card style={styles.numberChosen}>
                <NumberContainer>
                    {props.userChoice}
                </NumberContainer>
                <Button color={COLORS.primary} onPress={props.onNewGame} title='Restart Game' />
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    outputText: {
        fontSize: FONTS.h1,
        color: COLORS.primary
    },
    numberChosen: {
        width: 300,
        padding: 20,
        marginVertical: 25
    }
});

export default GameOverScreen;


