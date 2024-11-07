"use clinet";
import { CardWrapper } from "./card-wrapper";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loginschema } from "@/db/schema";


import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { FormSucces } from "./from-success";

import { useState, useTransition } from "react";
import  {login}  from "@/app/actions";
import { Button } from "../ui/button";
import { FormError } from "./from-error";
import Image from "next/image";


export const LoginForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof Loginschema>>({
    resolver: zodResolver(Loginschema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof Loginschema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      login(values).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };

  return (
    <div className="h-screen flex justify-center items-center">
    
        <CardWrapper 
      headerLabel=""
    
    >
      <div className="flex flex-1">
        <div className="h-full">
        <Image 
       src={"/assets/logo.jpg"}
       alt="logo"
       width={512}
       height={512}
       
       />
        </div>
        
    <div className="flex flex-1 justify-center items-center w-full">
     <div>
      
     </div>
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6  w-2/3">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="john"
                      type="text"
                      name="username"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="******"
                      type="password"
                      name="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSucces message={success} />
          <div className="space-y-4 w-full">
            <Button className="w-full" type="submit" disabled={isPending}>
              Login
            </Button>
          </div>
        </form>
      </Form>
    </div>
      </div>
      
     
    </CardWrapper>
    </div>
    
  );
};
