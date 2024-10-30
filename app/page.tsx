"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();
  const [progress, setProgress] = React.useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((value) => {
        if (value >= 100) {
          clearInterval(interval);
          return 100;
        }
        return value + 20;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      router.push("/bashboard");
    }
  }, [progress, router]);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
    <div className="grid justify-items-center gap-y-20">
      <Image src="/next.svg" alt="logo" width={512} height={512} />
      <Progress value={progress} className="w-1/2" />
    </div>
  </div>
  
  );
};

export default HomePage;
