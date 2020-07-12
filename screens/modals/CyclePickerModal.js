import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, DatePickerIOS} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {colors, icons, display, textStyles} from '../../constants/StyleSheet'
import TextArea from "../../components/TextArea";
import SimpleButton, {SimpleButtonTypes} from "../../components/SimpleButton";

export default function CyclePickerModal(props) {
    const [chosenDate, setChosenDate] = React.useState(new Date());

    return (
        <View style={styles.container}>

            <View style={styles.content}>

                <View style={styles.header}>
                    <TouchableOpacity style={styles.closeIcon} onPress={props.onPressClose}>
                        <Ionicons name={icons.CLOSE} size={36} color={colors.secondaryLighten0}/>
                    </TouchableOpacity>

                    <SimpleButton
                        onPress={() => props.onPressDone(chosenDate)}
                        name="Done"
                        style={styles.button}
                        type={SimpleButtonTypes.PRIMARY_FILLED_ROUND}/>
                </View>

                {/*<DatePickerIOS*/}
                {/*    locale='es'*/}
                {/*    mode='date'*/}
                {/*    date={chosenDate}*/}
                {/*    onDateChange={setChosenDate}*/}
                {/*/>*/}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    content: {
        borderColor:colors.secondaryLighten6,
        borderWidth: 1,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        width: '100%',
        backgroundColor: colors.clean,
        justifyContent: "center"
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 8,
        paddingHorizontal: 8
    },
    closeIcon: {
        marginLeft: 10
    },
    button: {
        borderWidth: 1,
        marginRight: 6,
    },
    done: {
        fontWeight: 'bold',
        fontSize: 15,
        color: colors.secondaryLighten0
    },
    indicator: {
        backgroundColor: colors.secondaryLighten6,
        height: 8,
        width: 80,
        borderRadius: 4,
        alignSelf: 'center',
        marginTop:8
    }
});
