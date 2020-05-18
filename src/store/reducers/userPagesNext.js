import {DELETE_TOKEN_REDUCERS} from '../action/userLoginRegistration';

const initialState = {
	goToHome: true,
};
export default function reducer(state = initialState, action) {
	switch (action.type) {
		case DELETE_TOKEN_REDUCERS: {
			return {goToHome: state.goToHome = action.payload};
		}
		default: {
			return state;
		}
	}
}
