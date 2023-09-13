import React, { useContext, useState } from 'react'
import { Pie } from 'react-chartjs-2'
import { newcontext } from '../App'
import {Chart as ChartJS,Title,ArcElement,Tooltip,Legend} from 'chart.js'

ChartJS.register(
    Title,ArcElement,Tooltip,Legend
)

function PieChart() {

    const [color,setcolor] = useState([{backgroundColor:'lightyellow'},{backgroundColor:'yellow'},{backgroundColor:'green'},{backgroundColor:'darkgreen'},{backgroundColor:'blue'},{backgroundColor:'violet'},{backgroundColor:'pink'},{backgroundColor:'orange'},{backgroundColor:'red'},{backgroundColor:'darkred'}])

    const [FiltredData] = useContext(newcontext)

    const data = {
        
        labels: FiltredData.map(rw=>rw.title),
        datasets:[
            {
               label: 'Rating',
               data:FiltredData.map(rw=>rw.rating),
               backgroundColor:color.map(cl=>cl.backgroundColor),
               borderWidth:1,
               borderColor:'black',
            },
        ]
    }
  return (
    <div className='chartmain2'>
        <div>
        <h3 style={{textAlign:'center',fontFamily:'serif',marginTop:'50px'}}>PieChart Rating</h3>
       <div>
        <Pie
        className='barstyle'
        data={data}
        >

        </Pie>
       </div>
    </div>
    </div>
  )
}

export default PieChart