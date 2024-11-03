import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(6, { message: "Password should be at least 6 digits" }),
});

export type LoginFormProps = z.infer<typeof LoginSchema>;
