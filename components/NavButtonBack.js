import * as React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {colors, display, textStyles, icon} from '../constants/StyleSheet'

export default function NavButtonBack(props) {

    console.info(".........>>>", props )
    return (
        <TouchableOpacity style={[styles.container, styles.shadow]} >
            <Image style={styles.back} source={icon.BACK}/>
        </TouchableOpacity>
    );
}


// NavButtonBack.navigationOptions = ({navigation}) ={
//     header: null,
// };

const styles = StyleSheet.create({
    container: {
        // paddingRight: display.MARGIN_DEFAULT
    },
    back: {
        // width: 32,
        // height: 32,
        // borderRadius: 15
    }
});