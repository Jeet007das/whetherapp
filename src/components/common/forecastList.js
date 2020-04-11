import React from "react";
import WhetherIcon from "./whetherIcon";
import { formatDateWithTime } from "../../utils/dateConverter";

export default function ForecastList(props) {
	const { lists } = props;
	console.log(lists);
	return (
		<>
			{lists.length &&
				lists.map((value, key) => {
					return (
						<div key={key} className="forecastList">
							<div className="day">{value.day}</div>
							<div className="listDate">
								{formatDateWithTime(new Date(value.date * 1000))}
							</div>
							<div className="temp">{value.low} °C</div>
							<div className="image">
								<WhetherIcon condition={value.text} imageClass="listIcon" />
							</div>
						</div>
					);
				})}
		</>
	);
}
