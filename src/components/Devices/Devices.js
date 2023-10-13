import MyResponsivePie from '../MyResponsivePie';
import { useState } from 'react';
import styles from './Devices.module.scss'
import dataJson from '../../data.json';

const Devices = ({data}) => {
    let dataDevices = JSON.parse(data);
    let arr = [];

    dataDevices.map(obj => {
        obj['value'] = obj['visits'];
        obj['id'] = obj['perc'];
        obj['label'] = obj['name']['name'];
        delete obj['visits'];
        delete obj['name'];
        delete obj['perc'];
        arr.push(obj);
    })

    return (
        <div className={styles.devices}>
            <h2>6.Типы устройств</h2>
            <div className={styles.graf}>
                <MyResponsivePie data={arr}></MyResponsivePie>
            </div>
            <p>Аудитория сайта в основном заходит со смартфонов.</p>
        </div>
    )
}

export default Devices;