import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Todo from '../../containers/todoApp'

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
  back() {
     this.props.navigator.pop()
  }
  go() {
     this.props.navigator.push({
      component: Todo,
      title: 'todoList',
      tintColor: '#fff',
      initialRoute: {
        backButtonTitle: 'back'
      }
    })
  }

  render() {
    const { counter, increment, decrement } = this.props;

    return (
     
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>{counter}</Text>
          <TouchableOpacity onPress={increment} style={styles.button}>
            <Text>+1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={decrement} style={styles.button}>
            <Text>-1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.back()} style={styles.button}>
            <Text>back</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.go()} style={styles.button}>
            <Text>todo</Text>
          </TouchableOpacity>
        </View>
    
    );
  }
}
