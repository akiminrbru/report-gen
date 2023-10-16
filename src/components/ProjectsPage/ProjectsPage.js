import Header from '../Header/Header';
import styles from './ProjectsPage.module.scss';
import plus from '../../assets/plus.svg';
import search from '../../assets/search.svg';
import { useGetAllProjectsQuery } from '../../redux';
import { ProjectsCard } from './ProjectsCard';
import ProjectsForm from './ProjectsForm';
import { useEffect, useState } from 'react';


const ProjectsPage = () => {
    const {data, isLoading, error} = useGetAllProjectsQuery();
    

    let [isOpen, setIsOpen] = useState(false);

    // console.log(data);

    if (isLoading) return (
        <div className={styles.projects__loading}>
          <h1>Загрузка...</h1>
        </div>
    )

    return (
        <>
            <Header></Header>
            <main className={styles.projects}>
                <div className='container'>
                    <div className={styles.projects__inner}>
                        <div className={styles.projects__panel}>
                            <button onClick={() => setIsOpen(true)} className={styles.projects__add}>
                                <img src={plus}></img> Добавить проект
                            </button>
                            <div className={styles.projects__search}>
                                <input type='text' placeholder='Поиск'></input>
                                <img src={search}></img>
                            </div>
                        </div>
                        <div className={styles.projects__list}>
                            {
                                data.map(el => <ProjectsCard data={el} key={el.id}></ProjectsCard>)
                            }
                        </div>
                    </div>
                </div>
            </main>
            <ProjectsForm isOpen={isOpen} setIsOpen={setIsOpen}></ProjectsForm>
        </>
    )
}

export default ProjectsPage;