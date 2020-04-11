import { combineReducers } from "redux";
import whetherReducer from "./whetherReducer";

export const allReducers = combineReducers({
	whether: whetherReducer,
});

export const rootReducer = (state, action) => {
	return allReducers(state, action);
	//return allReducers;
};
