import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import COLORS from '../../constants/colors';
import FONTS from '../../constants/fontsSizes';


const fontColor = () => {
    if (Platform.OS === 'android') {
        return 'white';
    } else if (Platform.OS === 'ios') {
        return COLORS.primary
    } else {
        return 'white';
    }
};

const TitleText = props => {

    return (
        <View>
            <Text style={[styles.title, props.style]}>{props.children}</Text>
        </View>

    );
};

const styles = StyleSheet.create({

    title: {
        color: fontColor(),
        fontSize: FONTS.h1,
        fontFamily: 'Orbitron'
    }
});



export default TitleText;