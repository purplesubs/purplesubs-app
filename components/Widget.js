import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Widget(props) {
  return (
      <View style={[props.style, styles.container, styles.shadow]}>
        <Text style={styles.title}>{props.title}</Text>
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
  title: {
    color: '#676578',
    fontSize: 20,
    fontWeight: 'bold'
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