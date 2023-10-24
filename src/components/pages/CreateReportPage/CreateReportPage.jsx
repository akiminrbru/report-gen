import React, { useState } from "react";
import styles from "./CreateReportPage.module.scss";
import Header from "../../Header/Header";
import editIcon from "../../../assets/edit.svg";
import saveIcon from "../../../assets/save.svg";
import okeyIcon from "../../../assets/okey.svg";
import closeIcon from "../../../assets/delete.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGetProjectQuery, useGetReportConversionMutation, useGetReportGoalsMutation, useGetReportGoalsQuery } from "../../../redux";
import { useParams } from "react-router-dom";
import Loader from "react-js-loader";

const CreateReport = () => {
	const [nameReport, setNameReport] = useState("Новый отчет");
	// const [startDate, setStartDate] = useState(new Date());
	// const [endDate, setEndDate] = useState(new Date().setMonth(new Date().getMonth() - 1));

	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);

	const handleChange = ([newStartDate, newEndDate]) => {
		setStartDate(newStartDate);
		setEndDate(newEndDate);
	};

	let params = useParams();
	const { data, isLoading, error } = useGetProjectQuery(params.counterId);

	if (isLoading)
		return (
			<div className={styles.createReport__loading}>
				<Loader type="spinner-default" bgColor={"#000"} color={"#000"} title={"Загрузка..."} size={100} />
			</div>
		);

	return (
		<>
			<Header></Header>
			<main className={styles.createReport}>
				<div className="container">
					<div className={styles.createReport__inner}>
						<div className={styles.createReport__panel}>
							<h3>{data.name}</h3>
							<div className={styles.createReport__nameReport}>
								<img src={editIcon} alt="#"></img>
								<input value={nameReport} onChange={(e) => setNameReport(e.target.value)}></input>
							</div>
							<button className={styles.createReport__btnSave}>
								<img src={saveIcon} alt="#"></img>
								Сохранить
							</button>
						</div>
						<div className={styles.createReport__step}>
							<div className={styles.createReport__stepTop}>
								<div className={styles.createReport__stepTopLeft}>
									<span className={styles.createReport__stepNumber}>1</span>
									<h5 className={styles.createReport__stepTitle}>Выберите период отчета</h5>
								</div>
								<div>
									<DatePicker className={styles.createReport__stepDatepicker} selected={startDate} onChange={handleChange} selectsRange startDate={startDate} endDate={endDate} dateFormatCalendar="MMMM" showYearDropdown />
								</div>
							</div>
						</div>
						{startDate && endDate && (
							<>
								<div className={styles.createReport__step}>
									<div className={styles.createReport__stepTop}>
										<div className={styles.createReport__stepTopLeft}>
											<span className={styles.createReport__stepNumber}>2</span>
											<h5 className={styles.createReport__stepTitle}>Видимость по семантическому ядру</h5>
										</div>
										<div></div>
									</div>
								</div>
								<Conversion startDate={startDate} endDate={endDate} />
							</>
						)}
					</div>
				</div>
			</main>
		</>
	);
};

export const Conversion = ({ startDate, endDate }) => {
	let params = useParams();
	const [toggle, setToggle] = useState(false);
	const [data, setData] = useState([]);

	const [getReportGolas, { isLoading }] = useGetReportGoalsMutation();

	const getGolas = () => {
		getReportGolas(params.counterId)
			.unwrap()
			.then((res) => {
				console.log(res);
				setData(res);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className={styles.createReport__step}>
			<div className={styles.createReport__stepTop}>
				<div className={styles.createReport__stepTopLeft}>
					<span className={styles.createReport__stepNumber}>3</span>
					<h5 className={styles.createReport__stepTitle}>Конверсии</h5>
				</div>
				<div className={styles.createReport__stepTopRight}>
					<button
						onClick={() => {
							setToggle(!toggle);
							getGolas();
						}}
						className={toggle ? styles.createReport__stepTopBtn : styles.createReport__stepTopBtnActive}>
						{toggle ? <img src={okeyIcon}></img> : <img src={closeIcon}></img>}
						{toggle ? "Включить" : "Выключить"}
					</button>
				</div>
			</div>
			<div className={styles.createReport__stepContent}>{isLoading ? "Загрузка" : data.map((el) => <ConversionOne data={el} key={el.id} startDate={startDate} endDate={endDate} />)}</div>
		</div>
	);
};

export const ConversionOne = ({ data, startDate, endDate }) => {
	let params = useParams();

	let counter = params.counterId;
	let goal_id = data.id;
	let datefrom = startDate;
	let dateto = endDate;

	// console.log(data);

	const [getReportConversion, { isLoading }] = useGetReportConversionMutation();

	const getGoal = () => {
		getReportConversion(params.counterId, goal_id, datefrom, dateto)
			.unwrap()
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	return (
		<div className={styles.createReport__conversionCard}>
			<input type="checkbox" />
			<p onClick={() => getGoal()}>Клик по номеру телефона</p>
		</div>
	);
};

export default CreateReport;
