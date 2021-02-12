import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FONTS from '../../constants/fontsSizes';

const TitleText = props => {
    return (
        <View>
            <Text style={[styles.title, props.style]}>{props.children}</Text>
        </View>

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