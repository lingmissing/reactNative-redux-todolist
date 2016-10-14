import React, { Component } from 'react'
import { StyleSheet,View,TextInput,ListView,Text } from 'react-native'
import TodoItem from './todoItem'

const TODO_FILTERS = {
  'SHOW_ALL': () => true,
  'SHOW_ACTIVE': todo => !todo.completed,
  'SHOW_COMPLETED': todo => todo.completed
}

class TodoMain extends Component {
  render() {
    const { todoList,filterStatus,editTodo,completeTodo,deleteTodo } = this.props
    const filteredTodos = todoList.filter(TODO_FILTERS[filterStatus])
    return (
      <View>
        {filteredTodos.map(todoItem =>  
          <TodoItem
            key={todoItem.id} 
            todoItem={todoItem}
            editTodo={editTodo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />)}
      </View>
    );
  }
}



export default TodoMain;