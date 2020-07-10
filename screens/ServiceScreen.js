import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SimpleTabBar from '../components/SimpleTabBar'
import ServiceRow from '../components/ServiceRow'
import {colors, icons, display, textStyles} from '../constants/StyleSheet'
import {translations} from "../constants/translations";
import SortableListView from 'react-native-sortable-listview'
import ButtonHeader from '../components/header/ButtonHeader';


export default function ServiceScreen(props) {

    let planTypes = [{
        id: 'subscription',
        name: 'Subscription',
        selected: true,
        onPress: () => alert("alert All")
    }, {
        id: 'plan-per-use',
        name: 'Pay Per Use',
        selected: false,
        onPress: () => alert("alert All")
    }, {
        id: 'lifetime',
        name: 'Lifetime',
        selected: false,
        onPress: () => alert("alert All")
    }, {
        id: 'free',
        name: 'Free',
        selected: false,
        onPress: () => alert("alert All")
    }];

    let language = "en"
    let currency = "€"

    let order = Object.keys(props.services) //Array of keys

    return (
        <View style={styles.container}>

            <View style={styles.titleContainer}>
                <Text style={[styles.title, textStyles.mainTitle]}>{translations[language].services.list.title}</Text>
                <ButtonHeader
                    onPress={props.onPressAddService}
                    icon={icons.ADD_CIRCLE} size={35} color={colors.primaryDarken1}
                    style={styles.add}/>
            </View>
            <SimpleTabBar style={styles.simpleTabBar} tabs={planTypes}/>
            <SortableListView
                style={styles.list}
                data={props.services}
                order={order}
                onRowMoved={e => {order.splice(e.to, 0, order.splice(e.from, 1)[0])}}
                renderRow={row => <ServiceRow data={row} currency={currency}/>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondaryLighten7,
        paddingHorizontal: 16,
    },
    list: {
        backgroundColor: '#fff',        //backgroundColor: '#fff',
        paddingHorizontal: 8,
        paddingVertical: 12,
        borderRadius: 10
    },
    titleContainer: {
      flexDirection: 'row',
        justifyContent: 'space-between',
    },
    add: {
        marginTop: 3,
    },
    title: {
        // marginLeft: display.MARGIN_DEFAULT,
    },
    simpleTabBar: {
        maxHeight: 36,
        minHeight: 36,
        // marginLeft: display.MARGIN_SMALL,
        // marginRight: display.MARGIN_SMALL,
        marginTop: display.MARGIN_DEFAULT,
        marginBottom: display.MARGIN_DEFAULT,
    }
});
