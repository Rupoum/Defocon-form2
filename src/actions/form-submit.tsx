"use server";
import prisma from "../lib/prisma";
interface Response {
  error?: any;
  success?: {
    message: String;
  };
}

import { UserSchema } from "@/lib/types";

export const CreateUser = async (data: unknown): Promise<Response> => {
  try {
    const result = UserSchema.safeParse(data);
    if (result.success) {
      const existingUser = await prisma.user.findFirst({
        where: {
          OR: [{ roll: result.data.roll }, { email: result.data.email }],
        },
      });
      if (existingUser) {
        throw new Error("User with that roll number or email already exists");
      }
      await prisma.user.create({
        data: result.data,
      });
      return { success: { message: "Success!" } };
    } else {
      throw new Error(result.error.message);
    }
  } catch (error: any) {
    console.log(error);
    return {
      error: {
        message: error.message,
      },
    };
  }
};
