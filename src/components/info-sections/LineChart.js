import React, { useEffect } from 'react';
import Chart from 'chart.js';

const LineChart = ({ data }) => {
  useEffect(() => {
    var ctx = document.getElementById('tempChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      responsive: true,
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ],
        datasets: [
          {
            label: 'High Temperature',
            data: data.highs,
            backgroundColor: ['rgba(255, 0, 0, 0)'],
            borderColor: ['rgba(255, 0, 0, 1)'],
            borderWidth: 2
          },
          {
            label: 'Low Temperature',
            data: data.lows,
            backgroundColor: ['rgba(0,0,256,0)'],
            borderColor: ['rgba(0,0,256,1)'],
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }, [data]);

  return (
    <div className="chart-container">
      <canvas id="tempChart"></canvas>
    </div>
  );
};

export default LineChart;
