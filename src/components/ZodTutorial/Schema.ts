import { z } from "zod";

// 1 => schema bnaao
export const ContactFormSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "FirstName must be at least 4 digits" }),
  lastName: z
    .string()
    .min(3, { message: "LastName must be at least 4 digits" }),
  email: z.string().email({ message: "Email is invalid" }),
  phoneNumber: z
    .string()
    .regex(/^\+?[0-9\s-]{7,15}$/, { message: "Phone number is invalid" }),
  address: z
    .string()
    .min(10, { message: "Address must be at least 10 characters" }),
});

//2 => infer kro schema types ko

export type ContactFormProps = z.infer<typeof ContactFormSchema>;
