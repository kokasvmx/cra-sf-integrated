import { combineReducers } from 'redux';
import { actionLoadingReducer } from './loading';

import { reducer as helloReducer } from 'actions/hello';
import { reducer as SFAPICall } from 'actions/SFAPICall';

export default function makeReducer() {
  return combineReducers({
    hello: helloReducer,
    loading: actionLoadingReducer,
    SFAPICall,
  });
}
