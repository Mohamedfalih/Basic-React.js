import React, { useState } from "react";

function BMI_Calculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    

    const bmiValue = weight / ((height / 100) * (height / 100));

    setBmi(bmiValue.toFixed(2));

    if (bmiValue < 18.5) {
      setStatus("Under Weight");
    } else if (bmiValue < 25) {
      setStatus("Normal Weight");
    } else if (bmiValue < 30) {
      setStatus("Over Weight");
    } else {
      setStatus("Obese");
    }
  };

 

  return (
    <div>
      <h2>BMI Calculator</h2>

      <input
        type="number"
        placeholder="Enter Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Enter Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />

      <br />
      <br />

      <button onClick={calculateBMI}>Calculate BMI</button>


      <h3>BMI: {bmi}</h3>
      <h3>Status: {status}</h3>
    </div>
  );
}

export default BMI_Calculator;