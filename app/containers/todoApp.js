'use strict';

import React, { Component } from 'react'
import { Navigator } from 'react-native'
import { bindActionCreators } from 'redux'
import Todo from '../components/Todo';
import { actions as todoActions } from '../modules/todoModule';
import { connect } from 'react-redux';

class TodoApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todoList, actions } = this.props;
    return (
      <Navigator
        initialRoute={{ title: 'TodoList', index: 1 }}
        renderScene={(route, navigator) =>
          <Todo 
            todoList={todoList}
            {...actions}
            navigator={navigator}
          />
        }
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
