// components/PaymentMethodSelection.tsx

import { forwardRef, useImperativeHandle } from "react";
import { usePaymentMethodSelection } from "../../hooks/usePaymentMethodSelection"; // import the hook
import { PaymentMethod } from "../../types/paymentMethodSelection.types";
import PaymentMethodDetails from "./PaymentMethodDetails";
import { submitPaymentMethodAtom } from "../../store/paymentMethodSelection.atoms";
import { useAtom } from "jotai";

export interface PaymentMethodSelectionRef {
  submitPaymentMethod: () => void;
}

interface PaymentMethodSelectionProps {
  initialData: PaymentMethod | null;
  onNext: (data: PaymentMethod ) => void;
}

export const PaymentMethodSelection = forwardRef<
  PaymentMethodSelectionRef,
  PaymentMethodSelectionProps
>(({ initialData, onNext }, ref) => {
  const [{ mutate }] = useAtom(submitPaymentMethodAtom)
  const { selectedPaymentMethod, error, handleSelection, validateSelection } = usePaymentMethodSelection(initialData);
 
  useImperativeHandle(ref, () => ({
    submitPaymentMethod: () => {
      if (validateSelection() && selectedPaymentMethod) {
        // GOT STUCK IN THIS TYPSCRIOT ISSUE AS WELL (sorry)
        mutate()
        onNext(selectedPaymentMethod); // `selectedPaymentMethod` is guaranteed to be valid
      //  POST THE PAYMENT METHODE TO THE BACKEND
    }

    },
  }));



  return (
    <PaymentMethodDetails error={error} handleSelection={handleSelection} selectedPaymentMethod={selectedPaymentMethod} />
  );
});
