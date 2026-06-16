import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

function Home() {
    const [regno,setRegno] = useState("")
    const [err,setErr] = useState("")
    const navigate = useNavigate();

    const searchResult=()=>{
        if(regno.trim() === ""){
            setErr("Register number Required")
            return
        }
        navigate(`/result/${regno}`)
    }
  return (
    <div className='home'>
        <h1>Karpagam College of Engineering</h1>
        <h2>Student Result Portal</h2>
        <input type="text" value={regno} placeholder='Enter register number'
        onChange={(e)=>setRegno(e.target.value)}
        />
        <button onClick={searchResult}>View Result</button>
        <p className='error'>{err}</p>
    </div>
  )
}

export default Home