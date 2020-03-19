import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {colors, display, textStyles, icon} from '../constants/StyleSheet'
import {translations} from '../constants/translations'

export default function UserItem(props) {

    let language = "en"
    let currency = "EUR"

    let buildAvatar = () =>
        props.avatar ? <Image source={props.avatar} style={styles.avatar}/> :
            <View style={styles.avatarInitial}><Text style={styles.nameInitial}>{props.nameInitial}</Text></View>;

    return (
        <TouchableOpacity style={[props.style, styles.mainContainer]} onPress={props.onPress}>

            <View style={[props.style, styles.container]}>

                {buildAvatar()}

                <View style={[props.style, styles.content]}>

                    <View style={[props.style]}>
                        <Text style={styles.name}>{props.name}</Text>
                        <Text
                            style={[textStyles.textDescription]}>{translations[language].users.list.item.yearlySpend}: {props.yearlySpend} {currency}</Text>
                        <Text
                            style={[textStyles.textDescription]}>{translations[language].users.list.item.serviceCount(props.serviceCount)}</Text>
                    </View>

                    <View style={[styles.tagContainer]}>
                        <View style={styles.tagTextContainer}>
                            <Text style={[styles.tag, textStyles.statusLabel]}>{props.role.toUpperCase()}</Text>
                        </View>
                        <View style={styles.arrowContent}>
                            <Text style={[textStyles.timeAgo, styles.date]}>{props.updatedAt}</Text>
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
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 16
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
    },
    nameInitial: {
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'Raleway',
        marginTop: 4,
        color: colors.primarydarken1,
    },
    avatarInitial: {
        backgroundColor: colors.primarylighten2,
        width: 32,
        height: 32,
        borderRadius: 16
    }
});