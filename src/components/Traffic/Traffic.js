import React from 'react'
import MyResponsiveBar from '../MyResponsiveBar';
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
      <h2>3. Источник траффика за период</h2>
      <table>
        <thead>
          <tr>
            <td></td>
            <td>Источники трафика</td>
            <td>Визиты</td>
            <td>Посетители</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Июль</td>
            <td>Переходы из поисковых систем</td>
            <td>876</td>
            <td>581</td>
          </tr>
          <tr>
            <td>Август</td>
            <td>Переходы из поисковых систем</td>
            <td>994</td>
            <td>676</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.graf}>
        <MyResponsiveBar data={data1}></MyResponsiveBar>
      </div>
      <p>Наблюдается увеличение визитов и посетителей по сравнению с предыдущим периодом. <br/> В августе на 118 визитов больше, чем в августе, и на 82 посетителя больше, чем месяцем ранее.</p>
    </div>
  )
}

export default Traffic;