/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, TextInput, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const buttonTitles = [
    [1, 2, 3, '/'],
    [4, 5, 6, '*'],
    [7, 8, 9, '-'],
    [0, '.', '=', '+'],
    ['c', 'ce'],
  ];
  return (
    <View style={styles.rootContainer}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>Máy Tính</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="kết quả" style={styles.input} />
        {buttonTitles.map ((values, index) => {
          return (
            <View style={styles.inputRow} key={index}>
              {values.map ((value, idx) => {
                return (
                  <Text key={idx} style={styles.inputButton}>{value}</Text>
                );
              })}
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create ({
  rootContainer: {
    flex: 1,
  },
  input: {
    height: 35,
    margin: 12,
    borderWidth: 1,
    borderBottomColor: 'white',
    color: 'white',
  },
  inputButtonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  inputContainer: {
    flex: 8,
    backgroundColor: 'black',
  },
  displayContainer: {
    flex: 3,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  displayText: {
    color: 'white',
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'right',
    padding: 20,
  },
  inputRow: {
    flex: 1,
    flexDirection: 'row',
  },
  inputButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#91AA9D',

    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default App;
