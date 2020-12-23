import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function message(props) {
  const {
    message: { userName, text, time },
    name,
  } = props;

  const thisIsMe = name === userName;

  return (
    <View style={styles.cotainer}>
      <View style={styles.Vmensagge}>
        <Text style={styles.mensagge}>{message.text}</Text>
        <Text>{time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cotainer: {
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
  },
  Vmensagge: {
    borderRadius: 10,
    minHeight: 35,
    minWidth: '40%',
    maxWidth: '80%',
  },
  mensagge: {
    padding: 5,
    paddingBottom: 25,
  },
});
