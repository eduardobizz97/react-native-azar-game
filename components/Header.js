import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

import COLORS from '../constants/colors';
import FONTS from '../constants/fontsSizes';
import TitleText from './textsStyles/TitleText';

const Header = props => {
    return(
        <View style={styles.header}>
            <TitleText style={styles.headerTitle}>{props.title}</TitleText>
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
    
});

export default Header;