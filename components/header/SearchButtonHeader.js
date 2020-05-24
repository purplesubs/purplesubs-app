import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import ButtonHeader from './ButtonHeader'

export default function SearchButtonHeader(props) {
    return (
        <View style={[props.style, styles.container]}>
            <ButtonHeader icon={props.searchIcon}
                          size={props.size}
                          color={props.color}/>
            <ButtonHeader icon={props.filterIcon}
                          size={props.size}
                          color={props.color}
                          style={styles.filterButtonHeader}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    filterButtonHeader:{
        marginLeft: 10
    }

});