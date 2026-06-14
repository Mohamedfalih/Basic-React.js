import React, { useState } from 'react'

function FontChanges() {
    const [size,setSize] = useState(16)
  return (
    <div>
        <p style={{fontSize: `${size}px`,marginTop:'100px'}}>🏍️</p>
        <button onClick={()=>setSize(size+50)} className ='I' style={{marginLeft:'50px'}}> ☝️ Increment </button>
        <button onClick={()=>setSize(size-50)} className ='D' style={{marginLeft:'50px'}}> 👇 Decrement</button>
    </div>
  )
}

export default FontChanges