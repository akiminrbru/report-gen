import React from 'react'
import styles from './Conversion.module.scss';
import MyResponsiveLineConversion from '../MyResponsiveLineConversion';

const Conversion = ({ data }) => {
    let dataConversion = JSON.parse(data);

    // console.log(dataConversion)

    let newArr = dataConversion.map(el => {
        let copy1 = Object.assign(el);
        let copy2 = Object.assign(el);
        return [copy1, copy2];
    })

    newArr[0][0].id = 'asdasd';


    console.log(newArr)

    newArr.map(obj => {
        // console.log(obj);
        // let conv = obj[0].data.conversion;
        // let reach = obj[1].data.reaches;
        // let dates = obj[0].data.dates;

        // console.log(obj);

        // console.log(conv);
        // console.log(reach);
        // console.log(obj[0])

        // let conv2 = obj[1].data.reaches;
        // let dates2 = obj[1].data.dates;

        // delete obj[0]['data'];
        // obj[0]['data'] = [];

        // delete obj[1]['data'];
        // obj[1]['data'] = [];

               
        // for (let i = 0; i <= 30; i++) {
        //     obj[0]['data'].push({x: dates[i].slice(-2)});
        //     obj[0]['data'][i]['y'] = conv[i];
        // }

        // for (let i = 0; i <= 30; i++) {
        //     obj[1]['data'].push({x: dates2[i].slice(-2)});
        //     obj[1]['data'][i]['y'] = conv2[i];
        // }
    })

    // console.log(newArr);

    // dataConversion.map(obj => {
    //     let conv = obj.data.conversion;
    //     let dates = obj.data.dates;

    //     delete obj['data'];
    //     obj['data'] = [];

               
    //     for (let i = 0; i <= 30; i++) {
    //         obj['data'].push({x: dates[i].slice(-2)});
    //         obj['data'][i]['y'] = conv[i];
    //     }
    // });

    return (
        <div className={styles.conversion}>
            <h2>Конверсии</h2>
            <div className={styles.conversion__list}>
                {
                    dataConversion.map(el => (
                        <div className={styles.conversion__card} key={el.id}>
                            <h5>{el.name}</h5>
                            <div className={styles.conversion__right}>
                                {/* <MyResponsiveLineConversion data={[el]}></MyResponsiveLineConversion> */}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
  )
}

export default Conversion