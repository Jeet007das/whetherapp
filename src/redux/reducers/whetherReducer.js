const initialState = {
	cityInfo: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case "SET_CITIES_INFO":
			return {
				...state,
				cityInfo: action.payload,
			};
		default:
			return state;
	}
}
