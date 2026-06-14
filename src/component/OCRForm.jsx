import React, { useState } from 'react'

function OCRForm() {
    const[std,setStd] = useState(
        {
            first_n : "",
            last_n : "",
            email : "",
            dob : "",
            phone : "",
            course : "",
            duration : ""
        }
    )
    const[loading,setLoading] = useState(false)
    const handleSubmit = (e)=>{
        e.preventDefault();
        setLoading(true)
    }
  return (
    <div>
        <form style={{textAlign:`left`}} onSubmit={handleSubmit}>
            <h1>Online Course Registration For</h1><br />
            <label>First Name</label>
            <input type="text" placeholder='Enter your first name' value={std.first_n}
            onChange={(e)=>setStd({...std,first_n:e.target.value})}/>
            <label>Last Name</label>
            <input type="text" placeholder='Enter your last name' value={std.last_n}
            onChange={(e)=>setStd({...std,last_n:e.target.value})}/><br /><br />
            <label>Email</label>
            <input type="email" placeholder='Email Address' value={std.email}
            onChange={(e)=>setStd({...std,email:e.target.value})}/><br /><br />
            <label>Date of Birth</label>
            <input type="date" value={std.dob}
            onChange={(e)=>setStd({...std,dob:e.target.value})}/><br /><br />
            <label>Phone/Mobile</label>
            <input type="number" placeholder='Mobile Number' value={std.phone}
            onChange={(e)=>setStd({...std,phone:e.target.value})}/><br /><br />
            <label>Choose the course you want to enroll in</label>
            <select name="a" value={std.course}
            onChange={(e)=>setStd({...std,course:e.target.value})}>
                <option value="1" defaultChecked >--Select--</option>
                <option value="1">Java</option>
                <option value="2">React.js</option>
                <option value="3">Oracle</option>
                <option value="4">Spring boot</option>
            </select><br /><br />
            <label>Preferred Course Duration</label><br />
            <input type="radio" name="duration"  value="6" />6 Month <br />
            <input type="radio" name="duration" value="12"  />12 Month <br /><br />

            <button type='submit'>Apply to enroll</button>

        </form>
    </div>
  )
}

export default OCRForm