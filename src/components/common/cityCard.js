import React, { useEffect, useState } from "react";
import "../../assets/styles.css";
import { cityList } from "../../utils/citiesList";
import cloneDeep from "lodash/cloneDeep";
import { connect } from "react-redux";
import { setCities, getWhetherInfo } from "../../redux/actions/whetherAction";
import swal from "sweetalert";
import WhetherInfo from "./whetherInfo";

function CityCard(props) {
	const [cities, setCityList] = cloneDeep(useState(props.whetherInfo));
	const [cityName, setCityName] = useState([]);

	useEffect(() => {
		props.setCities(cityList);
		setTimeout(() => setCityList(props.whetherInfo), 0);
	}, [props]);

	const selectCity = (cityObj) => {
		const selectCities = cities.map((city) => {
			if (city.name === cityObj.name) {
				if (city.active) {
					const selectedCity = cityName.filter((name) => name !== city.name);
					setCityName(selectedCity);
					city.active = false;
					return city;
				} else {
					setCityName([...cityName, city.name]);
					city.active = true;
					return city;
				}
			} else return city;
		});
		setCityList(selectCities);
	};

	const getWhetherData = async () => {
		if (cityName.length) {
			//call api service to retrieve whether info
			const res = await getWhetherInfo(cityName);
			if (res.code) {
				const { whetherInfo } = res;
				let newCityInfo = [];
				cities.forEach((city) => {
					city.whetherInfo =
						whetherInfo[city.name] != null ? whetherInfo[city.name] : null;
					newCityInfo.push(city);
				});
				//setCityName([])
				console.log(newCityInfo);
				setCityList(newCityInfo);
			}
		} else {
			swal("Oops", "City is not selected", "error");
		}
	};

	return (
		<div className="view">
			{cities.length &&
				cities.map((city, key) => {
					return (
						<>
							<div
								Key={key}
								className="card_view"
								onClick={() => selectCity(city)}
							>
								<div className="card_checkBox">
									<div
										style={
											city.active
												? { backgroundColor: "#0bf031" }
												: { backgroundColor: "#ffffff" }
										}
										className="checkBox"
									/>
									<div className="cityName">{city.name}</div>
								</div>
							</div>

							{city.whetherInfo ? <WhetherInfo cityWhetherInfo={city} /> : null}
						</>
					);
				})}

			<div className="btn">
				<button onClick={getWhetherData} className="btn_view">
					Get Whether
				</button>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		whetherInfo: state.whether.cityInfo,
	};
};

export default connect(mapStateToProps, { setCities })(CityCard);
