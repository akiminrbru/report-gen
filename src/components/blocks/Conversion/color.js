// export const getColoredAxis = (color) => {
//     return {
//       axis: {
//         ticks: {
//           line: {
//             stroke: color
//           },
//           text: { fill: color }
//         },
//         legend: {
//           text: {
//             fill: color
//           }
//         }
//       }
//     };
//   };

  export const getColoredAxis = (color) => {
    return {
      axis: {
        ticks: {
          line: {
            stroke: "#858585"
          },
          text: { fill: "#858585" }
        },
        legend: {
          text: {
            fill: "#858585"
          }
        }
      }
    };
  };