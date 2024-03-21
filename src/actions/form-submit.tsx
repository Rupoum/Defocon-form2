"use server";
interface Response {
  error?: any;
  success?: {
    message: String;
  };
}

import { db } from "@/server/db";
import { UserSchema } from "@/lib/types";

export const CreateUser = async (data: any): Promise<Response> => {
  const {id, name, email, phone, roll, tryhackmeId, year, rate} = data;
  const existingUser = await db.user.findUnique({ where: { email } });
  if (existingUser) return { error: "User already exists" };
  const newUser = await db.user.create({
    data: {
      id: id,
      name: name,
      email: email,
      phone: phone,
      roll: roll,
      tryhackmeId: tryhackmeId,
      year: year,
      rate: rate,
    },
  });
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
