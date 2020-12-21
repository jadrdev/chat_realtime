import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from '../components/input';

export default function Chat() {
  const sendMessage = (message) => {
    console.log(message);
  };
  return (
    <>
      <View style={styles.content}>
        <Text>Chat</Text>
        <Input sendMessage={sendMessage} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
