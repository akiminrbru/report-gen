import React from 'react'
import styles from './Conversion.module.scss';
import MyResponsiveLine from '../MyResponsiveLine';
import dataLineJson from '../../dataLine.json'

const Conversion = ({ data }) => {
    let dataConversion = JSON.parse(data);

    console.log(dataConversion);


    return (
        <div className={styles.conversion}>
            <h2>Конверсии</h2>
            <div className={styles.conversion__list}>
                {
                    dataConversion.map(el => (
                        <div className={styles.conversion__card} key={el.id}>
                            <h5>{el.name}</h5>
                            <div className={styles.conversion__right}>
                                <MyResponsiveLine data={dataLineJson}></MyResponsiveLine>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
  )
}

export default Conversion