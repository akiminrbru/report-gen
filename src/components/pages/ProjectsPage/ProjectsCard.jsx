import styles from "./ProjectsPage.module.scss";
import { useNavigate } from "react-router-dom";
import CommonButton from "../../common/button/CommonButton";
import open from "../../../assets/icons/open.svg";

export const ProjectsCard = ({ data }) => {
	const navigate = useNavigate();

	return (
		data && (
			<div className={styles.projects__card}>
				<div className={styles.projects__left}>
					{data.counter_id && <span>{data.counter_id}</span>}
					{data.name && <h4>{data.name}</h4>}
				</div>
				<div className={styles.projects__right}>
					<CommonButton isLink href={`/project/${data.counter_id}`} text={"Подробнее"} color="gray" />
					<CommonButton isLink href={`/createReport/${data.counter_id}`} imgLink={open} text={"Создать отчет"} color="black" />
				</div>
			</div>
		)
	);
};
