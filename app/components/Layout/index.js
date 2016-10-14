import React, { Component } from 'react'
import { View,TouchableHighlight,StyleSheet,Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


const styles = StyleSheet.create({
  layout: {
    flex: 1,
    // flexDirection: 'row'
  },
  sideBox: {
    position:'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
    // backgroundColor: 'blue'
  },
  layer: {
    position:'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  side: {
    width:200,
    position: 'absolute',
    top: 0,
    bottom: 0,
    zIndex: 1000,
    // height: 100,
    backgroundColor: '#fefefe',
    paddingTop: 20,
  },
  menuList: {
    height: 36,
    // backgroundColor: '#ccc',
    borderBottomWidth: 2,
    paddingHorizontal: 10,
    borderColor: '#ccc'
  },
  menuIcon: {
    position: 'absolute',
    left: 10,
    bottom: 10,
    zIndex: 100,
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
  goNavigation(title,index) {
    const { navigator } = this.props
    this.setState({
      showAside: !this.state.showAside
    });
    console.log('navigator',navigator);console.log(title,index);
    navigator.push({
      title: title,
      index: index,
    });
  }
  renderMenuList() {
    const showAside = this.state.showAside
    let menuList
    if(showAside) {
      menuList =  <TouchableHighlight style={styles.sideBox} onPress={() => this.handleShowAside()}>
                    <View style={styles.sideBox}>
                      <View style={styles.side}>
                        <TouchableHighlight style={styles.menuList}>
                          <Text style={styles.navigationText}>navigation</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.menuList} onPress={() => this.goNavigation('Counter',0)}>
                          <Text style={styles.menuText}>Counter</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.menuList} onPress={() => this.goNavigation('TodoList',1)}>
                          <Text style={styles.menuText}>TodoList</Text>
                        </TouchableHighlight>
                      </View>
                      <View style={styles.layer}></View>
                    </View>
                  </TouchableHighlight>
    }else {
      // menuList = ''
    }
    return menuList
  }
  render() {
    return (
      <View style={styles.layout}>
        <TouchableHighlight 
          style={styles.menuIcon} 
          onPress={() => this.handleShowAside()}>
          <Icon 
            name='navicon'
            size={20}
            color='#5dc2af'
          />
        </TouchableHighlight>
        {this.renderMenuList()}
        {this.props.children}
      </View>
    );
  }
}

export default Layout;