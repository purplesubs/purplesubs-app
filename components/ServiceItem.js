import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {colors, display, textStyles, icon} from '../constants/StyleSheet'
import {translations} from '../constants/translations'

export default function ServiceItem(props) {

    let language = "en"
    let currency = "EUR"

    return (
        <TouchableOpacity style={[props.style, styles.mainContainer]}>

            <View style={[props.style, styles.container]}>

                <Image source={props.image} style={styles.serviceIcon}/>

                <View style={[props.style, styles.content]}>

                    <View style={[props.style]}>
                        <Text style={styles.name}>{props.name}</Text>
                        <Text style={[textStyles.textDescription]}>{translations[language].services.list.item.yearlySpend}: {props.yearlySpend} {currency}</Text>
                        <Text style={[textStyles.textDescription]}>{translations[language].services.list.item.nextPayment}: {props.nextPayment} {currency}</Text>
                    </View>

                    <View style={[styles.tagContainer]}>
                        <View style={styles.tagTextContainer}>
                            <Image style={styles.bellIcon} source={ props.isEnabledNotify ? icon.BELL_ON: icon.BELL_OFF}/>
                            <Text style={[styles.tag, textStyles.statusLabel]}>{props.isEnabledNotify ? translations[language].services.list.item.bellOn : translations[language].services.list.item.bellOff}</Text>
                        </View>
                        <View style={styles.arrowContent}>
                            <Text style={[textStyles.timeAgo, styles.date]}>12/03/2020</Text>
                            <Image source={icon.RIGHT}/>
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
        borderTopColor: colors.secondarylighten6,
        borderTopWidth: 1,
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
        color: colors.secondarylighten1,
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
        borderColor: colors.secondarylighten5,
        borderWidth: 1,
        borderRadius: 4,
        padding: 4,
        justifyContent: 'center'
    },
    tag: {
        alignSelf: 'flex-start',
        marginTop: 2,
        marginLeft: 3
    },
    arrowContent: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'flex-end'
    },
    date: {
        paddingRight: display.MARGIN_SMALL,
    }
});