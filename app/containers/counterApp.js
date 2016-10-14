'use strict';

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import { Navigator } from 'react-native'
import Counter from '../components/Counter';
import * as counterActions from '../actions/counterAction';
import { connect } from 'react-redux';

// @connect(state => ({
//   state: state.counter
// }))
class CounterApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <Navigator
        initialRoute={{ title: 'Counter', index: 0 }}
        renderScene={(route, navigator) =>
          <Counter
            counter={state.count}
            {...actions}
            navigator={navigator}
           />
        }
      />
    );
  }
}

export default connect(state => ({
    state: state.counter
  }),
  (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
  })
)(CounterApp);
