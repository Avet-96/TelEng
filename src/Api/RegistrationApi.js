import axios from 'axios';

export const API_URL = 'http://localhost:4000/';
axios.defaults.baseURL = API_URL;

class RegistrationApi {
	static userRegistrationRequest(data) {

		return axios.post('user/user-sing-up', data);
	}

	static userLoginRequest(data) {
		return axios.post('user/user-sing-in', data);
	}
	static searchRequest(name) {
		return axios.get(`user/user-sing-in${name}`);
	}
}

export default RegistrationApi;
