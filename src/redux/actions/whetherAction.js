import { post } from "../../utils/axiosHandler";
import { toast } from "react-toastify";

export const getWhetherInfo = (data) => {
	return post("/whether/getWhetherInfo", { cities: data });
};

export const setCities = (payload) => {
	console.log(payload);
	return {
		type: "SET_CITIES_INFO",
		payload: payload,
	};
};
