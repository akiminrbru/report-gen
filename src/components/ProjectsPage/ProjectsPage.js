import Header from '../Header/Header';
import styles from './ProjectsPage.module.scss';
import plus from '../../assets/plus.svg';
import search from '../../assets/search.svg';
import { useGetAllProjectsQuery } from '../../redux';
import { ProjectsCard } from './ProjectsCard';

const ProjectsPage = () => {
    // const {data, isLoading, error} = useGetAllProjectsQuery();

    // console.log(error);

    // let response = fetch("https://report.rbru-test.ru/api/project/all", {
    //     method: "GET",
    //     headers: {
    //         Authorization: localStorage.getItem('token')
    //     }
    // })

    let projects = [
        {
            "id": 1,
            "name": "боборол",
            "counter_id": 56246770,
            "brands": "boboroll,бобороллллл"
        },
        {
            "id": 2,
            "name": "euroexpert",
            "counter_id": 56721241,
            "brands": "euroexpert,евроэксперт"
        },
        {
            "id": 3,
            "name": "gvozdi",
            "counter_id": 57270913,
            "brands": "gvozditut,гвоздитут"
        }
    ];

    console.log(projects)

    return (
        <>
            <Header></Header>
            <main className={styles.projects}>
                <div className='container'>
                    <div className={styles.projects__inner}>
                        <div className={styles.projects__panel}>
                            <button className={styles.projects__add}>
                                <img src={plus}></img> Добавить проект
                            </button>
                            <div className={styles.projects__search}>
                                <input type='text' placeholder='Поиск'></input>
                                <img src={search}></img>
                            </div>
                        </div>
                        <div className={styles.projects__list}>
                            {
                                projects.map(el => <ProjectsCard data={el} key={el.id}></ProjectsCard>)
                            }
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ProjectsPage;