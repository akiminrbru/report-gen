import { ResponsiveLine } from "@nivo/line";
import { getColoredAxis } from "../color";

const line1Color = "blue";

const SecondGraph = ( { data1, data2 }) => {
    const data1AndData2 = data1.concat(data2);

    return (
      <ResponsiveLine
        data={data1AndData2}
        colors={[
          "rgba(255, 255, 255, 0)",
          "red"
        ]} /* Make the first line transparent with 0 opacity */
        margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
        axisRight={{
          legend: "Достижения",
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
                border: "13px solid #ccc"
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

export default SecondGraph;