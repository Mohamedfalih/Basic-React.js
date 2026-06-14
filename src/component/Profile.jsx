import React, { useState } from 'react'
import '../App.css'

function Profile() {
    const [user,setUser] = useState({name :'',age : '',ph_no : ''})
  return (
    <div className='abc'>
        <input type="text" placeholder='Enter Name'
        onChange={(e)=>setUser({...user,name:e.target.value})}
        /> <br />
        <input type="number" placeholder='Enter Age'
        onChange={(e)=>setUser({...user,age:e.target.value})}
        /> <br />
        <input type="number" placeholder='Enter Phone no'
        onChange={(e)=>setUser({...user,ph_no:e.target.value})}
        />
        <p>Name : {user.name}</p>
        <p>Age : {user.age}</p>
        <p>Phone no : {user.ph_no}</p>

    </div>
  )
}

export default Profile