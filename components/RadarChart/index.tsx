import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { getData } from '@/utils/helpers';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);



const RadarChart = () => {
    const [data, setData] = useState([])

    const fetchData = async () => {
        const data = await getData()
        if (data) setData(data?.data?.products as any)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const graphData = {
        labels: ['Price', 'Rating', 'Stock', 'Discount Percentage'],
        datasets: [
            {
                label: 'Price',
                data: data && data?.map((item: any) => item?.price),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
            {
                label: 'rating',
                data: data && data?.map((item: any) => item?.rating),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
            {
                label: 'Stock',
                data: data && data?.map((item: any) => item?.stock),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
            {
                label: 'discount',
                data: data && data?.map((item: any) => item?.discountPercentage),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };
    return <Radar data={graphData} />;
}
export default RadarChart
