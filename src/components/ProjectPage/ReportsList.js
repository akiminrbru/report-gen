import React from 'react'
import styles from './ProjectPage.module.scss';
import ProjectCard from './ProjectCard';
import { useParams } from 'react-router-dom';
import { useGetAllReportsQuery } from '../../redux';
import Loader from "react-js-loader";

const ReportsList = () => {
    let params = useParams();    
    const {data, isLoading, error} = useGetAllReportsQuery(params.counterId);

    if (isLoading) return (
        <div >
          <Loader type="spinner-default" bgColor={"#000"} color={"#000"} title={"Загрузка..."} size={100} />
        </div>
    )
    
    // console.log(data);

    return (
        <div className={styles.project__list}>
            {
                data == null ? <div>Отчеты отсутствуют!</div> : data.map(card => <ProjectCard data={card} key={card.id}></ProjectCard>)
            }
        </div>
    )
}

export default ReportsList