import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Widget from './Widget';

export default function ServiceWidget(props) {

    let serviceCount = <Text style={styles.count}>{props.count}</Text>;
    return (
        <View style={[props.style, styles.container]}>
            <Widget title={props.title} component={serviceCount}/>
        </View>
    );
}

const styles = StyleSheet.create({
    count: {
        color: '#676578',
        fontSize: 74,
        textAlign: 'center'
    }
});