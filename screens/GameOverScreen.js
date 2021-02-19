import React, { useState, useEffect } from 'react';
import {
    Button,
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    ScrollView,
    SafeAreaView
} from 'react-native';

import Card from '../components/Card';
import MainButton from '../components/MainButton';
import NumberContainer from '../components/NumberContainer';
import TitleText from '../components/textsStyles/TitleText';

import COLORS from '../constants/colors';
import FONTS from '../constants/fontsSizes';

const GameOverScreen = props => {

    const [availableDeviceWidth, setAvailableDeviceWidth] = useState(
        Dimensions.get('window').width
    );

    const [availableDeviceHeight, setAvailableDeviceHeight] = useState(
        Dimensions.get('window').height
    );

    useEffect(() => {
        const updateLayout = () => {
            setAvailableDeviceWidth(Dimensions.get('window').width);
            setAvailableDeviceHeight(Dimensions.get('window').height);
        };

        Dimensions.addEventListener('change', updateLayout);

        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        };
    });

    let imageContainerLandscapeMode = {};

    if (availableDeviceWidth > 412) {

        imageContainerLandscapeMode = {
            width: availableDeviceWidth * 0.5,
            height: availableDeviceWidth * 0.5,
            borderRadius: (availableDeviceWidth * 0.7) / 2,
            marginVertical: availableDeviceHeight / 30
        };
    }

    if (availableDeviceWidth > 1000) {

        imageContainerLandscapeMode = {
            width: availableDeviceWidth * 0.2,
            height: availableDeviceWidth * 0.2,
            borderRadius: (availableDeviceWidth * 0.7) / 2,
            marginVertical: availableDeviceHeight / 30,
            borderColor: 'black',
        };
    }


    return (

        <ScrollView>
            <View style={styles.screen}>
                <TitleText style={styles.outputText}>
                    The game is over!
                    {availableDeviceWidth > 1000 ? 'si' : 'no'}
                </TitleText>
                <View style={[styles.imageContainer, imageContainerLandscapeMode]}>
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

                <Card style={styles.numberChosenContainer}>
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
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 20
    },
    image: {
        width: '100%',
        height: '100%'
    },
    numberChosenContainer: {
        width: 300,
        padding: 20,
        marginVertical: 15,
        marginVertical: Dimensions.get('window').height / 60
    },
    highlight: {
        color: COLORS.secondary
    },
    outputText: {
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20,
        marginVertical: 5,
        fontSize: FONTS.h1,
        color: COLORS.primary,
        textAlign: 'center'
    },
    newGameButton: {
        marginVertical: 10
    }
});

export default GameOverScreen;


