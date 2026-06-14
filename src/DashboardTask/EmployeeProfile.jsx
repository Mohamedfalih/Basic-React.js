import React from 'react'

function EmployeeProfile() {
  let name = 'James';
  let emp_id = 'WIPRO7839A2';
  let dept = 'Global IT infrastructure';
  return (
    
    <div style={{border : '2px solid grey',textAlign: 'left' , marginRight:'500px'}}>
        <h3 style={{fontWeight : 'bold',color:'black'}}>Employee Profile</h3>
        <p>Name : {name}</p>
        <p>Employee ID : {emp_id}</p>
        <p>Department : {dept}</p>

    </div>
  )
}

export default EmployeeProfile