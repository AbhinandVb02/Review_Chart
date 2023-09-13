import React, { useContext, useState } from 'react'
import {Chart as ChartJS,BarElement,CategoryScale,LinearScale,Tooltip,Legend} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { newcontext } from '../App'

ChartJS.register(
    BarElement,CategoryScale,LinearScale,Tooltip,Legend
)

function Barchart() {

  const [FiltredData] = useContext(newcontext)


    const data = {
        
        labels: FiltredData.map(rw=>rw.title),
        datasets:[
            {
               label: 'Rating',
               data:FiltredData.map(rw=>rw.rating),
               backgroundColor:'yellow',
               borderWidth:1,
               borderColor:'black',
            },
        ]
    }

    

  return (
    <div className='chartmain'>
        <h3 style={{textAlign:'center',fontFamily:'serif',marginTop:'50px'}}>BarChart Rating</h3>
       <div>
        <Bar
        className='barstyle'
        data={data}
        >

        </Bar>
       </div>
    </div>
  )
}

export default Barchart