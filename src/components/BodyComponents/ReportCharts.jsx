import React, { useState } from 'react';
import Chart from 'react-apexcharts';

function ReportCharts() {
  const [data, setData] = useState({
    series: [
      {
        name: 'Sales',
        data: [31, 40, 28, 51, 42, 82, 56],
      },
      {
        name: 'Revenue',
        data: [45, 60, 38, 70, 55, 90, 80],
      },
      {
        name: 'Customers',
        data: [10, 20, 15, 25, 18, 30, 25],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'area',
        toolbar: {
          show: false,
        },
      },
      marker: {
        size: 4,
      },
      colors: ['#4154f1', '#2eca6a', '#ff771d'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.3,
          opacityTo: 0.4,
          stops: [0, 90, 100],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2018-09-19T00:00:00.000Z',
          '2018-09-19T01:30:00.000Z',
          '2018-09-19T02:30:00.000Z',
          '2018-09-19T03:30:00.000Z',
          '2018-09-19T04:30:00.000Z',
          '2018-09-19T05:30:00.000Z',
          '2018-09-19T06:30:00.000Z',
        ],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yyyy HH:mm',
        },
      },
    },
  });

  return (
    <div>
    <Chart
    options={data.options}
    series={data.series}
    type="area"
    height={350}
    />
    </div>
  );
}

export default ReportCharts;
