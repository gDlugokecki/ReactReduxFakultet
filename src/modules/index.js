import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Counter from "./Counter/CounterReducer";

export default combineReducers({
  router: routerReducer,
  Counter
});
