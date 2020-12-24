import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function message(props) {
  const {
    message: { userName, text, time },
    name,
  } = props;

  const thisIsMe = name === userName;

  const condionalStyle = {
    container: {
      justifyContent: thisIsMe ? 'flex-end' : 'flex-start',
    },
    ViewMessage: {
      backgroundColor: thisIsMe ? '#f0f0f1' : '#4b86f0',
    },
  };

  return (
    <View style={(styles.cotainer, condionalStyle.container)}>
      <View style={(styles.Vmensagge, condionalStyle.ViewMessage)}>
        <Text style={styles.mensagge}>{text}</Text>
        <Text style={styles.time}>{time}</Text>
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
  time: {
    fontSize: 10,
    position: 'absolute',
    bottom: 5,
  },
});
