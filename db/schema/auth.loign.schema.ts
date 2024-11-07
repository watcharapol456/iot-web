import * as z from "zod"

export const Loginschema = z.object({
    username:z.string().min(1,{
        message:"Username is required",
    }),
    password:z.string().min(1,{
        message:"Password is required"
    })
})