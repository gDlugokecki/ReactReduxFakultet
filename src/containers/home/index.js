import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterSelectors from '../../modules/Counter/CounterSelectors'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/Counter/CounterActions';

const Home = props => (
  <div>
    <h1>Home</h1>


    <p>
      <button onClick={props.increment} disabled={props.isIncrementing}>
        Increment
      </button>
      <button onClick={props.incrementAsync} disabled={props.isIncrementing}>
        Increment Async
      </button>
    </p>

    <p>
      <button onClick={props.decrement} disabled={props.isDecrementing}>
        Decrement
      </button>
      <button onClick={props.decrementAsync} disabled={props.isDecrementing}>
        Decrement Async
      </button>
    </p>

    <p>
      <button onClick={() => props.changePage()}>
        Go to about page via redux
      </button>
    </p>
  </div>
);

const mapStateToProps = state => ({
    count: CounterSelectors.GetCounterValue(state),
    isIncrementing: CounterSelectors.IsIncrementing(state),
    isDecrementing: CounterSelectors.IsDecrementing(state),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push('/about-us')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
