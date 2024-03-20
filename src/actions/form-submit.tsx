"use server";

import { UserSchema } from "@/lib/types";

export const CreateUser = async (data: unknown) => {
  const result = UserSchema.safeParse(data);
  return result;
};
