import { useState } from 'react'
import data from './Data'
import './App.css'

import Cards from './Componenets/Cards';

function App() {
  const [DATA , setData] = useState([data[0]]);
  const [active , setActive] = useState(1);

   
    
   function CardHandler(newID){
    setActive(newID);
    const newData  = data.filter(D=>D.id === newID);
    setData(newData);
   }
   


  return (
    <div className='flex flex-col justify-center items-center w-full h-screen  bg-gradient-to-r from-[#f6f6d9] via-[#47e4e0] to-[#5f81e4]'>
    <div className='w-full'>
      <Cards active = {active} datta={DATA} CardHandler = {CardHandler}></Cards>
    </div>
    </div>
  )
     
}

export default App
