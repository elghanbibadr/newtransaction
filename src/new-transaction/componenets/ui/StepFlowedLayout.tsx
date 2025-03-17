import React, { ReactNode } from "react";

interface StepFlowedLayoutProps {
  children: ReactNode;
}

const StepFlowedLayout: React.FC<StepFlowedLayoutProps> = ({ children }) => {
  return <div className="step-content w-full md:w-[50%] md:mx-auto m-4">{children}</div>;
};

export default StepFlowedLayout;
