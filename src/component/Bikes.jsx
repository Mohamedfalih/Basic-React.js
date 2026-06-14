import React from 'react'

import bike from './bike.js'
import '../App.css'

function Bikes() {

  return (
    <>
    <h1>Bike Details</h1>
    <div className = 'container'>
      {bike.map((b,index) => (
        <div className='car'>
          <img src={b.url} className='carImage'/>
        </div>
      ))}
    </div>
    </>
  )
}

export default Bikes