import React, { Component } from 'react'
import { StyleSheet,View,TextInput,ListView,Text,TouchableHighlight,Image } from 'react-native'

const styles = StyleSheet.create({
  todoFooter: {
    borderTopWidth: 1,
    borderColor: '#ededed',
    height: 100,
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  clearCompleted: {
    width:100,
    height:25,
    backgroundColor: '#ededed',
    borderRadius: 5
  },
  footerText: {
    lineHeight:25,
    textAlign: 'center',
    fontSize:12,
    color: '#777'
  },
  activeCount: {
    width: 100
  },
  filterBox: {
    flex: 1,
    flexDirection: 'row'
  },
  filterItem: {
    borderWidth:1,
    borderColor: '#5dc2af',
    height: 25,
    marginHorizontal: 5,
    paddingHorizontal: 5
  },
  activeFilterItem: {
    borderWidth: 0,
    backgroundColor: '#5dc2af'
  },
  whiteColor: {
    color: '#fff'
  }
});


const FILTER_TITLES = {
  'SHOW_ALL': 'All',
  'SHOW_ACTIVE': 'Active',
  'SHOW_COMPLETED': 'Completed'
}

class TodoFooter extends Component {
  constructor(props) {
    super(props)
  }

  renderTodoCount() {
    const { todoList } = this.props
    const completedCount = todoList.reduce((count, todo) =>
      todo.completed ? count + 1 : count,
      0
    )
    const activeCount = todoList.length - completedCount
    const itemWord = activeCount === 1 ? 'item' : 'items'

    return (
      <View style={styles.activeCount}>
        <Text style={styles.footerText}>{activeCount || 'No'} {itemWord} left</Text>
      </View>
    )
  }

  renderClearButton() {
    const { todoList,clearCompleted } = this.props
    const completedCount = todoList.reduce((count, todo) =>
      todo.completed ? count + 1 : count,
      0
    )
    if (completedCount > 0) {
      return (
        <TouchableHighlight style={styles.clearCompleted} onPress={() => clearCompleted()}>
          <Text style={styles.footerText}>Clear completed</Text>
        </TouchableHighlight>
      )
    }
  }

  renderFilterLink(filter) {
    const title = FILTER_TITLES[filter]
    const { changeFilterStatus,filterStatus } = this.props
    return (
      <TouchableHighlight
        style={[styles.filterItem,(filterStatus==filter) && styles.activeFilterItem]} 
        onPress={() => changeFilterStatus(filter)} key={filter}>
        <Text style={[styles.footerText,(filterStatus==filter) && styles.whiteColor]}>{title}</Text>
      </TouchableHighlight>
    )
  }

  render() {
    const { todoItem } = this.props
    return (
     <View style={styles.todoFooter}>
       {/* {this.renderTodoCount()}*/}
        <View style={styles.filterBox}>
          {['SHOW_ALL', 'SHOW_ACTIVE', 'SHOW_COMPLETED' ].map(filter => this.renderFilterLink(filter))}
        </View>
        {this.renderClearButton()}
      </View>
    );
  }
}



export default TodoFooter;