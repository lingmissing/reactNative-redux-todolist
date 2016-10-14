import React, { Component } from 'react'
import { View } from 'react-native'
import TodoHeader from './todoHeader'
import TodoMain from './todoMain'
import TodoFooter from './todoFooter'
import Layout from '../Layout'

class Todo extends Component {
  constructor(prop) {
    super(prop)
    this.state = {
      filterStatus: 'SHOW_ALL'
    }
  }
  changeFilterStatus(filter) {
    this.setState({
      filterStatus: filter
    }) 
  }
  render() {
    return (
      <Layout>
        <View style={{flex:1}}>
          <TodoHeader
            addTodo={this.props.addTodo}
            todoList={this.props.todoList}
            completeAll={this.props.completeAll}
          />
          <TodoMain 
            todoList={this.props.todoList}
            completeTodo={this.props.completeTodo}
            deleteTodo={this.props.deleteTodo}
            editTodo={this.props.editTodo}
            filterStatus={this.state.filterStatus}
          />
          <TodoFooter 
            todoList={this.props.todoList}
            clearCompleted={this.props.clearCompleted}
            changeFilterStatus={this.changeFilterStatus.bind(this)}
            filterStatus={this.state.filterStatus}
          />
        </View>
      </Layout>
    );
  }
}

export default Todo;