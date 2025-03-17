import React from "react";
import { PaymentMethod } from "../../types/paymentMethodSelection.types";
import { useAtom } from "jotai";
import { getPaymentMethodsAtom } from "../../store/paymentMethodSelection.atoms";

interface PaymentMethodDetailsProps {
  error: string | null;
  handleSelection: (method: PaymentMethod) => void;
  selectedPaymentMethod: PaymentMethod | null;
}

const PaymentMethodDetails = ({
  error,
  handleSelection,
  selectedPaymentMethod,
}: PaymentMethodDetailsProps) => {
  const [{ data: paymentsMethode, isPending, isError }] = useAtom(
    getPaymentMethodsAtom
  );

  if (isPending) return <h1>loading ...</h1>;

  if (isError) return <h1>Faild to load payment methode ...</h1>;



  // I have used any for the payment metode parameter even it should be PaymentMethode because I had a typscript issue and got stuck
  
  return (
    <div className="p-4">
      <div>
        <h2 className="text-lg font-semibold mb-4">Select a Payment Method</h2>
        {error && <p className="text-red-500">{error}</p>}
        <div className="grid grid-cols-1 gap-3">
          {paymentsMethode.length > 0 &&
            paymentsMethode.map((method:any) => (
            
             <button
                key={method.type}
                className={`flex items-center gap-3 p-3 border rounded-lg transition ${
                  selectedPaymentMethod?.type === method.type
                    ? "border-blue-500 bg-blue-100"
                    : "border-gray-300 bg-white hover:bg-gray-100"
                }`}
                onClick={() => handleSelection(method)}
              >
                <span className={`icon-class ${method.icon}`}></span>
                <span>{method.name}</span>
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodDetails;
