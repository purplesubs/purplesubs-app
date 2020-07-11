import * as React from 'react';
import { StyleSheet, Text,  View} from 'react-native';
import TabBar from '../components/TabBar'
import ServiceList from '../components/services/ServiceList'
import {colors, display, textStyles, icons} from '../constants/StyleSheet'
import ServiceRow from "../components/services/ServiceRow";
import SearchTextBox from "../components/SearchTextBox";
import {MaterialIcons} from "@expo/vector-icons";

export default function NewServiceScreen(props) {

    let serviceGroups = [{
        id: 'popular',
        name: 'Popular',
        selected: true,
        onPress: () => alert("alert All")
    }, {
        id: 'all',
        name: 'All',
        selected: false,
        onPress: () => alert("alert All")
    }];

    return (
        <View style={styles.container}>
            <Text style={[styles.title, textStyles.mainTitle]}>Add Service</Text>
            <SearchTextBox
                style={styles.searchTextBox}
                placeholder={"Search"}
                onPress={() => ""}
                autoCapitalize="none"
            />
            <View style={styles.listContainer}>
                <TabBar style={styles.tabBar} tabs={serviceGroups}/>
                <ServiceList>
                    {props.popularServices.map(item => <ServiceRow key={item.id} {...item}/>)}
                </ServiceList>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondaryLighten7,
        paddingHorizontal: 16,
    },
    listContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 12,
        borderRadius: 10,
        marginBottom: display.MARGIN_EXTRA_LARGE,
        paddingLeft: display.MARGIN_SMALL,
        paddingRight: display.MARGIN_SMALL
    },
    tabBar: {
        marginBottom: display.MARGIN_MEDIUM,
    },
    searchTextBox: {
        marginTop: 15,
        marginBottom: 15
    },
});