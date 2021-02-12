import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FONTS from '../../constants/fonts';

const TitleText = props => {
    return (

        <Text style={[styles.title, props.style]}>{props.children}</Text>

    );
};

const styles = StyleSheet.create({

    title: {
        color: 'white',
        fontSize: FONTS.h1,
        fontFamily: 'Orbitron'
    }
});



export default TitleText;