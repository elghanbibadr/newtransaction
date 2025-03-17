import { PaymentMethod } from "../types/paymentMethodSelection.types";

const MOCK_PAYMENT_METHODS =[
    { type: "CARD", name: "Credit/Debit Card", icon: "card-icon" },
    { type: "BANK_TRANSFER", name: "Bank Transfer", icon: "bank-icon" },
    { type: "MOBILE_MONEY", name: "Mobile Money", icon: "mobile-icon" },
  ];
  // Mock API implementation
  
  export const paymentMethodSelectionApi = {
  
    getPaymentMethods: async () => {
  
      // Simulate network delay
  
      await new Promise(resolve => setTimeout(resolve, 1000));
  
      return MOCK_PAYMENT_METHODS;
  
    },
  
    
  
    submitPaymentMethod: async (data:PaymentMethod) => {
  
      // Simulate network delay
  
      await new Promise(resolve => setTimeout(resolve, 1000));
  
      console.log("payment methode submited")
  
      // Simulate validation
  
      if (!data.type) {
  
        throw new Error('Payment method is required');
  
      }
  
    }}  