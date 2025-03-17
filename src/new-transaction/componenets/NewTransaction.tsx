import { useRef, useState } from "react";
import { StepContent, StepContentRef } from "./StepContent";
import { PaymentMethod } from "../payment-method-selection/types/paymentMethodSelection.types";
import { TransactionBillingInfo } from "../transaction-billing-information/types/transactionBillingInfo.types";
import BottomNavigationBar from "./BottomNavigationBar";
import useStepFlew from "../hook/useStepFlew";
import StepsIndicatorBar from "./StepsIndicatorBar";
import StepFlowedLayout from "./ui/StepFlowedLayout";

export interface TransactionFormData {
  paymentMethod: PaymentMethod | null;
  transactionBillingInfo: TransactionBillingInfo;
}

const initialTransactionBillingInfo: TransactionBillingInfo = {
  fullName: "",
  email: "",
  city: "",
  phone: "",
};

const NewTransaction = () => {
  const { currentStep, onBack, handleSetCurrentStep } = useStepFlew();
  const [formData, setFormData] = useState<TransactionFormData>({
    paymentMethod: null,
    transactionBillingInfo: initialTransactionBillingInfo,
  });
  const stepContentRef = useRef<StepContentRef>(null);


  const onSubmit = () => {
    if (stepContentRef.current) {
      if (currentStep === 0) {
        stepContentRef.current.submitPaymentMethod();
      } else if (currentStep === 1) {
        stepContentRef.current.submitTransactionBillingInformation();
      } else if (currentStep === 2) {
        stepContentRef.current.transactionDetailsConfirmation();
      }
      
    }
  };

  return (
    <StepFlowedLayout>
      <StepsIndicatorBar currentStep={currentStep} />
      <StepContent
        ref={stepContentRef}
        step={currentStep}
        onStepChange={handleSetCurrentStep}
        formData={formData}
        setFormData={setFormData}
      />
      <BottomNavigationBar
        onSubmit={onSubmit}
        onBack={onBack}
        currentStep={currentStep}
      />
    </StepFlowedLayout>
  );
};

export default NewTransaction;
