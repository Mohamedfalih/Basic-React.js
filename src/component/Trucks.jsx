import React from 'react'

import truck from './truck.js'
import '../App.css'

function Trucks() {

  return (
    <>
    <h1> Truck Details</h1>
    <div className = 'container'>
      {truck.map((t,index) => (
        <div  className='car'>
          <img src={t.url} className='carImage'/>
        </div>
      ))}
    </div>
    </>
  )
}

export default Trucks