import React, { Component } from 'react'
import { StyleSheet,View,TextInput,TouchableHighlight,Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height:25,
    backgroundColor: '#fff',
    marginLeft:30,
    paddingLeft:10,
    color:'gray',
    // borderRadius: 10,
    borderWidth: 0,
  }
});


class TodoInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: props.text || ''
    }
  }
  saveText(text) {
    this.setState({
      text:text
    });
  }
  addText() {
    const input = this.state.text
    const { saveTodo } = this.props
    if(input) {
      // 添加到state
      saveTodo(input)
      this.setState({
        text:''
      })
    }
  }
  render() {
    return (
      <TextInput
        style={styles.input}
        placeholder="what need to be done?"
        value={this.state.text}
        onSubmitEditing={() => this.addText()}
        onChangeText={(text) => this.saveText(text)} 
      />
    );
  }
}

export default TodoInput;