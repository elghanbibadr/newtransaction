import { z } from "zod";

export const PaymentMethodSchema = z.object({
  type: z.enum(["CARD", "BANK_TRANSFER", "MOBILE_MONEY"]),
  name: z.string(),
  icon: z.string(),
}).refine((data) => {
  // Validate name and icon based on type
  if (data.type === "CARD") {
    return data.name === "Credit/Debit Card" && data.icon === "card-icon";
  } else if (data.type === "BANK_TRANSFER") {
    return data.name === "Bank Transfer" && data.icon === "bank-icon";
  } else if (data.type === "MOBILE_MONEY") {
    return data.name === "Mobile Money" && data.icon === "mobile-icon";
  }
  return false; 
}, {
  message: "Name and icon do not match the selected payment method type.",
  path: ["name", "icon"]
});

export type PaymentMethod = z.infer<typeof PaymentMethodSchema>;
