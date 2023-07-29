import React from 'react'
import { useState } from 'react';
import Step from "./Step";



const Counter = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [currentCounter, setCurrentCounter] = useState(0);

  const handleCountIncrease = () => {
    setCurrentCounter((currentCounter) => currentCounter + currentStep);
  }
  const handleCountDecrease = () => {
    setCurrentCounter((currentCounter) => currentCounter - currentStep);
  }

  let dt = new Date();
  dt.setDate(dt.getDate() + currentCounter);

  return (
    <>
      <Step currentStep={currentStep} setCurrentStep={setCurrentStep} />

      <div style={{ margin: "10px" }}>
        <button onClick={handleCountDecrease}>-</button>
        <span style={{ padding: "10px" }}>Count: {currentCounter}</span>
        <button onClick={handleCountIncrease}>+</button>
      </div>
      <p>{dt.toDateString()}</p>
    </>
  )
}

export default Counter
