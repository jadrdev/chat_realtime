import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Text, Button } from 'native-base';

export default function App() {
  return (
    <SafeAreaView>
      <Text>Hola Mundo</Text>
      <Button>
        <Text>Pulsar</Text>
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
