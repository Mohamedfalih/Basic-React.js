import React from 'react'
import { useState } from 'react'
import '../App.css'
function DynamicInput() {
  const [name,setName] = useState("");
  return (
    <div className ='abc'>
      <input type="text" 
      placeholder='Enter your name' 
      value={name} 
      onChange={(e)=>setName(e.target.value)}/>
      <p>Hello!,{name}</p>
    </div>
  )
}

export default DynamicInput