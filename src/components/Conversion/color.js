export const getColoredAxis = (color) => {
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