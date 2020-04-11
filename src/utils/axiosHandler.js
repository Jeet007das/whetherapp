import { toast } from "react-toastify";
import { errorHandler } from "./errorHandler";
import axios from "axios";
import { host } from "../config";

const validateStatus = (status) => {
	return status >= 200 && status <= 400;
};

export const post = (path, data, options = {}) => {
	return new Promise((resolve, reject) => {
		axios
			.post(host + path, data, {
				headers: {
					"Content-Type": "application/json",
					...options.headers,
				},
				validateStatus: validateStatus,
				...options,
			})
			.then((res) => {
				if (options.successMessage && res.data.code) {
					toast.success(options.successMessage);
				}
				if (options.errorMessage && !res.data.code) {
					toast.error(options.errorMessage);
				}

				resolve(res.data);
			})
			.catch((e) => {
				if (e.response) {
					errorHandler(
						e.response.status,
						options.errorMessage ? options.errorMessage : `Error Occurred ${e}`,
					);
				}
				reject(e);
			});
	});
};
