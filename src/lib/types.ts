import { z } from "zod";

export const UserSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .length(11)
    .regex(/^[0-9]+$/, "Phone number must contain only digits"),
  roll: z.literal(7),
  tryhackmeId: z.string(),
  year: z.enum(["Year 1", "Year 2", "Year 3", "Year 4"]),
  rate: z.enum(["beginner", "advanced"]),
});

export type User = z.infer<typeof UserSchema>;
