import React, { useEffect, useState } from 'react'

function FetchUser() {
    const[user,setUser] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUser(data))
    },[])
  return (
    <div>
        <table>
            <tr>
                <th className = 't'>S.no</th>
                <th className = 't'>Name</th>
                <th className = 't'>Username</th>
                <th className = 't'>Email</th>
            </tr>
                {user.map((u,index)=>(
                    <tr>
                        <td className = 't'>{index+1}</td>
                        <td className = 't'>{u.name}</td>
                        <td className = 't'>{u.username}</td>
                        <td className = 't'>{u.email}</td>
                    </tr>
                ))}
        </table>
        
    </div>
  )
}

export default FetchUser