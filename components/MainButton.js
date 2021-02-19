import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Touchable, Platform, TouchableNativeFeedback } from 'react-native';

import COLORS from '../constants/colors';

const MainButton = (props) => {
    let ButtonComponent = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        ButtonComponent = TouchableNativeFeedback;
    }

    return (
        <View style={styles.buttonContainer}>
            <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
                <View style={[styles.button, props.style, { backgroundColor: props.color }]}>
                    <Text style={styles.buttonText}>
                        {props.children}

                    </Text>
                </View>
            </ButtonComponent>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 40,
        overflow: 'hidden',
        
    },
    button: {
        textAlign: 'center',
        backgroundColor: COLORS.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 40,

    },
    buttonText: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 18,
        textAlign: 'center'
    }
});

export default MainButton;

