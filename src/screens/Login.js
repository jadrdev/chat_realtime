import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Image } from 'react-native';
import { Item, Input, Text, Button } from 'native-base';
import logoApp from '../assets/chatLogo.png';

export default function Login(props) {
  console.log(props);
  const { setUserName } = props;
  const [name, setname] = useState('');

  const onsubmit = () => {
    setUserName(name);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View>
        <Image source={logoApp} resizeMode="contain" style={styles.logo} />
      </View>
      <Item>
        <Input
          placeholder="Nombre de usuario"
          style={{ color: '#fff' }}
          placeholderTextColor="grey"
          value={name}
          onChange={(e) => setname(e.nativeEvent.text)}
        />
      </Item>

      <Button style={styles.btnlogin} onPress={onsubmit}>
        <Text>Entrar</Text>
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
    marginVertical: 100,
  },
  logo: {
    width: '100%',
    height: 240,
    marginBottom: 30,
  },
  btnlogin: {
    marginTop: 40,
    justifyContent: 'center',
    backgroundColor: '#0098d3',
    width: '100%',
  },
});
