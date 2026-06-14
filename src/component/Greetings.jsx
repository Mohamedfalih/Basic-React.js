import React from 'react'

function Greetings() {
    const date = new Date().getHours();
    const greet = date <12 ? "Good morning" : date < 17 ? "Good Afternoon" : "Good evening";
  return (
    <div>
        <h1>Hi✋{greet}</h1>
    </div>
  )
}

export default Greetings