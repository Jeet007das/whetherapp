import { post } from "../../utils/axiosHandler";

export const getWhetherInfo = (data) => {
	return post("/whether/getWhetherInfo", { cities: data });
};

export const setCities = (payload) => {
	return {
		type: "SET_CITIES_INFO",
		payload: payload,
	};
};
