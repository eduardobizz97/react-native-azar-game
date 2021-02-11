import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

import COLORS from '../constants/colors';
import FONTS from '../constants/fonts';

const Header = props => {
    return(
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 120,
        paddingTop: 36,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle:{
       color: 'white',
       fontSize: FONTS.h1
    }
});

export default Header;