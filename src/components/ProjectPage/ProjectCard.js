import styles from './ProjectPage.module.scss';
import del from '../../assets/delete.svg'


const ProjectCard = ({data}) => {

  return (
    <div className={styles.project__card}>
        <div className={styles.project__left}>
            <span>{data.date}</span>
            <h4>Отчет за 10.09.2023 - 09.10.2023</h4>
        </div>
        <div className={styles.project__right}>
            <button>
                <img src={del} alt='#'></img>
                Удалить отчет
            </button>
            <a href="#">Посмотреть отчет</a>
        </div>
    </div>
  )
}

export default ProjectCard