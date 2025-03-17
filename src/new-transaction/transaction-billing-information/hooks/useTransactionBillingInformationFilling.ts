import { useForm } from "react-hook-form";
import { TransactionBillingInfo, transactionBillingInfoSchema } from "../types/transactionBillingInfo.types";
import { zodResolver } from "@hookform/resolvers/zod";

export function useTransactionBillingInformationFilling(initialData:TransactionBillingInfo) {
    const {
       control,
       handleSubmit,
       formState: { errors },
     } = useForm<TransactionBillingInfo>({
       resolver: zodResolver(transactionBillingInfoSchema), // Integrate Zod validation
       defaultValues: initialData, // Set initial values for the form
     });
   


  return {
   control,errors,handleSubmit
  };
}
