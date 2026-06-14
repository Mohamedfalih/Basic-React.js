import React, { useState } from 'react'

function Toggle() {
    const [show,setShow] = useState(true)
  return (
    <div>
        <button onClick={()=>setShow(!show)}>
            {show?"Hide":"show"}
        </button>
        {show && <h2>Opppan venket</h2>}
    </div>
  )
}

export default Toggle