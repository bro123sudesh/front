import { SUCCESS, ERROR, CLEAR } from '../types/alertType';

export const success = (message) => (dispatch) => {
	dispatch({
		type: SUCCESS,
		payload: message,
	});
};
export const error = (message) => (dispatch) => {
	dispatch({
		type: ERROR,
		payload: message,
	});
};
export const clear = (message) => (dispatch) => {
	dispatch({
		type: CLEAR,
	});
};
