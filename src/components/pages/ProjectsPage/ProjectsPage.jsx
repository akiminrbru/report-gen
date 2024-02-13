import styles from "./ProjectsPage.module.scss";
import search from "../../../assets/search.svg";
import { useGetAllProjectsQuery } from "../../../redux";
import { ProjectsCard } from "./ProjectsCard";
import ProjectsForm from "./ProjectsForm";
import { useState, useMemo } from "react";
import Loader from "react-js-loader";
import CommonButton from "../../common/button/CommonButton";
import open from "../../../assets/icons/open.svg";
import Layout from "../../layout/Layout/Layout";

const ProjectsPage = () => {
	const [searchText, setSearchText] = useState("");
	const { data, isLoading, error } = useGetAllProjectsQuery();

	let [isOpen, setIsOpen] = useState(false);

	const searchResults = useMemo(() => {
		if (!data) {
			return [];
		}

		return data.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()));
	}, [data, searchText]);

	const handleInputChange = (e) => {
		setSearchText(e.target.value);
	};

	if (isLoading)
		return (
			<div className={styles.projects__loading}>
				<Loader type="spinner-default" bgColor={"#000"} color={"#000"} title={"Загрузка..."} size={100} />
			</div>
		);

	return (
		<>
			<Layout>
				<div className={styles.projects}>
					<div className={styles.projects__panel}>
						<CommonButton handler={() => setIsOpen(true)} imgLink={open} text={"Добавить проект"} color="black" />
						<div className={styles.projects__search}>
							<input type="text" value={searchText} onChange={handleInputChange} placeholder="Поиск"></input>
							<img src={search} alt="icon"></img>
						</div>
					</div>
					<div className={styles.projects__list}>{data === null ? <div>Список проеков пуст</div> : searchResults.map((item) => <ProjectsCard data={item} key={item.id}></ProjectsCard>)}</div>
				</div>
			</Layout>
			<ProjectsForm isOpen={isOpen} setIsOpen={setIsOpen}></ProjectsForm>
		</>
	);
};

export default ProjectsPage;
