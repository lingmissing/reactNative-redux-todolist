import React, { Component } from 'react'
import { View,TouchableHighlight,StyleSheet,Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


const styles = StyleSheet.create({
  layout: {
    flex: 1,
    // flexDirection: 'row'
  },
  side: {
    width:150,
    position: 'absolute',
    top: 0,
    bottom: 0,
    zIndex: 1000,
    // height: 100,
    backgroundColor: '#fefefe',
    paddingTop: 20
  },
  menuList: {
    height: 36,
    // backgroundColor: '#ccc',
    borderBottomWidth: 2,
    borderColor: '#ccc'
  },
  menuIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
    zIndex: 2000,
    width: 30,
    height: 30,
    borderRadius: 30
  },
  navigationText: {
    fontSize: 10,
    color: '#f9f9f9',
    lineHeight: 34
  },
  menuText: {
    fontSize: 15,
    color: '#000',
    lineHeight: 34,
  }
});

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAside: false
    } 
  }
  handleShowAside() {
    this.setState({
      showAside: !this.state.showAside
    });
  }
  render() {
    return (
      <View style={styles.layout}>
        <View style={[styles.side,{display: this.state.showAside?'block':'none'}]}>
          <TouchableHighlight 
            style={styles.menuIcon} 
            onPress={() => this.handleShowAside()}>
            <Icon 
              name='navicon'
              size={20}
              color='#5dc2af'
            />
          </TouchableHighlight>
          <View style={styles.menuList}><Text style={styles.navigationText}>navigation</Text></View>
          <View style={styles.menuList}><Text style={styles.menuText}>Counter</Text></View>
          <View style={styles.menuList}><Text style={styles.menuText}>TodoList</Text></View>
        </View>
        {this.props.children}
      </View>
    );
  }
}

export default Layout;