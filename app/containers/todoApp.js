'use strict';

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import Todo from '../components/Todo';
import { actions as todoActions } from '../modules/todoModule';
import { connect } from 'react-redux';

class TodoApp extends Component {
  render() {
    const { todoList, actions } = this.props;
    return (
      <Todo 
        todoList={todoList}
        {...actions}
      />
    );
  }
}

export default connect(state => ({
    todoList: state.todoList
  }),
  (dispatch) => ({
    actions: bindActionCreators(todoActions, dispatch)
  })
)(TodoApp);
