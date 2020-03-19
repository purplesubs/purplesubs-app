import * as React from 'react';
import {Image, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import SimpleTabBar from '../components/SimpleTabBar'
import UserList from '../components/UserList'
import {colors, display, textStyles} from '../constants/StyleSheet'
import {translations} from '../constants/translations'


export default function UserScreen(props) {

    let status = [{
        id: 'enables',
        name: 'Enables',
        selected: true,
        onPress: () => alert("alert All")
    }, {
        id: 'disables',
        name: 'Disables',
        selected: false,
        onPress: () => alert("alert All")
    }, {
        id: 'off-boarding',
        name: 'Off-Boarding',
        selected: false,
        onPress: () => alert("alert All")
    }];

    let users = [{
        id: '11111-22222-33333-4444',
        name: 'Livan Frometa',
        nameInitial: 'LF',
        avatar: require('../assets/images/avatar1.jpeg'),
        enabled: true,
        yearlySpend: 20,
        serviceCount: 140,
        role: 'Admin',
        updatedAt: '12/03/2020',
        onPress: () => props.navigation.navigate('UserDetails')
    },{
        id: '11111-22222-33333-55555',
        name: 'Jhon Goes',
        nameInitial: 'JG',
        enabled: true,
        yearlySpend: 20,
        serviceCount: 140,
        role: 'Standar',
        updatedAt: '12/03/2020',
        onPress: () => props.navigation.navigate('UserDetails')
    }]

    let language = "en"

    return (
        <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <Text style={[styles.title, textStyles.mainTitle]}>{translations[language].users.list.title}</Text>

                <SimpleTabBar style={styles.simpleTabBar} tabs={status  }/>

                <UserList>
                    {users.map(item => <UserList.Item key={item.id} {...item}/>)}
                </UserList>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingLeft: 0,
        paddingRight: 0,
    },
    title: {
        marginLeft: display.MARGIN_DEFAULT,
    },
    simpleTabBar: {
        marginLeft: display.MARGIN_SMALL,
        marginTop: display.MARGIN_DEFAULT,
        marginBottom: display.MARGIN_SMALL,
    }
});
