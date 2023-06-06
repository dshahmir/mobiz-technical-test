import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { ProductsPropType } from '../Interfaces';
import { getData } from '@/utils/helpers';

ChartJS.register(ArcElement, Tooltip, Legend);



const DonutChart = () => {
    const [data, setData] = useState([])

    const fetchData = async () => {
        const data = await getData()
        if (data) setData(data?.data?.products as any)
    }

    useEffect(() => {
        fetchData()
    }, [])
    const graphData = {
        labels: ['Smartphones', 'Laptops', 'Fragrances', 'Skin-Care', 'Home-Decortae'],
        datasets: [
            {
                label: 'Price',
                data: data && data?.map((item: any) => item?.price),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },

        ],
    };
    return <Doughnut data={graphData} />;
}
export default DonutChart