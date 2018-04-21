/* eslint-disable sort-imports */
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import busses from './features/busses/reducers';

const rootReducer = combineReducers({
  features: combineReducers({
    busses,
  }),
  routing: routerReducer,
});

export default rootReducer;
