import {combineReducers} from 'redux';
import userProfileReducer from './userProfileReducer';

const rootReducer = combineReducers({
  userProfileReducer,
});
export default rootReducer;
