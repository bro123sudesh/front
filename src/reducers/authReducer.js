import { SET_MESSAGE, LOGIN_SUCCESS } from '../types/messageType';

const initialState = {
	message: null,
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_MESSAGE:
			return {
				...state,
				message: action.payload,
			};
		case LOGIN_SUCCESS:
			localStorage.setItem('token', action.payload);
			return {
				...state,
			};
		default:
			return state;
	}
};
