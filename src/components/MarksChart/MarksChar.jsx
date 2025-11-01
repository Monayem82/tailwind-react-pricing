import React, { use } from 'react';
import { Bar, BarChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const MarksChar = ({ marksChartpromize }) => {
    const marksDataResponse = use(marksChartpromize)
    // console.log(marksDataResponse)

    // Data preprocessing for chart
    const markDataRes = marksDataResponse.data

    const marksData = markDataRes.map((students) => {
        const student = {
            id: students.ID,
            name: students.Name,
            physics: students.Marks.Physics,
            math: students.Marks.Math,
            chemistry: students.Marks.Chemistry,
        }
        // student.avg=(physics+math+chemistry)/3
        const avg = (student.chemistry + student.math + student.physics) / 3
        student.avg = avg

        return student
    })

    console.log(marksData)

    return (
        <div>
            <BarChart width={600} height={400} data={marksData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Bar dataKey={'math'} fill='#8884d8'></Bar>
                <Bar dataKey={'physics'} fill='#asdfasf'></Bar>
                <Bar dataKey={'chemistry'} fill='#8884d8'></Bar>

            </BarChart>
            <PieChart data={marksData} style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }}>
                <XAxis dataKey={'name'}></XAxis>
                <Tooltip></Tooltip>
                <Pie
                    dataKey="math"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius="50%"
                    fill="#8884d8"
                />

            </PieChart>

        </div>
    );
};

export default MarksChar;