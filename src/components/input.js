import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Platform } from 'react-native';
import { Item, Input as InputNB, Icon } from 'native-base';

export default function Input(props) {
  const { sendMessage } = props;
  const [message, setmessage] = useState('');

  const onsubmit = () => {
    if (message.length > 0) {
      sendMessage(message);
      setmessage('');
    }
  };

  return (
    <View style={styles.container}>
      <Item style={styles.itemInput}>
        <InputNB
          placeholder="Mensaje"
          style={styles.Input}
          placeholderTextColor="grey"
          value={message}
          onChange={(e) => setmessage(e.nativeEvent.text)}
        />
        <TouchableOpacity onPress={onsubmit}>
          <Icon name="send" style={styles.Iconsend} type="FontAwesome" />
        </TouchableOpacity>
      </Item>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#16202b',
    paddingBottom: Platform.OS === 'ios' ? 20 : 0,
    paddingHorizontal: 20,
  },
  itemInput: {
    borderColor: '#16202b',
  },
  Input: {
    color: '#fff',
  },
  Iconsend: {
    color: '#fff',
  },
});
