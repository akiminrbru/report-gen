import React from 'react'
import styles from './Conversion.module.scss';
import MyResponsiveLineConversion from '../MyResponsiveLineConversion';

const Conversion = ({ data }) => {
    let dataConversion = JSON.parse(data);

    let newArr = dataConversion.map(el => {
        return [structuredClone(el), structuredClone(el)];
    })


    newArr.map(obj => {
        let conv = obj[0].data.conversion;
        let reach = obj[1].data.reaches;
        let dates = obj[0].data.dates;

        delete obj[0]['data'];
        obj[0]['id'] = 'Конверсия'
        obj[0]['data'] = [];

        delete obj[1]['data'];
        obj[1]['id'] = 'Достижения';
        obj[1]['data'] = [];

               
        for (let i = 0; i <= 30; i++) {
            obj[0]['data'].push({x: dates[i].slice(-2)});
            obj[0]['data'][i]['y'] = conv[i];
        }

        for (let i = 0; i <= 30; i++) {
            obj[1]['data'].push({x: dates[i].slice(-2)});
            obj[1]['data'][i]['y'] = reach[i];
        }
    })

    console.log(newArr[0]);

    return (
        <div className={styles.conversion}>
            <h2>Конверсии</h2>
            <div className={styles.conversion__list}>
                {
                    newArr.map(el => (
                        <div className={styles.conversion__card} key={el[0].id}>
                            <h5>{el[0].name}</h5>
                            <div className={styles.conversion__right}>
                                <MyResponsiveLineConversion data={el}></MyResponsiveLineConversion>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
  )
}

export default Conversion