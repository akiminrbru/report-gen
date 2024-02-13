import styles from "./ProjectPage.module.scss";
import close from "../../../assets/icons/close.svg";
import CommonButton from "../../common/button/CommonButton";

const ProjectCard = ({ data }) => {
	return (
		<div className={styles.project__card}>
			<div className={styles.project__left}>
				{data.date && <span>{data.date}</span>}
				<h4>Отчет за 10.09.2023 - 09.10.2023</h4>
			</div>
			<div className={styles.project__right}>
				<CommonButton imgLink={close} text={"Удалить отчет"} color="black" />
				<CommonButton isLink href={"Посмотреть отчет"} text={"Посмотреть отчет"} color="gray" />
			</div>
		</div>
	);
};

export default ProjectCard;
