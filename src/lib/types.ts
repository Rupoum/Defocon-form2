import { z } from "zod";

export const UserSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .length(10, "Phone numbers must be of 10 digits")
    .regex(/^[0-9]+$/, "Phone number must contain only digits"),
  roll: z
    .string()
    .length(7, "Roll numbers must be of 7 digits")
    .regex(/^[0-9]+$/, "Phone number must contain only digits"),
  tryhackmeId: z.string(),
  year: z.enum(["Year 1", "Year 2", "Year 3", "Year 4"]),
  rate: z.enum(["beginner", "advanced"]),
});

export type User = z.infer<typeof UserSchema>;
