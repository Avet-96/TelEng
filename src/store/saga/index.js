import {all, fork} from 'redux-saga/effects';
import userLoginRegistration from './userLoginRegistration';


export default function* watchers() {

  yield all([fork(userLoginRegistration)]);
}
