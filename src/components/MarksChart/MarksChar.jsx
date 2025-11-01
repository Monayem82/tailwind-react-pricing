import React, { use } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const MarksChar = ({marksChartpromize}) => {
    const marksDataResponse=use(marksChartpromize)
    // console.log(marksDataResponse)

    // Data preprocessing for chart
    const markDataRes=marksDataResponse.data

    const marksData=markDataRes.map((students)=>{
        const student={
            id:students.ID,
            name:students.Name,
            physics:students.Marks.Physics,
            math:students.Marks.Math,
            chemistry:students.Marks.Chemistry,
        }
        // student.avg=(physics+math+chemistry)/3
        const avg=(student.chemistry+student.math+student.physics)/3
        student.avg=avg
        
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
        </div>
    );
};

export default MarksChar;