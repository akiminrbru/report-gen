import React from 'react'
import styles from './ProjectPage.module.scss';
import ProjectCard from './ProjectCard';
import { useParams } from 'react-router-dom';
import { useGetAllReportsQuery } from '../../redux';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ReportsList = () => {
    let params = useParams();    
    const {data, isLoading, error} = useGetAllReportsQuery(params.counterId);

    if (isLoading) return (
        <div >
          <h1>Загрузка...</h1>
          {/* <Skeleton count={5} height={70}/> */}
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