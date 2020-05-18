import {combineReducers} from 'redux';
import userLoginRegistration from './userLoginRegistration';
import userPagesNext from './userPagesNext';

export default combineReducers({
  userLoginRegistration,
  userPagesNext
})
