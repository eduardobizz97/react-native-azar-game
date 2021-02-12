import React from 'react';
import { Button, StyleSheet, View, Image } from 'react-native';

import Card from '../components/Card';
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
                    source={{uri: 'https://stillmedab.olympic.org/media/Images/OlympicOrg/News/2019/12/11/2019-12-11-mountain-day-featured-01.jpg?interpolation=lanczos-none&resize=*:*'}}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
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
    }
});

export default GameOverScreen;


