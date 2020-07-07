import * as React from 'react';
import {Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View, TouchableHighlight} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import SimpleTabBar from '../components/SimpleTabBar'
import ServiceRow from '../components/ServiceRow'
import ServiceList from '../components/services/ServiceList'
import {colors, icons, display, textStyles} from '../constants/StyleSheet'
import {translations} from "../constants/translations";
import SortableListView from 'react-native-sortable-listview'
import ButtonHeader from '../components/header/ButtonHeader';

const window = Dimensions.get('window');

export default function ServiceScreen(props) {

    console.log("............>>>>>>>>HERE: props = ", props)

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

    // let services = [{
    //     id: 'netflix',
    //     name: 'Netflix',
    //     image: require('../assets/images/services/netflix.png'),
    //     isEnabledNotify: false,
    //     yearlySpend: 20,
    //     nextPayment: 140,
    //     updatedAt: '12/03/2020',
    //     planTypeName: 'Subscription',
    //     onPress: () => props.navigation.navigate('ServiceDetails')
    // }, {
    //     id: 'apple',
    //     name: 'Apple',
    //     image: require('../assets/images/services/apple.png'),
    //     isEnabledNotify: true,
    //     yearlySpend: 20,
    //     nextPayment: 140,
    //     updatedAt: '12/03/2020',
    //     planTypeName: 'Pay Per Use',
    //     onPress: () => props.navigation.navigate('ServiceDetails')
    // }, {
    //     id: 'spotify',
    //     name: 'Spotify',
    //     image: require('../assets/images/services/spotify.png'),
    //     isEnabledNotify: true,
    //     yearlySpend: 20,
    //     nextPayment: 140,
    //     updatedAt: '12/03/2020',
    //     planTypeName: 'Lifetime',
    //     onPress: () => props.navigation.navigate('ServiceDetails')
    // }, {
    //     id: 'trello',
    //     name: 'Trello',
    //     image: require('../assets/images/services/trello.png'),
    //     isEnabledNotify: false,
    //     yearlySpend: 20,
    //     nextPayment: 140,
    //     updatedAt: '12/03/2020',
    //     planTypeName: 'Free',
    //     onPress: () => props.navigation.navigate('ServiceDetails')
    // }, {
    //     id: 'google',
    //     name: 'Google',
    //     image: require('../assets/images/services/google.png'),
    //     isEnabledNotify: false,
    //     yearlySpend: 20,
    //     nextPayment: 140,
    //     updatedAt: '12/03/2020',
    //     planTypeName: 'Pay Per Use',
    //     onPress: () => props.navigation.navigate('ServiceDetails')
    // }]

    let language = "en"
    let currency = "€"

    let order = Object.keys(props.services) //Array of keys

    const forceUpdate = () => {
        // return <Row data={data} active={active} />
    }

    return (
        <View style={styles.container}>

            <View style={styles.titleContainer}>
                <Text style={[styles.title, textStyles.mainTitle]}>{translations[language].services.list.title}</Text>
                <ButtonHeader
                    onPress={props.onPressAddService}
                    icon={icons.ADD} size={35} color={colors.primaryDarken1}
                    style={styles.add}/>
            </View>

            <SimpleTabBar style={styles.simpleTabBar} tabs={planTypes}/>
            <SortableListView
                style={styles.list}
                data={props.services}
                order={order}
                onRowMoved={e => {
                    // console.debug("......>e=", e)
                    // console.debug("......>order=", order)

                    order.splice(e.to, 0, order.splice(e.from, 1)[0])
                    // console.debug("......>order2=", order)
                    // forceUpdate()
                }}
                renderRow={row => <ServiceRow data={row} currency={currency}/>}
            />

            {/*<ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>*/}
            {/*    /!*<Text style={[styles.title, textStyles.mainTitle]}>{translations[language].services.list.title}</Text>*!/*/}

            {/*    <SimpleTabBar style={styles.simpleTabBar} tabs={planTypes}/>*/}

            {/*    /!*<ServiceList style={styles.serviceList}>*!/*/}
            {/*    /!*    {services.map(item => <ServiceList.Item key={item.id} {...item}/>)}*!/*/}
            {/*    /!*</ServiceList>*!/*/}


            {/*</ScrollView>*/}
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
