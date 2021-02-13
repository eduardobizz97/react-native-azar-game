import React from 'react';
import { Button, StyleSheet, View, Text, Image } from 'react-native';

import Card from '../components/Card';
import MainButton from '../components/MainButton';
import NumberContainer from '../components/NumberContainer';
import TitleText from '../components/textsStyles/TitleText';

import COLORS from '../constants/colors';
import FONTS from '../constants/fontsSizes';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText style={styles.outputText}>
                The game is over!
            </TitleText>
            <View style={styles.imageContainer}>
                <Image
                    // source={require("../assets/images/success.png")}
                    fadeDuration={300}
                    source={{ uri: 'https://stillmedab.olympic.org/media/Images/OlympicOrg/News/2019/12/11/2019-12-11-mountain-day-featured-01.jpg?interpolation=lanczos-none&resize=*:*' }}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <TitleText style={styles.outputText}>
                Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> round(s) to guess the number
            </TitleText>

            <Card style={styles.numberChosen}>
                <TitleText style={styles.outputText}>
                    The number was:
                </TitleText>
                <NumberContainer style={styles.highlight}>
                    {props.userChoice}
                </NumberContainer>
                <MainButton
                    style={styles.newGameButton}
                    color={COLORS.primary}
                    onPress={props.onNewGame}
                    >
                    New game

                </MainButton>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    outputText: {
        marginVertical: 5,
        fontSize: FONTS.h1,
        color: COLORS.primary,
        textAlign: 'center'
    },
    numberChosen: {
        width: 300,
        padding: 20,
        marginVertical: 15
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width: '100%',
        height: '100%'
    },
    highlight: {
        color: COLORS.secondary
    },
    newGameButton:{
        marginVertical: 10
    }
});

export default GameOverScreen;


