import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import COLORS from '../constants/colors';
import FONTS from '../constants/fonts';

const NumberContainer = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.textNumber}>
                {props.children}
            </Text>
        </View>
    );
};

export default NumberContainer;

const styles = StyleSheet.create({
    
    container: {
        padding:5,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: COLORS.primary
    },
    textNumber:{
        color: COLORS.opcional,
        fontSize: FONTS.h1
    }
});
