import {takeLatest, call, put} from 'redux-saga/effects';
import {
	REGISTRATION__USER__FAIL,
	REGISTRATION__USER__REDUCERS,
	REGISTRATION__USER__SUCCESS, USER__LOGIN__FAIL, USER__LOGIN__REDUCERS, USER__LOGIN__SUCCESS,
} from '../action/userLoginRegistration';
import RegistrationApi from '../../Api/RegistrationApi';

export default function* watcher() {
	yield takeLatest(REGISTRATION__USER__REDUCERS, createUserData);
	yield takeLatest(USER__LOGIN__REDUCERS, userLoginReducers);
}

export function* createUserData(action) {
	try {
		const {data} = yield call(RegistrationApi.userRegistrationRequest, action.payload);
		yield put({
			type: REGISTRATION__USER__SUCCESS,
			payload: {data},
		});
	} catch (e) {
		yield put({
			type: REGISTRATION__USER__FAIL,
			message: e.message,
		});
	}
}

export function* userLoginReducers(action) {
	try {
	    const{data} = yield call(RegistrationApi.userLoginRequest,action.payload);
		yield put({
			type:USER__LOGIN__SUCCESS,
			payload:{data}
		})
	} catch (e) {
		yield put({
			type:USER__LOGIN__FAIL,
			message:e.message
		})
	}
}