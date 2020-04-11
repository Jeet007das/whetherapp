import { toast } from "react-toastify";

export const errorHandler = (status, message) => {
	toast.error(message);
};
