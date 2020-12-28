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
    message: {
      color: thisIsMe ? '#000' : '#fff',
      textAlign: thisIsMe ? 'right' : 'left',
    },
  };

  return (
    <View style={[styles.cotainer, condionalStyle.container]}>
      <View style={[styles.Vmensagge, condionalStyle.ViewMessage]}>
        <Text style={[styles.mensagge, condionalStyle.message]}>{text}</Text>
        <Text
          style={[styles.time, thisIsMe ? styles.timeLeft : styles.timeRight]}>
          {time}
        </Text>
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
  timeRight: {
    right: 8,
    color: '#fff',
  },
  timeLeft: {
    left: 8,
    color: 'grey',
  },
});
