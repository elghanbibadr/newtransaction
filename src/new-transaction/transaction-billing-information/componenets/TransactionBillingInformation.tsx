import React, { forwardRef, useImperativeHandle } from "react";
import { TransactionBillingInfo } from "../types/transactionBillingInfo.types";
import { useTransactionBillingInformationFilling } from "../hooks/useTransactionBillingInformationFilling";
import TransactionBillingFormInput from "./TransactionBillingFormInput";


export interface TransactionBillingInformationRef {
  submitTransactionBillingInformation: () => void;
}

interface TransactionBillingInformationProps {
  onNext: (data: TransactionBillingInfo) => void;
  initialData: TransactionBillingInfo;
}


const TransactionBillingInformation = forwardRef<
  TransactionBillingInformationRef,
  TransactionBillingInformationProps
>(({ initialData, onNext }, ref) => {
  const { control, errors, handleSubmit } =
    useTransactionBillingInformationFilling(initialData);

  const onSubmit = (data: TransactionBillingInfo) => {
    console.log("Form Data Submitted: ", data);
    onNext(data); // Call onNext with the validated data
  };

  // Use Imperative Handle to expose submit method
  useImperativeHandle(ref, () => ({
    submitTransactionBillingInformation: () => {
      handleSubmit(onSubmit)(); // Trigger form submission when called from parent
    },
  }));

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">
        Transaction Billing Information
      </h2>

      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <TransactionBillingFormInput
          name="fullName"
          control={control}
          errors={errors}
          placeholder="Full Name"
        />
        <TransactionBillingFormInput
          name="email"
          control={control}
          errors={errors}
          placeholder="Email"
        />
        <TransactionBillingFormInput
          name="city"
          control={control}
          errors={errors}
          placeholder="City"
        />
        <TransactionBillingFormInput
          name="phone"
          type="number"
          control={control}
          errors={errors}
          placeholder="Phone"
        />
      </form>
    </div>
  );
});

export default TransactionBillingInformation;
