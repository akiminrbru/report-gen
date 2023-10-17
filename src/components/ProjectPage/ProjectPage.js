import Header from '../Header/Header';
import styles from './ProjectPage.module.scss';
import plus from '../../assets/plus.svg';
import search from '../../assets/search.svg';
import edit from '../../assets/edit.svg';
import arrowLeftIcon from '../../assets/arrowLeft.svg';
import { useGetProjectQuery } from '../../redux';
import { useNavigate, useParams } from 'react-router-dom';
import ReportsList from './ReportsList';
import Loader from "react-js-loader";
import ProjectForm from './ProjectForm';
import { useState } from 'react';



const ProjectPage = () => {
    let params = useParams();
    const {data, isLoading, error} = useGetProjectQuery(params.counterId);

    const navigate = useNavigate();

    let [isOpen, setIsOpen] = useState(false);


    if (isLoading) return (
        <div className={styles.project__loading}>
          <Loader type="spinner-default" bgColor={"#000"} color={"#000"} title={"Загрузка..."} size={100} />
        </div>
    )
    
    return (
        <>
            <Header></Header>
            <main className={styles.project}>
                <div className='container'>
                    <div className={styles.project__inner}>
                        <div className={styles.project__back}>
                            <button onClick={() => navigate('/')}>
                                <img src={arrowLeftIcon}></img>
                                Назад к проектам    
                            </button>
                        </div>
                        <div className={styles.project__panel}>
                            <div className={styles.project__name}>
                                <img src={edit} onClick={() => setIsOpen(true)}></img>
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
                        <ProjectForm isOpen={isOpen} setIsOpen={setIsOpen} counter={data.counter_id}></ProjectForm>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ProjectPage