import React, { Component } from 'react'
import { View,StyleSheet,Text,TabBarIOS,NavigatorIOS } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Counter from '../../containers/counterApp'


const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
  main: {
    flex: 1
  },
  bottom: {
    height: 20
  },
  navigator: {
    flex: 1,
  },
});

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: ''
    } 
  }
 
  render() {
    return (
      <View style={styles.layout}>
        <View style={styles.main}>
          {this.props.children}
        </View>
        <View style={styles.bottom}>
          <TabBarIOS>
            <Icon.TabBarItem
              title="Home"
              iconName="home"
              selectedIconName="home"
              selected={this.state.selectedTab === 'home'}
              onPress={() => {
                this.setState({
                  selectedTab: 'home',
                });
            }}>
              <NavigatorIOS
                barTintColor='#5F97F6'
                titleTextColor='#fff'
                style={styles.navigator}
                initialRoute={{
                  component: Counter,
                  passProps: {},
                  title: 'Counter',
                }}
               />
            </Icon.TabBarItem>

            <Icon.TabBarItem
              title="Navicon"
              iconName="navicon"
              selectedIconName="navicon"
              selected={this.state.selectedTab === 'navicon'}
              onPress={() => {
                this.setState({
                  selectedTab: 'navicon',
                });
            }}>
              <NavigatorIOS
                barTintColor='#5F97F6'
                titleTextColor='#fff'
                tintColor="#000"
                style={styles.navigator}
                initialRoute={{
                  component: Counter,
                  passProps: {},
                  title: 'Counter',
                }}/>
               />
            </Icon.TabBarItem>

            <Icon.TabBarItem
              title="Setting"
              iconName="gear"
              selectedIconName="gear"
              selected={this.state.selectedTab === 'setting'}
              onPress={() => {
                this.setState({
                  selectedTab: 'setting',
                });
            }}>
              <NavigatorIOS
                barTintColor='#5F97F6'
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
        </View>
      </View>
    );
  }
}

export default Layout;