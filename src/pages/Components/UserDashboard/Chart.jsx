import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function Chart() {
  return (
    <div>
        <section className='d-flex flex-column justify-content-center align-items-center py-5'>
                    <h1>Frequently Rented Car</h1>
                    <div className='mx-4 mt-4' >
                        <Pie data={dataMobil} />
                    </div>
                </section>
    </div>
  )
}

export const dataMobil = {
    labels: ['Rush', 'Xenia', 'Fortuner', 'Pajero', 'Corolla', 'Avanza'],
    datasets: [
      {
        label: '# Daftar',
        data: [150, 39, 21, 19, 14, 80],
        backgroundColor: [
          '#FFE5B4',
          '#FFA500',
          '#3A5BA0',
          '#1363DF',
          '#06283D',
          '#CDF0EA',
        ],
        borderColor: [
          '#F6FBF4',
          '#F6FBF4',
          '#F6FBF4',
          '#F6FBF4',
          '#F6FBF4',
        ],
        borderWidth: 1,
      },
    ],
  };

export default Chart