import axios from 'axios';
import {
	SET_MESSAGE,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	LOGIN_REQUEST,
	REGISTER_FAILURE,
	REGISTER_SUCCESS,
	LOGOUT,
} from '../types/messageType';
import { history } from '../helpers';

export const login = (data, callback) => (dispatch) => {
	axios.post('http://localhost:5000/api/v1/auth/login', data).then(
		(resp) => {
			if (resp.data.success) {
				dispatch({
					type: LOGIN_SUCCESS,
					payload: resp.data.token,
				});
				history.push('/');
			} else {
				dispatch({
					type: LOGIN_FAILURE,
					payload: resp.data.error,
				});
			}
			console.log(resp);
		},
		(err) => {
			console.log(err.response.data);
			dispatch({
				type: LOGIN_FAILURE,
				payload: 'Failed to login.',
			});
		}
	);
};
export const register = (data, callback) => (dispatch) => {
	axios.post('http://localhost:5000/api/v1/auth/register', data).then(
		(resp) => {
			if (resp.data.success) {
				callback();
			} else {
				dispatch({
					type: SET_MESSAGE,
					payload: resp.data.error,
				});
			}
		},
		(err) => {
			console.log(err.response);
			dispatch({
				type: SET_MESSAGE,
				payload: 'Failed to Register.',
			});
		}
	);
};
