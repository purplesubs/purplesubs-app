import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Widget(props) {
  return (
      <View style={[props.style, styles.container, styles.shadow]}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subTitle}>{props.subTitle}</Text>
      </View>
        {props.component}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: '#676578',
    fontSize: 20,
    fontWeight: 'bold'
  },
  subTitle: {
    color: '#676578',
    fontSize: 16,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});