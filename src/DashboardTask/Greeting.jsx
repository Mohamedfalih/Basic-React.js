import React from 'react'

function Greeting() {
    const date = new Date().getHours();
    const greeting = date<12 ? "Good Morning!":date<17 ?"Good Afternoon!" : "Good Evening!";
  return (
    <div>
        <h1 style={{fontWeight : 'bold' , textAlign:'left'}}>{greeting}</h1>
    </div>
  )
}

export default Greeting