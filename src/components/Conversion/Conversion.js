import React from 'react'
import styles from './Conversion.module.scss';
import MyResponsiveLineConversion from '../MyResponsiveLineConversion';
import FirstGraph from './FirstGraph/FirstGraph';

const Conversion = ({ data }) => {
    let dataConversion = JSON.parse(data);

    return (
        <div className={styles.conversion}>
            <h2>Конверсии</h2>
            <div className={styles.conversion__list}>
                {
                    dataConversion.map(el => (
                        <div className={styles.conversion__card} key={el.id}>
                            <h5>{el.name}</h5>
                            <div className={styles.conversion__right}>
                                <FirstGraph data={[el]}></FirstGraph>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
  )
}

export default Conversion