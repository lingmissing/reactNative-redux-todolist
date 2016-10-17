import React, { Component } from 'react'
import { View,StyleSheet,Text,TabBarIOS,NavigatorIOS } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Counter from './counterApp'
import Todo from './todoApp'


const styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
});

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'home'
    } 
  }
 
  render() {
    return (
      <TabBarIOS
        // unselectedTintColor="yellow"
        translucent={true}
        tintColor="white"
        barTintColor="#5dc2af"
      >
        <Icon.TabBarItem
          title="Home"
          iconName="ios-home-outline"
          selectedIconName="ios-home"
          selected={this.state.selectedTab === 'home'}
          onPress={() => {
            this.setState({
              selectedTab: 'home',
            });
        }}>
          <NavigatorIOS
            barTintColor='#5dc2af'
            titleTextColor='#fff'
            // 是否隐藏导航条
            navigationBarHidden={true}
            style={styles.navigator}
            initialRoute={{
              component: Todo,
              passProps: {},
              title: 'TodoList'
            }}
            />
        </Icon.TabBarItem>

        <Icon.TabBarItem
          title="Navicon"
          iconName="ios-person-outline"
          selectedIconName="ios-person"
          selected={this.state.selectedTab === 'navicon'}
          onPress={() => {
            this.setState({
              selectedTab: 'navicon',
            });
        }}>
          <NavigatorIOS
            barTintColor='#5dc2af'
            titleTextColor='#fff'
            style={styles.navigator}
            initialRoute={{
              component: Todo,
              passProps: {},
              title: 'TodoList',
            }}
            />
        </Icon.TabBarItem>

        <Icon.TabBarItem
          title="Setting"
          iconName="ios-settings-outline"
          selectedIconName="ios-settings"
          selected={this.state.selectedTab === 'setting'}
          onPress={() => {
            this.setState({
              selectedTab: 'setting',
            });
        }}>
          <NavigatorIOS
            barTintColor='#5dc2af'
            titleTextColor='#fff'
            style={styles.navigator}
            initialRoute={{
              component: Counter,
              passProps: {},
              title: 'Counter',
            }}
            />
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  }
}

export default Layout;