'use strict';

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import Counter from '../components/Counter';
import * as counterActions from '../actions/counterAction';
import { connect } from 'react-redux';


class CounterApp extends Component {
  render() {
    const { state, actions, navigator } = this.props;
    console.log(this.props);
    return (
      <Counter
        counter={state.count}
        navigator={navigator}
        {...actions}
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
