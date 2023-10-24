import React from 'react'
import styles from './ProjectPage.module.scss';
import ProjectCard from './ProjectCard';
import { useParams } from 'react-router-dom';
import { useGetAllReportsQuery } from '../../../redux';
import Loader from "react-js-loader";

const ReportsList = ({data}) => {
    return (
        <div className={styles.project__list}>
            {
                data == null ? <div>Отчеты отсутствуют!</div> : data.map(card => <ProjectCard data={card} key={card.id}></ProjectCard>)
            }
        </div>
    )
}

export default ReportsList