import {
	REGISTRATION__USER__SUCCESS,
	USER__LOGIN__SUCCESS,
} from '../action/userLoginRegistration';
const initialState = {
	userRegistrationData: [],
	userLoginData: [],
};
export default function reducer(state = initialState, action) {
	switch (action.type) {
		case REGISTRATION__USER__SUCCESS: {
			return {userRegistrationData: action.payload};
		}
		case USER__LOGIN__SUCCESS: {
			return {userLoginData: action.payload};
		}
		default: {
			return state;
		}
	}
}
