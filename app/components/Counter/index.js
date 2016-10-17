import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Layout from '../Layout'

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  }
});

export default class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { counter, increment, decrement } = this.props;

    return (
      <Layout>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>{counter}</Text>
          <TouchableOpacity onPress={increment} style={styles.button}>
            <Text>+1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={decrement} style={styles.button}>
            <Text>-1</Text>
          </TouchableOpacity>
        </View>
      </Layout>
    );
  }
}
