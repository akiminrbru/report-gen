import React, { useState } from 'react';
import MyResponsiveLine from '../MyResponsiveLine';
import styles from './Systems.module.scss';

const Systems = ({ data }) => {
    let dataSystems = JSON.parse(data);

    let arrX = Object.entries(dataSystems.current.dates);
    let arrY = Object.entries(dataSystems.current.Google.visitsByDay);

    let data1 = [];
    let data2 = [];

    arrX.map(obj => {
        data1.push({x: obj['1'].slice(-5)});
    });

    arrY.map(obj => {
        data2.push({y: obj['1']});
    });

    for (let i = 0; i <= 30; i++) {
        data1[i]['y'] = data2[i]['y'];
    }

    let mainData = [
        {
            id: 'Google',
            data: data1,
        },
        {
            id: 'Yandex',
            data: data1,
        }

    ]

    return (
        <div className={styles.systems}>
            <h2>Поисковые системы</h2>
            <MyResponsiveLine data={mainData}></MyResponsiveLine>
        </div>
    )
}

export default Systems;