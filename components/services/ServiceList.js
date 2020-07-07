import * as React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import ServiceItem from './ServiceItem'
import ServiceRow from '../ServiceRow'
import {colors, display, textStyles} from '../../constants/StyleSheet'

export default function ServiceList(props) {

    let renderChild = (item) => {
        if (item === null) return;
        return <ServiceRow data={item.props}/>
    };

    let {children} = props;

    return (
        <ScrollView style={[props.style, styles.container, styles.shadow]}>
            {React.Children.map(children, renderChild)}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: display.MARGIN_SMALL,
        paddingRight: display.MARGIN_SMALL
    }
});

ServiceList.Item = ServiceItem