import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import UserItem from './UserItem'
import {colors, display, textStyles} from '../constants/StyleSheet'

export default function UserList(props) {

    let renderChild = (item) => {
        if (item === null) return;
        return <UserItem {...item.props}/>
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

UserList.Item = UserItem