import React, { useState } from 'react'

function StudentReg() {
    const[user,setUser] = useState(
        {   name : "",
            roll_no : "",
            email : "",
            dob : ""
        }
    )
    const[loading,setLoading] = useState(false)
    const handleSubmit = (e)=>{
        e.preventDefault();
        setLoading(true)
    }

  return (
    <div>
        <h1>Student Registration</h1>
        <form className='form' onSubmit={handleSubmit}>
            <label>Name : </label>
            <input type="text" placeholder='Enter Your name ' value={user.name}
            onChange={(e)=>setUser({...user,name:e.target.value})}/> <br />

            <label>Roll no : </label>
            <input type="text" placeholder='Enter Your Roll No' value={user.roll_no}
            onChange={(e)=>setUser({...user,roll_no:e.target.value})}/> <br />

            <label>Email : </label>
            <input type="email" placeholder='Enter valid email ' value={user.email}
            onChange={(e)=>setUser({...user,email:e.target.value})}/> <br />

            <label>Date of Birth : </label>
            <input type="date"value={user.dob}
            onChange={(e)=>setUser({...user,dob:e.target.value})}/> <br />

            <input type="submit" />
        </form>
           {
            loading&& <>
            <h1> Student Details </h1>
            <p><strong>Name : </strong> {user.name}</p>
            <p><strong>Roll no : </strong> {user.roll_no}</p>
            <p><strong>Email : </strong> {user.email}</p>
            <p><strong>DoB : </strong> {user.dob}</p>
            </>
           }
    </div>
  )
}

export default StudentReg