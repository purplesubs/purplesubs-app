import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ServiceItem from './ServiceItem'
import {colors, display, textStyles} from '../../constants/StyleSheet'

export default function ServiceList(props) {

    let renderChild = (item) => {
        if (item === null) return;
        return <ServiceItem {...item.props}/>
    };

    let {children} = props;

    return (
        <View style={[props.style, styles.container, styles.shadow]}>
            {React.Children.map(children, renderChild)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: display.MARGIN_SMALL,
        paddingRight: display.MARGIN_SMALL
    }
});

ServiceList.Item = ServiceItem