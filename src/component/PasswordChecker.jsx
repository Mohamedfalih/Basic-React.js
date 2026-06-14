import React, { useEffect, useState } from 'react'

function PasswordChecker() {
    const[pwd,setPwd] = useState("");
    const[msg,setMsg] = useState("");
    const check = ()=>{
        if(pwd.length<8)
            setMsg("too short")
        else
            setMsg("Accepted")
    }
  return (
    <>
        <input type="password" 
         onChange={(e)=>setPwd(e.target.value)}
         placeholder='Enter Password'
        />
        <button onClick={check}>save</button>
        <p>{msg}</p>
    </>
  )
}

export default PasswordChecker