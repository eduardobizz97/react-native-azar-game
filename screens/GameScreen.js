import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Alert, ScrollView, Text, FlatList, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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

const renderListItem = (listLength, itemData) => (

    <View style={styles.listItem}>
        <BodyText>#{listLength - itemData.index}</BodyText>
        <BodyText>
            {itemData.item}
        </BodyText>
    </View>
);

const GameScreen = props => {
    const initialGuess = generateRandomBetween(1, 100, props.userChoise)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);
    const [ availableDeviceWidth, setAvailableDeviceWidth] = useState(
        Dimensions.get('window').width
    );
    const [ availableDeviceHeight, setAvailableDeviceHeight] = useState(
        Dimensions.get('window').height
    );
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onGameOver } = props;

    useEffect(()=>{
        const updateLayout = () => {
            setAvailableDeviceWidth(Dimensions.get('window').width);
            setAvailableDeviceHeight(Dimensions.get('window').height);
        };
        Dimensions.addEventListener('change',updateLayout);

        return ()=>{
            Dimensions.removeEventListener('change',updateLayout);
        };
    });

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(pastGuesses.length);
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
            currentLow.current = currentGuess + 1;
        }
        const nextNumber = generateRandomBetween(
            currentLow.current,
            currentHigh.current,
            currentGuess
        );
        setCurrentGuess(nextNumber);
        // setRounds(curRounds => curRounds + 1);
        setPastGuesses(curPastGuesses => [nextNumber.toString(), ...curPastGuesses]);
    };

    if (availableDeviceHeight < 500) {
        return (
            <View style={styles.screen}>
                <Card style={styles.container}>
                    <BodyText>
                        Opponent's guess
                    </BodyText>
                    <View style={styles.gameButtons}>
                        <MainButton
                            color={COLORS.secondary}
                            onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="md-remove" size={24} color="white" />
                        </MainButton>
                        <NumberContainer>
                            {currentGuess}
                        </NumberContainer>
                        <MainButton
                            color={COLORS.primary}
                            onPress={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name="add" size={24} color="white" />
                        </MainButton>
                    </View>
                </Card>
                <View style={styles.listConstainer}>
                    {/* {<ScrollView contentContainerStyle={styles.scrollView}>
                    {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
                </ScrollView>} */}
                    <FlatList
                        keyExtractor={item => item}
                        data={pastGuesses}
                        renderItem={renderListItem.bind(this, pastGuesses.length)}
                        contentContainerStyle={styles.scrollView}
                    />
                </View>
            </View>
        );
    }

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
                        <Ionicons name="md-remove" size={24} color="white" />
                    </MainButton>
                    <MainButton
                        color={COLORS.primary}
                        onPress={nextGuessHandler.bind(this, 'greater')}>
                        <Ionicons name="add" size={24} color="white" />
                    </MainButton>
                </View>
            </Card>
            <View style={styles.listConstainer}>
                {/* {<ScrollView contentContainerStyle={styles.scrollView}>
                    {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
                </ScrollView>} */}
                <FlatList
                    keyExtractor={item => item}
                    data={pastGuesses}
                    renderItem={renderListItem.bind(this, pastGuesses.length)}
                    contentContainerStyle={styles.scrollView}
                />
            </View>
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
        justifyContent: 'space-evenly',
        width: '100%',
        marginTop: Dimensions.get('window').height > 600 ? 30 : 10
    },
    listConstainer: {
        flex: 1,
        width: Dimensions.get('window').width > 350 ? '60%' : '80%'

    },
    scrollView: {
        paddingBottom: 20,
        flexGrow: 1,

        justifyContent: 'flex-start'

    },
    listItem: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%'
    }
});

export default GameScreen;


