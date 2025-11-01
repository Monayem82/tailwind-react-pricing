import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const resultChartdata = [
    {
        "ID": "S001",
        "Name": "Alice Johnson",
        "Math": 92,
        "Physics": 85,
        "Chemistry": 88
    },
    {
        "ID": "S002",
        "Name": "Bob Williams",
        "Math": 75,
        "Physics": 88,
        "Chemistry": 79
    },
    {
        "ID": "S003",
        "Name": "Clara Davis",
        "Math": 95,
        "Physics": 90,
        "Chemistry": 94
    },
    {
        "ID": "S004",
        "Name": "David Lee",
        "Math": 68,
        "Physics": 72,
        "Chemistry": 65
    },
    {
        "ID": "S005",
        "Name": "Eva Rodriguez",
        "Math": 88,
        "Physics": 84,
        "Chemistry": 91
    }
]


const ResultChart = () => {
    return (
        <div>
            <div>
                <h1 className='text-4xl text-center'>Result Chart</h1>
                <LineChart width={600} height={300} data={resultChartdata} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <Line type="monotone" dataKey="Math" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="Physics" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="Chemistry" stroke="#ffc658" />
                </LineChart>
            </div>


            <div>
                <BarChart width={600} height={400} data={resultChartdata}>
                    <XAxis dataKey="Name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="Math" fill="#8884d8" />
                    <Bar dataKey="Physics" fill="#82ca9d" />
                    <Bar dataKey="Chemistry" fill="#ffc658" />
                </BarChart>
            </div>

        </div>

    );
};

export default ResultChart;