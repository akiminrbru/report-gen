import "./FirstGraph.css";
import { ResponsiveLine } from "@nivo/line";
import SecondGraph from "../SecondGraph/SecondGraph";
import data from "../../Test/data";
import { getColoredAxis } from "../color";

const line1Color = "black";

const FirstGraph = ({ data }) => {
	console.log(data);

	let newArr = structuredClone(data);
	let newArr2 = structuredClone(data);

	let conv = newArr.data.conversion;
	let reach = newArr2.data.reaches;
	let dates = newArr.data.dates;

	delete newArr["data"];
	newArr["id"] = "Конверсия";
	newArr["data"] = [];

	for (let i = 0; i <= 30; i++) {
		newArr["data"].push({ x: dates[i].substr(0, 5) });
		newArr["data"][i]["y"] = conv[i];
	}

	delete newArr2["data"];
	newArr2["id"] = "Достижения";
	newArr2["data"] = [];

	for (let i = 0; i <= 30; i++) {
		newArr2["data"].push({ x: dates[i].substr(0, 5) });
		newArr2["data"][i]["y"] = reach[i];
	}

	// Не надо

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
		<div className="wrapper">
			<div className="graphContainer">
				<ResponsiveLine
					data={[newArr]}
					colors={[line1Color]}
					layers={["grid", "axes", "lines", "markers", "legends"]}
					enableGridX={false}
					enableGridY={false}
					axisBottom={null}
					enablePoints={false}
					pointSize={4}
					curve="catmullRom"
					axisLeft={{
						legend: "Конверсия",
						legendPosition: "middle",
						legendOffset: -40,
						tickSize: 0,
						tickPadding: 13,
						renderTick: ({ textAnchor, textBaseline, textX, textY, theme, value, x, y }) => {
							return (
								console.log(value),
								(
									<g transform={`translate(${x},${y})`}>
										<text fontSize="10px" alignmentBaseline={textBaseline} textAnchor={textAnchor} transform={`translate(${textX + 7},${textY})`}>
											{value} %
										</text>
									</g>
								)
							);
						},
					}}
					theme={getColoredAxis(line1Color)}
					margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
				/>
			</div>

			<div className="secondGraph">
				<SecondGraph data1={[newArr]} data2={[newArr2]} />
			</div>
			<div className="graph-wrapper"></div>
		</div>
	);
};

export default FirstGraph;
