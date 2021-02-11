import React from 'react';
import { View,StyleSheet } from "react-native";

import COLORS from '../constants/colors';

const Card = props =>{
    return(
        <View style={[styles.card,props.style]}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.2,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white'
    }
});

export default Card;