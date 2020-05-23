import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {colors, display, textStyles, icons} from '../../constants/StyleSheet'
import {translations} from '../../constants/translations'
import {Ionicons} from "@expo/vector-icons";

export default function ServiceItem(props) {

    let language = "en"
    let currency = "EUR"

    return (
        <TouchableOpacity style={[props.style, styles.mainContainer]} onPress={props.onPress}>

            <View style={[props.style, styles.container]}>

                <Image source={props.image} style={styles.serviceIcon}/>

                <View style={[props.style, styles.content]}>

                    <View style={[props.style]}>
                        <Text style={styles.name}>{props.name}</Text>
                        <Text style={[textStyles.textDescription]}>
                            {translations[language].services.list.item.yearlySpend}: {props.yearlySpend} {currency}
                        </Text>
                        <Text style={[textStyles.textDescription]}>
                            {translations[language].services.list.item.nextPayment}: {props.nextPayment} {currency}
                        </Text>
                    </View>

                    <View style={[styles.tagContainer]}>
                        <View style={styles.tagTextContainer}>
                            <Ionicons
                                name={props.isEnabledNotify ? icons.BELL_ON: icons.BELL_OFF}
                                size={15}
                                color={props.focused ? colors.primary : colors.secondaryLighten3}
                            />
                            <Text style={[styles.tag, textStyles.statusLabel]}>{props.isEnabledNotify ? translations[language].services.list.item.bellOn : translations[language].services.list.item.bellOff}</Text>
                        </View>
                        <View style={styles.tagPlanTypeContainer}>
                            <Text style={[styles.planType, textStyles.statusLabel]}>{props.planTypeName}</Text>
                        </View>
                        <View style={styles.arrowContent}>
                            <Text style={[textStyles.timeAgo, styles.date]}>{props.updatedAt}</Text>
                            <Ionicons
                                name={icons.RIGHT}
                                size={20}
                                color={props.focused ? colors.primary : colors.secondaryLighten4}
                            />
                        </View>
                    </View>

                </View>

            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    container: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: colors.secondaryLighten6,
        paddingTop: display.MARGIN_SMALL,
        paddingBottom: display.MARGIN_SMALL,
    },
    content: {
        flex: 1,
        paddingLeft: 10,
    },
    tagContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 12,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.secondaryLighten1,
        marginBottom: 5,
    },
    serviceIcon: {
        width: 32,
        height: 32,
    },
    bellIcon: {
        width: 12,
        height: 12,
    },
    tagTextContainer: {
        flexDirection: "row",
        borderColor: colors.secondaryLighten5,
        borderWidth: 1,
        borderRadius: 4,
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 4,
        paddingRight: 4,
        justifyContent: 'center'
    },
    tagPlanTypeContainer: {
        flexDirection: "row",
        borderColor: colors.secondaryLighten5,
        borderWidth: 1,
        borderRadius: 4,
        padding: 4,
        justifyContent: 'center',
        marginLeft: 5
    },
    tag: {
        alignSelf: 'flex-start',
        marginTop: 4,
        marginLeft: 3
    },
    planType: {
        marginTop: 2,
        marginLeft: 3
    },
    arrowContent: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'flex-end'
    },
    date: {
        marginTop: 2,
        paddingRight: display.MARGIN_SMALL,
    }
});