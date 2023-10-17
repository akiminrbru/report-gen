import styles from './ProjectsPage.module.scss';
import plus from '../../assets/plus.svg';
import { Link, useNavigate } from 'react-router-dom';


export const ProjectsCard = ({ data }) => {

  const navigate = useNavigate();

  return (
    <div className={styles.projects__card}>
        <div className={styles.projects__left}>
            <span>{data.counter_id}</span>
            <h4>{data.name}</h4>
        </div>  
        <div className={styles.projects__right}>
            <Link className={styles.projects__linkMore} to={`/project/${data.counter_id}`}>Подробнее</Link>
            <Link className={styles.projects__linkCreate} to={`/createReport/${data.counter_id}`}>
                <img src={plus} alt='#'></img>
                Создать отчет
            </Link>
            
        </div>
    </div>
  )
}
