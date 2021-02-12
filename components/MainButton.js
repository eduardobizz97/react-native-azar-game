import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Touchable } from 'react-native';

import COLORS from '../constants/colors';

const MainButton = (props) => {
    return (<TouchableOpacity onPress={props.onPress}>
        <View style={[styles.button,props.style]}>
            <Text style={styles.buttonText}>
                {props.children}

            </Text>
        </View>
    </TouchableOpacity>);
};

const styles = StyleSheet.create({
    button: {
        textAlign: 'center',
        backgroundColor: COLORS.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 40,
        transform: ''
    },
    buttonText: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 18
    }
});

export default MainButton;

