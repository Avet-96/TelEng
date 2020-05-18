export const REGISTRATION__USER__REDUCERS = 'REGISTRATION__USER__REDUCERS';
export const REGISTRATION__USER__SUCCESS = 'REGISTRATION__USER__SUCCESS';
export const REGISTRATION__USER__FAIL = 'REGISTRATION__USER__FAIL';

export function userRegistrationReducers(name, f_name, year, password, r_password, email) {
	return {type: REGISTRATION__USER__REDUCERS, payload: {name, f_name, year, password, r_password, email}};
}

export const USER__LOGIN__REDUCERS = 'USER__LOGIN__REDUCERS';
export const USER__LOGIN__SUCCESS = 'USER__LOGIN__SUCCESS';
export const USER__LOGIN__FAIL = 'USER__LOGIN__FAIL';

export function userLoginReducers(email, password) {
	return {type: USER__LOGIN__REDUCERS, payload: {email, password}};
}

export const DELETE_TOKEN_REDUCERS = 'DELETE_TOKEN_REDUCERS';

export function deleteUserToken(goToPage) {
	return {type: DELETE_TOKEN_REDUCERS, payload: goToPage};
}
