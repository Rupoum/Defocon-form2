"use server";
interface Response {
  error?: any;
  success?: {
    message: String;
  };
}

import { UserSchema } from "@/lib/types";

export const CreateUser = async (data: unknown): Promise<Response> => {
  return { success: { message: "success" } };
  // const result = UserSchema.safeParse(data);
  // if (result.success) {
  //   return { success: { message: "Success!" } };
  // } else {
  //   return {
  //     error: {
  //       message: result.error.message,
  //     },
  //   };
  // }
};
