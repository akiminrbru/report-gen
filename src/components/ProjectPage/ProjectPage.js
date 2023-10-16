import Header from '../Header/Header';
import styles from './ProjectPage.module.scss';
import plus from '../../assets/plus.svg'
import search from '../../assets/search.svg'
import edit from '../../assets/edit.svg'
import { useGetProjectQuery } from '../../redux';
import { useParams } from 'react-router-dom';
import ReportsList from './ReportsList';

const ProjectPage = () => {
    let params = useParams();
    const {data, isLoading, error} = useGetProjectQuery(params.counterId);

    // console.log(data);

    if (isLoading) return (
        <div className={styles.project__loading}>
          <h1>Загрузка...</h1>
        </div>
    )
    
    return (
        <>
            <Header></Header>
            <main className={styles.project}>
                <div className='container'>
                    <div className={styles.project__inner}>
                        <div className={styles.project__panel}>
                            <div className={styles.project__name}>
                                <img src={edit}></img>
                                <h4>{data.name}</h4>
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
                        <ReportsList></ReportsList>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ProjectPage