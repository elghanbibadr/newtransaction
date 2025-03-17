import { atom } from "jotai";
import { atomWithMutation, atomWithQuery } from "jotai-tanstack-query";
import { PaymentMethod } from "../types/paymentMethodSelection.types";
import { paymentMethodSelectionApi } from "../api/paymentMethodSelection.api";

// Atom to store the selected payment method
export const selectedPaymentMethodAtom = atom<PaymentMethod | null>(null);

// Atom to handle the payment method submission
export const submitPaymentMethodAtom = atomWithMutation((get) => ({
  mutationKey: ["submitPaymentMethod"],
  mutationFn: async () => {
    const selectedPaymentMethod = get(selectedPaymentMethodAtom);
    
    if (!selectedPaymentMethod) {
      throw new Error("No payment method selected");
    }


    // Call API to submit the payment method
    await paymentMethodSelectionApi.submitPaymentMethod(selectedPaymentMethod);
  },
}));



export const getPaymentMethodsAtom = atomWithQuery(() => ({
  queryKey: ["getpaymentMethods"], 
  queryFn: async () => {
   return await paymentMethodSelectionApi.getPaymentMethods();
  },
}));