// In StepContent.tsx

import { forwardRef, JSX, useImperativeHandle, useRef } from "react";
import { TransactionFormData } from "./NewTransaction";
import { PaymentMethodSelection, PaymentMethodSelectionRef } from "../payment-method-selection/componenets/ui/PaymentMethodSelection";
import TransactionBillingInformation, { TransactionBillingInformationRef } from "../transaction-billing-information/componenets/TransactionBillingInformation";
import TransactionSummaryDetails, { TransactionSummaryDetailsRef } from "../transaction-summary/componenets/ui/TransactionSummaryDetails";
import { TransactionCompleted } from "../transaction-completed/componenet/TransactionCompleted";
export interface StepContentRef {
  submitPaymentMethod: () => void;
  submitTransactionBillingInformation: () => void;
  transactionDetailsConfirmation:()=>void
}



export const StepContent = forwardRef<
  StepContentRef,
  {
    step: number;
    onStepChange: (step: number) => void;
    formData: TransactionFormData;
    setFormData: (data: TransactionFormData) => void;
  }
>(({ step, onStepChange, formData, setFormData }, ref) => {



  // Refs to child components
  const paymentMethodSelectionRef = useRef<PaymentMethodSelectionRef>(null);
  const transactionBillingInformationRef = useRef<TransactionBillingInformationRef>(null);
  const transactionSummaryRef=useRef<TransactionSummaryDetailsRef>(null);




  // Expose methods to parent
  useImperativeHandle(ref, () => ({
    submitPaymentMethod: () => {
      if (paymentMethodSelectionRef.current) {
        paymentMethodSelectionRef.current.submitPaymentMethod();
      }
      
    },
    submitTransactionBillingInformation: () => {
        if (transactionBillingInformationRef.current) {
          transactionBillingInformationRef.current.submitTransactionBillingInformation();
        }
        
      },
      transactionDetailsConfirmation:()=>{
        if (transactionSummaryRef.current) {
          transactionSummaryRef.current.transactionDetailsConfirmation();
        }
      }
  }));



  // Map step index to component
  const steps: Record<number, () => JSX.Element> = {
    0: () => (
      <PaymentMethodSelection
        ref={paymentMethodSelectionRef}
        initialData={formData.paymentMethod}
        onNext={(data) => {
          setFormData({ ...formData, paymentMethod: data });
          onStepChange(1);
        }}
      />
    ),
    1: () => (
        <TransactionBillingInformation
        ref={transactionBillingInformationRef}
        onNext={(data) => {
            setFormData({ ...formData, transactionBillingInfo: data });
            onStepChange(2);
          }}
          initialData={formData.transactionBillingInfo}

        />
      ),
      2: () => (
        <TransactionSummaryDetails
        ref={transactionSummaryRef}
          formData={formData}
          onNext={()=>onStepChange(3)}

        />
      ),

      3: () => (
        <TransactionCompleted  />
      ),
    
  };
  

  return <>{steps[step]()}</>;
});
