'use client'

import { lock } from "@/assets/icons";
import { CustomInput } from "@/components/common";
import { useLoginMutation } from "@/services/auth";
import { Button, Typography } from "@mui/material";
import Image from "next/image";


export default function Home() {
  const [login, { data, isLoading, isError, isSuccess }] = useLoginMutation();


  const handleLogin = async () => {
    try {
      const response = await login({ username: "demo", password: "demo" });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (

    <main>
    </main>
  );
}
