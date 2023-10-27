import React from "react";
import styles from "./Conversion.module.scss";
import MyResponsiveLineConversion from "../MyResponsiveLineConversion";
import FirstGraph from "./FirstGraph/FirstGraph";

const ConversionBlock = ({ data }) => {
	console.log(data);

	let dataConversion = data;

	// let dataConversion = JSON.parse(data);

	if (data === undefined) {
		return <></>;
	}

	return <FirstGraph data={dataConversion}></FirstGraph>;
};

export default ConversionBlock;
