import  { forwardRef, useImperativeHandle } from "react";
import {  List, Divider } from "antd-mobile";
import { TransactionFormData } from "../../../componenets/NewTransaction";

export interface TransactionSummaryDetailsRef {
  transactionDetailsConfirmation: () => void;
}

export interface TransactionSummaryDetailsProps {
  formData: TransactionFormData;
  onNext: () => void;
}

const TransactionSummaryDetails = forwardRef<
  TransactionSummaryDetailsRef,
  TransactionSummaryDetailsProps
>(({ formData, onNext }, ref) => {

    useImperativeHandle(ref, () => ({
      transactionDetailsConfirmation: () => {
       onNext(); // Trigger form submission when called from parent
      },
    }));
  
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold text-center ">
        Confirm Your Transaction
      </h2>

      {/* Payment Method Section */}
      <List mode="card">
      <List.Item prefix="💳" title="Payment Method" >
      <span className="text-xs">{formData.paymentMethod?.name}</span>
      </List.Item>
    </List>
      {/* Billing Information Section */}
      <List mode="card">
        <List.Item className="text-xs" title="Full Name">{formData.transactionBillingInfo.fullName}</List.Item>
        <List.Item className="text-xs" title="Email">{formData.transactionBillingInfo.email}</List.Item>
        <List.Item className="text-xs" title="City">{formData.transactionBillingInfo.city}</List.Item>
        <List.Item className="text-xs" title="Phone">{formData.transactionBillingInfo.phone}</List.Item>
      </List>

      <Divider />

      {/* Confirm Button */}
    
    </div>
  );
});

export default TransactionSummaryDetails;
