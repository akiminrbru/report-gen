import React from "react";
import "./Test.css";
import { data, data2 } from "./data.js";
import { ResponsiveLine } from "@nivo/line";

const line1Color = "blue";

export default function Test({ dannie }) {

    // console.log(dannie);

    let dataConversion = JSON.parse(dannie);
    
    let newArr = dataConversion.map(el => {
        return [structuredClone(el)];
    });

    let newArr2 = dataConversion.map(el => {
        return [structuredClone(el)];
    })


    newArr.map(obj => {
        let conv = obj[0].data.conversion;
        let dates = obj[0].data.dates;

        delete obj[0]['data'];
        obj[0]['id'] = 'Конверсия'
        obj[0]['data'] = [];
         
        for (let i = 0; i <= 30; i++) {
            obj[0]['data'].push({x: dates[i].slice(-5)});
            obj[0]['data'][i]['y'] = conv[i];
        }
    });

    newArr2.map(obj => {
        let reach = obj[0].data.reaches;
        let dates = obj[0].data.dates;

        delete obj[0]['data'];
        obj[0]['id'] = 'Достижения';
        obj[0]['data'] = [];
            
        for (let i = 0; i <= 30; i++) {
            obj[0]['data'].push({x: dates[i].slice(-5)});
            obj[0]['data'][i]['y'] = reach[i];
        }
    });
    
    console.log(newArr[0]);
    console.log(newArr2[0]);


    return (
        <div>
        <div className="wrapper">
            <div className="graphContainer">
            <ResponsiveLine
                data={newArr[0]}
                colors={[line1Color]}
                layers={["grid", "axes", "lines", "markers", "legends"]}
                axisLeft={{
                legend: "Points Scored",
                legendPosition: "middle",
                legendOffset: -40
                }}
                theme={getColoredAxis(line1Color)}
                margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
            />
            </div>

            <div className="secondGraph">
            <SecondGraph dannie={newArr} dannie2={newArr2}/>
            </div>
        </div>
        </div>
    );
}

// I want this to be on top of the other graph
const SecondGraph = ( { dannie, dannie2 }) => {

    // console.log(dannie[0]);
    // console.log(dannie2[0])
    // const data1And2 = data.concat(data2);

    const dannie1AndDannie2 = dannie[0].concat(dannie2[0]);

    console.log(dannie1AndDannie2)

  const data1And2 = data.concat(data2);
//   console.log("Graph2 Data: ", data1And2);

  return (
    <ResponsiveLine
      data={dannie1AndDannie2}
      colors={[
        "rgba(255, 255, 255, 0)",
        "red"
      ]} /* Make the first line transparent with 0 opacity */
      margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
      axisRight={{
        legend: "Wins / Loss",
        legendPosition: "middle",
        legendOffset: 40
      }}
      axisLeft={null}
      axisTop={null}
      enableGridY={false}
      axisBottom={null}
      theme={getColoredAxis("red")}
      /* Add this for tooltip */
      useMesh={true}
      enableSlices="x"
      sliceTooltip={({ slice }) => {
        return (
          <div
            style={{
              background: "white",
              padding: "9px 12px",
              border: "1px solid #ccc"
            }}
          >
            <div>x: {slice.points[0].data.x}</div>
            {slice.points.map((point) => (
              <div
                key={point.id}
                style={{
                  color:
                    point.serieColor === "rgba(255, 255, 255, 0)"
                      ? line1Color
                      : point.serieColor,
                  padding: "3px 0"
                }}
              >
                <strong>{point.serieId}</strong> [{point.data.yFormatted}]
              </div>
            ))}
          </div>
        );
      }}
    />
  );
};

const getColoredAxis = (color) => {
  return {
    axis: {
      ticks: {
        line: {
          stroke: color
        },
        text: { fill: color }
      },
      legend: {
        text: {
          fill: color
        }
      }
    }
  };
};
