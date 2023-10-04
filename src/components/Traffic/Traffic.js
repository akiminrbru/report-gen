import React from 'react'
import MyResponsiveBar from '../MyResponsiveBar';
import dataBarJson from '../../dataBar.json';
import styles from './Traffic.module.scss';

const Traffic = ({data}) => {
  let dataTraffic = JSON.parse(data);
  let dataCurrent = dataTraffic.current;
  let dataLast = dataTraffic.last;

  let data1 = [];
  let data2 = [];

  dataLast.visits.forEach(elem => {
    data1.push({'Прошлый месяц': elem});
  });

  dataCurrent.visits.forEach(elem => {
    data2.push({'Текущий месяц': elem});
  });

  for (let i = 0; i <= 30; i++) {
    data1[i]['Текущий месяц'] = data2[i]['Текущий месяц'];
    data1[i]['country'] = dataCurrent.dates[i].slice(-2);
  } 

  return (
    <div className={styles.traffic}>
      <h2>Источник траффика за период</h2>
      <MyResponsiveBar data={data1}></MyResponsiveBar>
    </div>
  )
}

export default Traffic;