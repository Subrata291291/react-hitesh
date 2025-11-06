import React from 'react'
import { useState } from 'react'
function BgColor() {
  const [color, setColor] = useState("black")
  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex-wrap flex justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-2 shadow-2xl bg-white px-2 py-2 rounded-3xl">
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-xl cursor-pointer" style={{backgroundColor: "red"}} onClick={()=> setColor("red")}>Red</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-xl cursor-pointer" style={{backgroundColor: "green"}} onClick={()=> setColor("green")}>Green</button>
            <button className="outline-none px-4 py-1 rounded-full text-black shadow-xl cursor-pointer" style={{backgroundColor: "yellow"}} onClick={()=> setColor("yellow")}>Yellow</button>
          </div>
        </div>
    </div>
    </>
  )
}

export default BgColor
