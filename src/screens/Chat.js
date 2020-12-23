import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Header, Body, Title } from 'native-base';
import Input from '../components/Input';
import Message from '../components/Message';
import firebase from '../utils/firebase';
import 'firebase/database';
import moment from 'moment';
import { map } from 'lodash';

export default function Chat(props) {
  const { userName } = props;

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const chat = firebase.database().ref('general');
    //capturamos toda la base de datos
    chat.on('value', (snapshot) => {
      setMessages(snapshot.val());
    });
  });

  const time = moment().format('hh:mm a');
  const sendMessage = (message) => {
    firebase.database().ref('general').push({ userName, text: message, time });
  };
  return (
    <>
      <Header style={styles.Header} iosBarStyle="light-content">
        <Body>
          <Title style={{ color: '#fff' }}>Chat App</Title>
        </Body>
      </Header>
      <View style={styles.content}>
        <ScrollView style={styles.chatView}>
          {map(messages, (message, index) => (
            <Message key={index} message={message} name={userName} />
          ))}
        </ScrollView>
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
  Header: {
    backgroundColor: '#16202b',
  },
  chatView: {
    backgroundColor: '#1b273a',
  },
});
