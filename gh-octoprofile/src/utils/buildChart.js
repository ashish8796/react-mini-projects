/* eslint-disable no-unused-vars */
/* eslint-disable default-case */
import Chart from "chart.js";

export function buildChart(config) {
  const { ctx, chartType, labels, data, backgroundColor, borderColor, axes, deviceWidth } = config;

  let legend;
  switch (chartType) {

    case "pie":
      legend = {
        position: (320 <= deviceWidth && deviceWidth <= 480) ? "left" : "right",
        align: "start",
        fullWidth: false,
        labels: {
          boxWidth: 20
        }
      }
      break;
    case "bar":
      legend = {
        display: false
      }
      break;
    case "doughnut":
      legend = {
        position: (320 <= deviceWidth && deviceWidth <= 480) ? "left" : "right",
        align: "start",
        labels: {
          boxWidth: 20
        }
      }
  }

  const scales = {
    xAxes: [{
      categoryPercentage: .5,
      barPercentage: 1.0
    }],
    yAxes: [{
      ticks: {
        beginAtZero: true,
        fontSize: 10
      },
      barPercentage: 0.5,
      categoryPercentage: .5,
    }]
  }

  const myChart = new Chart(ctx, {
    type: chartType,
    maintainAspectRatio: false,
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      legend: legend,
      scales: (axes ? scales : null)
    }
  })

  return myChart;
}