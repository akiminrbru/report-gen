import './FirstGraph.css';
import { ResponsiveLine } from "@nivo/line";
import SecondGraph from "../SecondGraph/SecondGraph";
import data from '../../Test/data';
import { getColoredAxis } from '../color';

const line1Color = "blue";

const FirstGraph = ({ data }) => {
    let newArr = structuredClone(data);
    let newArr2 = structuredClone(data);

    let conv = newArr[0].data.conversion;
    let reach = newArr2[0].data.reaches;
    let dates = newArr[0].data.dates;

    delete newArr[0]['data'];
    newArr[0]['id'] = 'Конверсия'
    newArr[0]['data'] = [];
         
    for (let i = 0; i <= 30; i++) {
      newArr[0]['data'].push({x: dates[i].slice(-5)});
      newArr[0]['data'][i]['y'] = conv[i];
    }

    delete newArr2[0]['data'];
    newArr2[0]['id'] = 'Достижения';
    newArr2[0]['data'] = [];
            
    for (let i = 0; i <= 30; i++) {
      newArr2[0]['data'].push({x: dates[i].slice(-5)});
      newArr2[0]['data'][i]['y'] = reach[i];
    }


    // newArr.map(obj => {
    //     let conv = obj[0].data.conversion;
    //     let dates = obj[0].data.dates;

    //     delete obj[0]['data'];
    //     obj[0]['id'] = 'Конверсия'
    //     obj[0]['data'] = [];
         
    //     for (let i = 0; i <= 30; i++) {
    //         obj[0]['data'].push({x: dates[i].slice(-5)});
    //         obj[0]['data'][i]['y'] = conv[i];
    //     }
    // });

    // newArr2.map(obj => {
    //     let reach = obj[0].data.reaches;
    //     let dates = obj[0].data.dates;

    //     delete obj[0]['data'];
    //     obj[0]['id'] = 'Достижения';
    //     obj[0]['data'] = [];
            
    //     for (let i = 0; i <= 30; i++) {
    //         obj[0]['data'].push({x: dates[i].slice(-5)});
    //         obj[0]['data'][i]['y'] = reach[i];
    //     }
    // });

    // console.log(newArr);
    // console.log(newArr2);

    return (
        <div>
        <div className="wrapper">
            <div className="graphContainer">
            <ResponsiveLine
                data={newArr}
                colors={[line1Color]}
                layers={["grid", "axes", "lines", "markers", "legends"]}
                axisLeft={{
                legend: "Конверсия %",
                legendPosition: "middle",
                legendOffset: -40
                }}
                theme={getColoredAxis(line1Color)}
                margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
            />
            </div>

            <div className="secondGraph">
              <SecondGraph data1={newArr} data2={newArr2}/>
            </div>
        </div>
        </div>
    );
}

export default FirstGraph;