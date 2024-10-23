'use client'
import { Bar } from 'react-chartjs-2'
import 'chart.js/auto'
import { scales } from 'chart.js'

const BarChart = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Number of Payments',
        data: [6, 9, 3, 5, 2, 3],
        backgroundColor: ['#e76d89', '#1e8bc3', '#f3e16b', '#16a085', '#a537fd', '#fabe58'],
        borderColor: ['#e76d89', '#1e8bc3', '#f3e16b', '#16a085', '#a537fd', '#fabe58'],
        borderWidth: 1,
      },
    ],
  }

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }

  return <Bar data={data} options={options} />
}

export default BarChart
