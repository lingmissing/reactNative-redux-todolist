import React, {Component} from 'react';
import { View,ListView,TouchableHighlight,Text,StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  menuList: {
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#f9f9f9',
    paddingHorizontal: 10
  },
  menuListText: {
    lineHeight: 40,
    color: '#ccc'
  }
});

class List extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['TodoList', 'Counter']),
    };
  }
  goNext(data) {
    const props = this.props
    props.navigator.push({
      component: props[data],
      title: data,
      tintColor: '#fff'
    })
  }
  renderList(data) {
    return <TouchableHighlight style={styles.menuList} onPress={() => this.goNext(data)}>
             <Text style={styles.menuListText}>{data}</Text>
           </TouchableHighlight>
  }
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => this.renderList(rowData)}
      />
    );
  }
}

export default List;