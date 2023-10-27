import React, { useEffect, useState } from "react";
import styles from "./CreateReportPage.module.scss";
import Header from "../../Header/Header";
import editIcon from "../../../assets/edit.svg";
import saveIcon from "../../../assets/save.svg";
import okeyIcon from "../../../assets/okey.svg";
import closeIcon from "../../../assets/delete.svg";
import arrowUpIcon from "../../../assets/arrowUp.svg";
import arrowDownIcon from "../../../assets/arrowDown.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGetProjectQuery, useGetReportConversionActiveMutation, useGetReportConversionMutation, useGetReportGoalsMutation, useGetReportGoalsQuery } from "../../../redux";
import { useParams } from "react-router-dom";
import Loader from "react-js-loader";
import ConversionBlock from "../../Conversion/Conversion";

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

	const getGoals = () => {
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
					{toggle ? (
						<button
							onClick={() => {
								setToggle(!toggle);
							}}
							className={styles.createReport__stepTopBtnActive}>
							<img src={closeIcon}></img>
							Выключить
						</button>
					) : (
						<button
							onClick={() => {
								setToggle(!toggle);
								getGoals();
							}}
							className={styles.createReport__stepTopBtn}>
							<img src={okeyIcon}></img>
							Включить
						</button>
					)}
				</div>
			</div>
			{toggle ? <div className={styles.createReport__stepContent}>{isLoading ? "Загрузка" : data.map((el) => <ConversionOne data={el} key={el.id} startDate={startDate} endDate={endDate} getGoals={getGoals} />)}</div> : <></>}
		</div>
	);
};

export const ConversionOne = ({ data, startDate, endDate, getGoals }) => {
	let params = useParams();

	const [isGoalOpen, setIsGoalOpen] = useState(false);
	const [goalData, setGoalData] = useState();

	const formatDate = (date) => {
		return date.getFullYear() + "-" + ("0" + date.getMonth()).slice(-2) + "-" + ("0" + date.getDate()).slice(-2);
	};

	const [getReportConversion, { isLoading }] = useGetReportConversionMutation();

	const [getReportConversionActive] = useGetReportConversionActiveMutation();

	const getGoal = () => {
		let sendData = {
			counter: params.counterId,
			goal: data.id,
			datefrom: formatDate(startDate),
			dateto: formatDate(endDate),
		};

		setIsGoalOpen(true);

		getReportConversion(sendData)
			.unwrap()
			.then((res) => {
				console.log(res);
				setGoalData(res);
			})
			.catch((err) => console.log(err));
	};

	const getGoalActive = (active) => {
		let sendDataActive = {
			counter: params.counterId,
			id: data.id,
			active: active,
		};

		getReportConversionActive(sendDataActive)
			.unwrap()
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
		getGoals();
	};

	return (
		<div>
			<div className={styles.createReport__conversionCard}>
				<input
					checked={data.active ? "true" : ""}
					onChange={(e) => {
						getGoalActive(data.active ? "0" : "1");
					}}
					type="checkbox"
				/>
				{isGoalOpen ? (
					<p
						onClick={() => {
							setIsGoalOpen(false);
						}}>
						{data.name} <img src={arrowUpIcon}></img>
					</p>
				) : (
					<p
						onClick={() => {
							getGoal();
						}}>
						{data.name} <img src={arrowDownIcon}></img>
					</p>
				)}
			</div>
			{!isGoalOpen ? (
				<></>
			) : isLoading ? (
				<>Загрузка...</>
			) : (
				<div className={styles.createReport__conversionCardContent}>
					<div className={styles.createReport__conversionCardContentLeft}>
						<ConversionBlock data={goalData}></ConversionBlock>
					</div>
					<div className={styles.createReport__conversionCardContentRight}>
						<ul>
							<li>
								Конверсия: <span>{goalData?.data.conversion_sum} %</span>
							</li>
							<li>
								Достижения цели: <span>{goalData?.data.reaches_sum}</span>
							</li>
							<li>
								Целевые визиты: <span>{goalData?.data.visits_sum}</span>
							</li>
						</ul>
					</div>
				</div>
			)}
		</div>
	);
};

export default CreateReport;
