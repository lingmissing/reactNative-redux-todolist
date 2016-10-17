import React, {Component} from 'react';
import List from '../components/List'
import TodoList from './todoApp'
import Counter from './counterApp'

class ListApp extends Component {
  render() {
    return (
      <List 
        navigator={this.props.navigator}
        TodoList={TodoList}
        Counter={Counter}
      />
    );
  }
}

export default ListApp;