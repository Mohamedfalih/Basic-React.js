import React, { useEffect, useState } from 'react'
import low from '../assets/low.webp'
import normal from '../assets/normal.jpg'
import over from '../assets/over.jpg'
import obecity from '../assets/obecity.avif'

function BMI_Calculator() {
  
  const[weight,setWeight] =useState("");
  const[height,setHeight] =useState("");
  const[BMI,setBMI]  = useState("");
  const[status,setStatus] = useState("");
  const[img,setImg] = useState("");
  
  const BMI_calc =()=> {

      const bmi = weight/((height/100)*(height/100));

      setBMI(bmi.toFixed(2));

      if(bmi < 18.5){
          setStatus("Under Weight");
          setImg(low);
      }
      else if(bmi < 25){
        setStatus("Normal Weight");
        setImg(normal);
      }
      else if(bmi < 30){
        setStatus("Over Weight");
        setImg(over);
      }
      else{
        setStatus("Obesity");
        setImg(obecity);
      }
   };

  return (
    <div>
      <h1 style={{color:'blue'}}>BMI Calculator </h1>
        Weight : <input type="number" placeholder='Enter Weight (kg)' 
        onChange={(e)=>setWeight(e.target.value)}
        /> <br /><br />
        Height : <input type="number" placeholder='Enter Height (cm)' 
        onChange={(e)=>setHeight(e.target.value)}
        /> <br /><br />

         <button onClick={BMI_calc} className='button'>⚖️</button> 
         <br />
         <p className='p'>BMI : {BMI}</p>
        <p className='p'>Status : {status}</p>
        <img src={img} className='img'/>
    </div>
  )
}

export default BMI_Calculator