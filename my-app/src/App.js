import { createContext, useEffect, useState } from 'react';
import './App.css';
import TableData from './Components/TableData';
import axios from 'axios'
import Barchart from './Components/BarGraph';
import PieChart from './Components/PieChart';

export const newcontext = createContext()

function App() {

  const [Details,setDetails] = useState([]);

  const FiltredData = Details.filter(FiltredData=> FiltredData.id <= 10)

  useEffect( () => {
    axios.get('https://dummyjson.com/products')
    .then((res=>{
      console.log(res.data.products);
      setDetails(res.data.products)
    }))
  }, [])
  
  return (
    <div>
      <newcontext.Provider value={[FiltredData]}>
      <TableData/>
      <Barchart/>
      <PieChart/>
      </newcontext.Provider>
    </div>
  );
}

export default App;
