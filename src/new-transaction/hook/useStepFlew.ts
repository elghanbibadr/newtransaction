import { useState } from "react";

const useStepFlew = () => {
      const [currentStep, setCurrentStep] = useState(0);
    
    const handleSetCurrentStep = (step: number) => {
        setCurrentStep(step);
      };
    
      const onBack = () => {
        if (currentStep > 0) {
          handleSetCurrentStep(currentStep - 1);
        }
      };


      console.log("current step",currentStep)

      return {
        handleSetCurrentStep,
        currentStep,
        onBack
      }
}

export default useStepFlew