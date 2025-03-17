const steps = [
  { title: "Payment Method" },
  { title: "Billing Information" },
  { title: "Confirmation" },
  { title: "Transaction completed" },


  // Add more steps as needed
];

const StepsIndicatorBar = ({currentStep}:{currentStep:number}) => {

  return (
    <div className="step-indicator">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`step-title ${index === currentStep ? "active" : ""}`}
        >
          {step.title}
        </div>
      ))}
    </div>
  );
};

export default StepsIndicatorBar;
