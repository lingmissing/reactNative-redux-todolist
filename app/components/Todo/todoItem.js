import React, { Component } from 'react'
import { StyleSheet,View,TextInput,ListView,Text,TouchableHighlight,Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import TodoInput from './todoInput'
import Swipeout from 'react-native-swipeout'

const styles = StyleSheet.create({
  checkbox: {
    width:25,
    marginVertical:2.5
  },
  activeText: {
    textDecorationLine: 'line-through',
    color: '#d9d9d9'
  },
  todoItem: {
    height: 45,
    paddingVertical:10,
    paddingHorizontal: 20,
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ededed',
    backgroundColor: '#fff'
  },
  textBox: {
    flex:1, 
    paddingLeft: 10,
  },
  text: {
    color:'#4d4d4d',
    lineHeight:25,
  },
  textInput: {
    backgroundColor: 'red',
    borderWidth: 1,
    borderColor: 'blue',
    height:25,
  }
});




class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false
    }
  }
  toEdit() {
   this.setState({
     editing: true
   })
  }
  handleSave(id, text) {
    const { deleteTodo,editTodo } = this.props
    debugger
    if (text.length === 0) {
      deleteTodo(id)
    } else {
      editTodo(id, text)
    }
    this.setState({ 
      editing: false
    })
  }
  renderTextBox(todoItem) {
    const { editTodo } = this.props
    if(this.state.editing) {
      return <TodoInput text={todoItem.text}  saveTodo={(text) => this.handleSave(todoItem.id, text)}/>
    }else {
      return <Text style={[styles.text,todoItem.completed && styles.activeText]}>{todoItem.text}</Text>
    }
  }
  render() {
    const { todoItem,deleteTodo,completeTodo,editTodo } = this.props
    let swipeoutBtns = [{
      text: 'Delete',
      backgroundColor: '#e65757',
      underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
      onPress: () => { deleteTodo(todoItem.id) }
    }];
    return (
      <Swipeout right={swipeoutBtns}>
        <TouchableHighlight onLongPress={() => this.toEdit()}>
          <View style={styles.todoItem}>
              <TouchableHighlight 
                style={styles.checkbox} 
                onPress={() => completeTodo(todoItem.id)}>
                <Icon 
                  name={todoItem.completed?'check-circle-o':'circle-thin'}
                  size={20}
                  color={todoItem.completed?'#5dc2af':'#ededed'}
                />
              </TouchableHighlight>
              <View style={styles.textBox}>
                {this.renderTextBox(todoItem)}
              </View>
            </View>
          </TouchableHighlight>
        </Swipeout>
    );
  }
}



export default TodoItem;