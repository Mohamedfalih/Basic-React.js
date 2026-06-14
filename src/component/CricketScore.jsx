import React, { useEffect, useState } from 'react'

function CricketScore() {
    const[run,setRun] = useState(0);
    const[over,setOver] = useState(0);
    const[wicket,setWicket] = useState(0);
    const[status,setStatus] = useState("Live");
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setRun((prevRun)=>prevRun + Math.floor(Math.random()*7))
            if(Math.random()>0.8){
                setWicket((prevWicket)=>prevWicket + 1);
            }
            setOver((prevOver)=>+(prevOver+0.5).toFixed(1))
        },1000)
        const timeOut = setTimeout(()=>{
            clearInterval(intervalId);
            setStatus("Match completed")
        },10000)
        return()=>{
            clearInterval(intervalId);
            clearTimeout(timeOut);
        }
    },[])

  return (
    <div className='container'> 
        <h1>🏏Cricket Score Update🏏</h1>
        <h2>Status : {status}</h2>

        <div className='scorecard'>
            <h3>Indian Vs Pakitan</h3>
            <p><strong>Runs : </strong>{run}</p>
            <p><strong>Wickets : </strong>{wicket}</p>
            <p><strong>Overs : </strong>{over}</p>

        </div>

    </div>
  )
}

export default CricketScore