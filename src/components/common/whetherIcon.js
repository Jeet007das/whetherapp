import React from "react";

export default function WhetherIcon(props) {
	switch (props.condition) {
		case "Cloudy":
			return (
				<img
					className={props.imageClass}
					src={require("../../assets/images/cloudy.svg")}
				/>
			);
			break;
		case "Mostly Sunny":
			return (
				<img
					className={props.imageClass}
					src={require("../../assets/images/sunny.svg")}
				/>
			);
			break;
		case "Sunny":
			return (
				<img
					className={props.imageClass}
					src={require("../../assets/images/sunny.svg")}
				/>
			);
			break;
		case "Scattered Showers":
			return (
				<img
					className={props.imageClass}
					src={require("../../assets/images/storm.svg")}
				/>
			);
			break;
		case "Partly Cloudy":
			return (
				<img
					className={props.imageClass}
					src={require("../../assets/images/partlysunny.svg")}
				/>
			);
			break;
		case "Rainy":
			return (
				<img
					className={props.imageClass}
					src={require("../../assets/images/rainy.svg")}
				/>
			);
			break;
		default:
			return (
				<img
					className={props.imageClass}
					src={require("../../assets/images/cloudy.svg")}
				/>
			);
	}
}
