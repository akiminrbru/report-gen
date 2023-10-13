import styles from './ProjectsPage.module.scss';
import plus from '../../assets/plus.svg';
import { Link } from 'react-router-dom';


export const ProjectsCard = ({ data }) => {
  return (
    <div className={styles.projects__card}>
        <div className={styles.projects__left}>
            <span>{data.counter_id}</span>
            <h4>{data.name}</h4>
        </div>  
        <div className={styles.projects__right}>
            <Link to={`/project/${data.id}`}>Подробнее</Link>
            <button>
                <img src={plus}></img>
                Создать отчет
            </button>
        </div>
    </div>
  )
}
