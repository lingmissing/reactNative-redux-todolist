import React, { Component } from 'react'
import { StyleSheet,View,TextInput,TouchableHighlight,Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import TodoInput from './todoInput'

const styles = StyleSheet.create({
  headerBox: {
    paddingVertical:25,
    paddingHorizontal: 20,
    // flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ededed',
    backgroundColor: '#5dc2af'
  },
  chooseAll: {
    width: 25,
    height: 25
  }
});


class TodoHeader extends Component {
  render() {
    const { completeAll,todoList } = this.props
    const { addTodo } = this.props
    const completedCount = todoList.reduce((count, todo) =>
      todo.completed ? count + 1 : count,
      0
    )
    return (
      <View style={styles.headerBox}>
        <TouchableHighlight 
          style={styles.chooseAll} 
          onPress={() => completeAll()}>
          <Icon 
            name="chevron-down"
            size={20}
            color={completedCount === todoList.length?'#fff':'#ccc'}
          />
        </TouchableHighlight>
        <TodoInput 
          saveTodo={addTodo}
        />
      </View>
    );
  }
}

export default TodoHeader;