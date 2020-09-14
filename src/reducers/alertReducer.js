import { SUCCESS, ERROR, CLEAR } from '../types/alertType';

const initialState = {
	message: null,
};
export const alertReducer = (state = initialState, action) => {
	switch (action.type) {
		case SUCCESS:
			return {
				type: 'alert-success',
				message: action.message,
			};
		case ERROR:
			return {
				type: 'alert-danger',
				message: action.message,
			};
		case CLEAR:
			return {};
		default:
			return state;
	}
};
