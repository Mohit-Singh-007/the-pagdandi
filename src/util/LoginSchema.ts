import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid credentials" }),
  password: z
    .string()
    .min(6, { message: "Password should be at least 6 digits" })
    .regex(/[A-Z]/, "Password should contain one uppercase letter")
    .regex(/[0-9]/, "Password should contain one number"),
});

export type LoginFormProps = z.infer<typeof LoginSchema>;
