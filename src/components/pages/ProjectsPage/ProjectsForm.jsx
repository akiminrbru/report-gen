import React, { useState } from "react";
import styles from "./ProjectsPage.module.scss";
import closeIcon from "../../../assets/delete.svg";
import ChipInput from "../../common/ChipInput/ChipInput";
import { useCreateProjectMutation } from "../../../redux/projectsApi";
import { useForm } from "react-hook-form";

const ProjectsForm = ({ isOpen, setIsOpen }) => {
	const [createProject, result] = useCreateProjectMutation();

	const [chips, setChips] = useState([]);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		let createProjectData = {
			counter: data.counterProject,
			name: data.nameProject,
			brands: chips.join(),
		};

		let response = await createProject(createProjectData)
			.then((res) => res)
			.catch((res) => res)
			.finally((res) => (setChips([]), reset()));

		console.log(response);

		if (response.error) {
			setIsOpen(false);
			alert(response.error.data);
		} else if (response.data === true) {
			setIsOpen(false);
			alert("Проект успешно создан!");
		}
	};

	return (
		<div className={isOpen ? styles.projects__formWrap : styles.projects__formWrapDis}>
			<div className={styles.projects__formInner}>
				<button onClick={() => setIsOpen(false)} className={styles.projects__formClose}>
					<img src={closeIcon}></img>Закрыть
				</button>
				<form onSubmit={handleSubmit(onSubmit)} className={styles.projects__form}>
					<div className={styles.projects__formContent}>
						<div>
							<label>Название проекта</label>
							<div className={styles.projects__formRight}>
								<input className={styles.projects__formInput} {...register("nameProject", { required: true, maxLength: 100 })}></input>
								{errors?.nameProject?.type === "required" && <p className={styles.projects__formWarning}>Укажите название проекта</p>}
							</div>
						</div>
						<div>
							<label>Счетчик проекта</label>
							<div className={styles.projects__formRight}>
								<input className={styles.projects__formInput} {...register("counterProject", { required: true, maxLength: 100 })}></input>
								{errors?.counterProject?.type === "required" && <p className={styles.projects__formWarning}>Укажите счетчик проекта</p>}
							</div>
						</div>
						<div>
							<label>Брендовые запросы</label>
							<div className={styles.projects__formRight}>
								<div className={styles.projects__formArea}>
									<ChipInput chips={chips} setChips={setChips} />
								</div>
								{chips.length === 0 ? <p className={styles.projects__formWarning}>Необходимо указать минимум 1 брендовый запрос</p> : <></>}
							</div>
						</div>
					</div>
					<button type="submit" disabled={chips.length == 0 ? true : false}>
						Добавить
					</button>
				</form>
			</div>
		</div>
	);
};

export default ProjectsForm;
