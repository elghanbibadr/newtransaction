import { useEffect, useState } from "react";
import { PaymentMethod, PaymentMethodSchema } from "../types/paymentMethodSelection.types";
import { useAtom } from "jotai";
import { selectedPaymentMethodAtom } from "../store/paymentMethodSelection.atoms";

export function usePaymentMethodSelection(initialData: PaymentMethod | null) {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useAtom(selectedPaymentMethodAtom);
  const [error, setError] = useState<string | null>(null);

  // Set the initial data only once when the hook is first used
  useEffect(() => {
    if (initialData) {
      setSelectedPaymentMethod(initialData);
    }
  }, [initialData, setSelectedPaymentMethod]);

  const handleSelection = (method: PaymentMethod) => {
    setSelectedPaymentMethod(method);
    setError(null); // Reset error when a valid method is selected
  };

  const validateSelection = (): boolean => {
    if (!selectedPaymentMethod) {
      setError("Please select a payment method.");
      return false;
    }

    const validationResult = PaymentMethodSchema.safeParse(selectedPaymentMethod);
    if (!validationResult.success) {
      setError("Invalid payment method selection.");
      return false;
    }

    return true;
  };

  return {
    selectedPaymentMethod,
    error,
    handleSelection,
    validateSelection,
  };
}
