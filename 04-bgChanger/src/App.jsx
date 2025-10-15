import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("black")

  const colors = [
  "red",
  "green",
  "blue",
  "orange",
  "purple",
  "lime",
  "magenta",
  "teal",
  "indigo",
  "cyan",
  "olive"
];

  return (
    
      <div className='w-full h-screen relative' style={{backgroundColor:color}}>
        <div className='flex flex-wrap justify-center fixed bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap bg-white gap-3 px-3 py-4 rounded-xl justify-center shadow-lg'>
            {colors.map((clr, i) => (
              <button key={i} onClick={() => setColor(clr)} className='flex justify-center text-white px-4 py-1 rounded-full shadow-lg transition hover:scale-105'
              style={{backgroundColor:clr}}>{clr}</button>
            ))}
            
            {/* <button onClick={() => (setColor("red"))} className='flex justify-center text-white px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"red"}}>Red</button>
            <button onClick={() => setColor("green")} className='flex justify-center text-white px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"green"}}>Green</button>
            <button onClick={() => setColor("blue")} className='flex justify-center text-white px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"blue"}}>Blue</button> */}

          </div>
          
        </div>
      

      </div>
    
  )
}

export default App
