const ctx = document.getElementById('myChart').getContext('2d');
const labels = ['0', '1', '2', '3', '4', '5', '6', '7'];

const data = {
  labels,
  datasets: [
    {
      data: [
        26.4, 39.8, 66.8, 66.4, 40.6, 55.2, 77.4, 69.8, 57.8, 76, 110.8, 142.6,
      ],
      fill: true,
      backgroundColor: '#7667b0',
      tension: 0,
    },
    {
      data: [50, 100, 150, 120, 150, 120, 140, 160, 180, 200, 220, 240],
      fill: true,
      backgroundColor: '#38bae1',
      tension: 0.4,
    },
  ],
};

const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
};

const myChart = new Chart(ctx, config);

var ctx2 = document.getElementById('myChart2').getContext('2d');
var chart = new Chart(ctx2, {
  // The type of chart we want to create
  type: 'line', // also try bar or other graph types

  // The data for our dataset
  data: {
    labels: ['0', '1', '2', '3', '4'],
    // Information about the dataset
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: '#ddd',
        fill: true,

        borderColor: 'grey',
        data: [
          26.4, 39.8, 66.8, 66.4, 40.6, 55.2, 77.4, 69.8, 57.8, 76, 110.8,
          142.6,
        ],
        tension: 1,
      },
    ],
  },

  // Configuration options
  options: {
    layout: {
      padding: 10,
    },
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Precipitation in Toronto',
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

// piechart
$(function () {
  $('.piechart').easyPieChart({
    scaleColor: false,
    lineWidth: 10,
    lineCap: '#496a85',
    barColor: '#7667b0',
    size: 150,
    animate: 500,
  });
  $('.piechart2').easyPieChart({
    scaleColor: false,
    lineWidth: 10,
    lineCap: 'red',
    barColor: 'red',
    size: 150,
    animate: 500,
  });
});
