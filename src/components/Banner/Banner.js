import React from "react";
import "./Banner.css";

const Banner = () => {
	return (
		<div className="banner d-flex justify-content-center align-items-center">
			<div className="">
				<h1>Best food waiting for your belly</h1>
				<input type="text" placeholder="Search food items" />
				<input type="submit" value="Search" />
			</div>
		</div>
	);
};

export default Banner;
