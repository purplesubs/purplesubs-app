import * as React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {colors, textStyles, icons} from '../constants/StyleSheet'
import RowIcon from '../components/services/ServiceIcon';
import SimpleButton, {SimpleButtonTypes} from '../components/SimpleButton';
import FormRowInput from '../components/form/FormRowInput';
import FormRowDate from '../components/form/FormRowDate';
import FormRowSelect from '../components/form/FormRowSelect';
import FormRowLabel from '../components/form/FormRowLabel';
import FormRowTextArea from '../components/form/FormRowTextArea';
import Form from '../components/form/Form';

export default function NewFormServiceScreen(props) {

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={[styles.amount, textStyles.mainTitle]}>Add Service</Text>
                <View style={[styles.icon, {
                    borderColor: colors.secondaryLighten4,
                    backgroundColor: colors.secondaryLighten6
                }]}>
                    <RowIcon
                        name={props.serviceSelected.icon}
                        size={34}
                        color={props.serviceSelected.color}/>
                </View>
            </View>

            <ScrollView>
                <Text style={styles.helpText}>Fill the fields</Text>

                <SimpleButton name={'Add service'} style={styles.button} type={SimpleButtonTypes.PRIMARY_FILLED}
                              icon={icons.ADD}/>

                <Form style={styles.form}>
                    <FormRowInput
                        label='Name'
                        value={props.serviceSelected.name}
                        placeholder='Enter Name'
                        onChangeText={props.onChangeName}/>
                    <FormRowInput
                        label='Price' style={styles.separator}
                        placeholder='Enter Price'
                        onChangeText={text => props.onChangePrice(text)}/>
                    <FormRowDate
                        style={styles.separator}
                        label='First bill'
                        onPress={props.onPressFirstBill}/>
                    <FormRowSelect
                        style={styles.separator}
                        label='Cycle' id='every_one_month'
                        value='Every 1 Month(s)'
                        onPress={props.onPressCycle}/>
                    <FormRowSelect
                        style={styles.separator}
                        label='Duration'
                        id='forever'
                        value='Forever'/>
                    <FormRowSelect
                        style={styles.separator}
                        label='Remind me'
                        id='never'
                        value='Never'/>
                    <FormRowLabel
                        style={styles.separator}
                        label='Currency'
                        id='EUR'
                        value={`EUR(${props.currency})`}/>
                </Form>

                <Form style={styles.form}>
                    <FormRowTextArea
                        label='Description'
                        value='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                        actionText='Edit'
                        onPress={props.onPressEditDescription}
                        placeholder='Add description'/>
                </Form>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: colors.secondaryLighten7,
    },
    separator: {
        marginTop: 30,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icon: {
        borderWidth: 2,
        borderRadius: 24,
        paddingVertical: 3,
        paddingHorizontal: 4,
        paddingTop: 4
    },
    button: {
        marginTop: 30,
    },
    form: {
        marginTop: 20,
    },
    helpText: {
        color: colors.secondaryLighten3,
        marginTop: 2
    }
});