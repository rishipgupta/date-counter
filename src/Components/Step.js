import React from 'react';

const Step = ({ currentStep, setCurrentStep }) => {
  console.log(currentStep);

  const decreaseStep = () => setCurrentStep((currentStep) => currentStep - 1);
  const increaseStep = () => setCurrentStep((currentStep) => currentStep + 1);

  return (
    <div>
      <button onClick={decreaseStep}>-</button>
      <span style={{ padding: "10px" }}>Step: {currentStep}</span>
      <button onClick={increaseStep}>+</button>
    </div>
  )
}

export default Step;
