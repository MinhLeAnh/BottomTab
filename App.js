import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Square = ({ backgroundColor, text }) => {
  return (
    <View style={[styles.square, { backgroundColor }]}>
      <Text style={styles.squareText}>{text}</Text>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <Square backgroundColor="#007700" text="Square 1" />
      <Square backgroundColor="#00CED1" text="Square 2" />
      <Square backgroundColor="#CD853F" text="Square 3" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row'
  },
  square: {
    width: 100,
    height: 100,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  squareText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;