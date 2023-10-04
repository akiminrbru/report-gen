import React, { useState } from 'react'
import MyResponsivePie from '../MyResponsivePie'
import styles from './Audience.module.scss'

const Audience = ({data}) => {
    let dataAges = JSON.parse(data);
    let arr = [];

    dataAges.map(obj => {
        obj['value'] = obj['visits'];
        obj['id'] = obj['perc'];
        obj['label'] = obj['name']['name'];
        delete obj['visits'];
        delete obj['name'];
        delete obj['perc'];
        arr.push(obj);
    })

    return (
        <div className={styles.audience}> 
            <h2>Аудитория сайта</h2>
            <MyResponsivePie data={arr}></MyResponsivePie>
        </div>
  )
}

export default Audience