import React, { useState } from 'react'


function Count() {
    const [count,setCount]=useState(0)
  return (
    <div className='abc'>
        <p>Count: {count}</p>
        <button onMouseEnter={()=>setCount(count+1)}  className ='I' > ☝️ </button>
        <button onMouseEnter={()=>setCount(count-1)}  className ='D' > 👇 </button>
    </div>
  )
}

export default Count