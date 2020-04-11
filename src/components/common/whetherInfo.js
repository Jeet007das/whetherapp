import React from "react";
import "../../assets/styles.css";
import { formatDateWithTime } from "../../utils/dateConverter";
import ForeCastList from "./forecastList";
import WhetherIcon from "./whetherIcon";

function WhetherInfo(props) {
	const { whetherInfo } = props.cityWhetherInfo;
	const { current_observation, forecasts } = whetherInfo;

	return (
		<div
			style={{
				background: `linear-gradient(0deg, rgba(255, 255, 255, .7), rgba(255, 255, 255, .7)), url(${props.cityWhetherInfo.image}`,
				backgroundSize: "cover",
			}}
			className="whetherInfo"
		>
			<div className="whetherInfo_city">
				<div className="name">{props.cityWhetherInfo.name}</div>
				<div className="date"> {formatDateWithTime(new Date())}</div>
			</div>
			<div className="whetherInfo_details">
				<div className="temperature">
					{current_observation.condition.temperature}
					°C
				</div>
				<div className="temperature_img">
					<WhetherIcon
						condition={current_observation.condition.text}
						imageClass="image"
					/>
				</div>
			</div>
			<div className="whether_days">
				<ForeCastList lists={forecasts} />
			</div>
		</div>
	);
}

export default WhetherInfo;
