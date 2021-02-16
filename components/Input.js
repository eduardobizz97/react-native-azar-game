import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

const Input = props => {
    return (
        <TextInput
            {...props}
            style={[styles.input, props.style]} />

    )
        ;
};

const styles = StyleSheet.create({
    input: {
        marginVertical: 20,
        borderBottomWidth: 1,
        width: 75,
        borderColor: Colors.primary,
        color: Colors.primary,
        fontSize: 40
    }
});

export default Input;


