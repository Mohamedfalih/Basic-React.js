import React from 'react'

function AreaOfSquare(side){
    return side*side;
}

function Square() {
    let s=5;
  return (
    <div>
        <h3>Area of the square is : {AreaOfSquare(s)}</h3>
    </div>
  )
}

export default Square