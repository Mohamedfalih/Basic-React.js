import React from 'react'

import car from './car.js'
import '../App.css'

function Cars() {

  return (
    <>
    <h1>Car Details</h1>
    <div className = 'container'>
      {car.map((c,index) => (
        <div className='car'>
          <img src={c.url} className='carImage'/>
        </div>
      ))}
    </div>
    </>
  )
}

export default Cars