import { ResponsiveLine } from "@nivo/line";
import { getColoredAxis } from "../color";

const line1Color = "red";

const SecondGraph = ({ data1, data2 }) => {
	const data1AndData2 = data1.concat(data2);

	return (
		<ResponsiveLine
			data={data1AndData2}
			colors={["rgba(255, 255, 255, 0)", line1Color]} /* Make the first line transparent with 0 opacity */
			margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
			axisRight={{
				legend: "Достижения",
				legendPosition: "middle",
				legendOffset: 40,
				tickSize: 0,
				tickPadding: 13,
			}}
			curve="catmullRom"
			axisLeft={null}
			axisTop={null}
			enableGridX={false}
			enableCrosshair={false}
			enableGridY={false}
			axisBottom={null}
			pointSize={8}
			pointBorderWidth={2}
			// enablePoints={true}
			theme={getColoredAxis("red")}
			/* Add this for tooltip */
			useMesh={true}
			enableSlices="x"
			sliceTooltip={({ slice }) => {
				return (
					<div
						style={{
							background: "#000",
							padding: "7px 20px 7px 10px",
							borderRadius: "10px",
							fontSize: "10px",
							color: "#fff",
						}}>
						{/* <div>Дата: {slice.points[0].data.x}</div> */}
						{slice.points.map((point) =>
							// console.log(point),
							point.serieId === "Конверсия" ? (
								<div
									key={point.id}
									style={{
										color: "#fff",
										padding: "3px 0",
									}}>
									<p>
										{point.serieId} {point.data.yFormatted} %
									</p>
								</div>
							) : (
								<div
									key={point.id}
									style={{
										color: "#fff",
										padding: "3px 0",
									}}>
									<p>
										{point.serieId} {point.data.yFormatted}
									</p>
								</div>
							)
						)}
					</div>
				);
			}}
		/>
	);
};

export default SecondGraph;
