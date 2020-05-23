import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions, ViewPropTypes, Image} from 'react-native'
import {colors, display, textStyles} from '../constants/StyleSheet'
import * as ButtonType from './ButtonType'
import {PropTypes} from 'prop-types';

class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            width: new Animated.Value(10),
            textWidth: new Animated.Value(0),
            opacityText: new Animated.Value(0),
            buttonStyle: [],
            textStyle: [],
        }
    }

    // componentWillReceiveProps(nextProps){
    //     if (nextProps.type !== this.props.type) {
    //         this.setStyles(nextProps.type)
    //     }
    // }

    componentDidMount() {
        this.setStyles(this.props.type)
        let modalWidth = this.props.onModal ? 56 : 0
        Animated.parallel([
            Animated.spring(this.state.width, {
                toValue: Dimensions.get('window').width - 56 - modalWidth,
                duration: 600,
                tension: -4, // Slow
                friction: 4,  // Oscillate a lot
            }),
            Animated.timing(this.state.textWidth, {
                toValue: Dimensions.get('window').width - 70 - modalWidth,
                duration: 700,
            }),
            Animated.timing(this.state.opacityText, {
                toValue: 1,
                duration: 600,
                delay: 50
            })
        ]).start()
    }

    setStyles = (type) => {
        switch (type) {
            case ButtonType.PRIMARY_FILLED:
                this.setState({
                    buttonStyle: [{
                        backgroundColor: colors.primaryDarken1,
                        borderColor: colors.primaryDarken1,
                        borderWidth: 1
                    }],
                    textStyle:textStyles.buttonSolidText
                });
                return;

            case ButtonType.PRIMARY_BORDER:
                this.setState({
                    buttonStyle: [{
                        backgroundColor: colors.clean,
                        borderColor: colors.primary,
                        borderWidth: 1
                    }],
                    textStyle:textStyles.buttonOutlineText
                });
                return;

            case ButtonType.PRIMARY_LIGHT:
                this.setState({
                    buttonStyle: [{
                        backgroundColor: colors.primary40,
                        borderColor: colors.clean,
                        borderWidth: 1
                    }],
                    textStyle: textStyles.buttonSolidText
                });
                return;

            case ButtonType.GREEN_FILLED:
                this.setState({
                    buttonStyle: [{
                        backgroundColor: colors.whatsapp,
                        borderColor: colors.whatsapp,
                        borderWidth: 1
                    }],
                    textStyle:textStyles.buttonSolidText
                });
                return;
        }
    }

    render() {
        let btn = <View style={[styles.container, this.state.buttonStyle, this.props.buttonStyle]}>
            {this.props.icon ? <Image source={this.props.icon} style={styles.icon}/> : null}
            <Text
                style={[this.state.textStyle]}>{this.props.value.toUpperCase()}</Text>
        </View>

        if (this.props.animate) {
            btn = <Animated.View style={[styles.container, this.state.buttonStyle, this.props.buttonStyle, {width: this.state.width}]}>
                {this.props.icon ? <Animated.Image source={this.props.icon} style={styles.icon}/> : null}
                <Animated.Text ellipsizeMode="middle" numberOfLines={1}
                               style={[this.state.textStyle, {
                                   opacity: this.state.opacityText,
                               }, this.props.icon ? null: {width: this.state.textWidth}]}>{this.props.value.toUpperCase()}</Animated.Text>
            </Animated.View>
        }
        return (
            <TouchableOpacity style={[this.props.style, this.props.containerButtonStyle, this.props.animate ? styles.itemsAnimate : null]}
                              onPress={this.props.onPress} disabled={this.props.disabled}>
                {btn}
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    itemsAnimate: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        marginRight: display.MARGIN_SMALL
    }
});


Button.propTypes = {
    value: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    animate: PropTypes.bool,
    onModal: PropTypes.bool,
    buttonStyle: ViewPropTypes.style,
    textStyle: PropTypes.number,
    icon: PropTypes.number,
    containerButtonStyle: ViewPropTypes.style,
    type: PropTypes.string
};

Button.defaultProps = {
    animate: true,
    onModal: false,
    value: "",
    title: "",
    type: ButtonType.PRIMARY_FILLED
};

export default Button