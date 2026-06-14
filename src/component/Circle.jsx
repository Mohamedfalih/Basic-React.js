import React from 'react'

function AreaOfCircle(radius){
    return 3.14*radius*radius;
}

function Circle() {
    let r= 5;
  return (
    <div>
        <h3>Area of the circle is : {AreaOfCircle(r)}</h3>
    </div>
  )
}

export default Circle