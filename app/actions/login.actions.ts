"use server";

import { Loginschema } from "@/db/schema";
import * as z from "zod";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const login = async (values: z.infer<typeof Loginschema>) => {

  const validatedFields = Loginschema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }


  const { username, password } = validatedFields.data;

 

  try {
    await signIn("credentials", {
      username,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });



    return {
        success: "Login success"
    }
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }
    throw error;
  }
};
