
import { z } from "zod";

export const transactionBillingInfoSchema = z.object({
    fullName: z.string().min(1, 'Street address is required'),
    email: z.string().min(1, 'City is required'),
    city: z.string().min(1, 'State is required'),
    phone: z.string().length(9, 'Phone number must be exactly 9 digits'),
  });
  

  export type TransactionBillingInfo = z.infer<typeof transactionBillingInfoSchema>;
  