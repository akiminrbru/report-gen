import Header from '../Header/Header';
import styles from './ProjectPage.module.scss';
import plus from '../../assets/plus.svg'
import search from '../../assets/search.svg'
import edit from '../../assets/edit.svg'
import ProjectCard from './ProjectCard';

const ProjectPage = () => {
  return (
    <>
        <Header></Header>
        <main className={styles.project}>
            <div className='container'>
                <div className={styles.project__inner}>
                    <div className={styles.project__panel}>
                        <div className={styles.project__name}>
                            <img src={edit}></img>
                            <h4>rbru.ru</h4>
                        </div>
                        <div className={styles.project__btns}>
                            <button className={styles.project__add}>
                                <img src={plus}></img>
                                Добавить отчет
                            </button>
                            <div className={styles.project__search}> 
                                <input type='text' placeholder='Поиск'></input>
                                <img src={search}></img>
                            </div>
                        </div>
                    </div>
                    <div className={styles.project__list}>
                        <ProjectCard></ProjectCard>
                        <ProjectCard></ProjectCard>
                        <ProjectCard></ProjectCard>
                        <ProjectCard></ProjectCard>
                        <ProjectCard></ProjectCard>
                        <ProjectCard></ProjectCard>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default ProjectPage