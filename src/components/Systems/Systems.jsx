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
            <h2>4.Поисковые системы</h2>
            <table>
                <thead>
                    <tr>
                        <td>Источники трафика</td>
                        <td>Яндекс</td>
                        <td>Google</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Переходы из поисковых систем</td>
                        <td>951</td>
                        <td>43</td>
                    </tr>
                </tbody>
            </table>
            <div className={styles.graf}>
                <MyResponsiveLine data={mainData}></MyResponsiveLine>
            </div>
            <p>Переходы из Яндекса были выше, чем из остальных поисковых систем в данный отчетный период.</p>
        </div>
    )
}

export default Systems;