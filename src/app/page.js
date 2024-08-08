'use client'

import { lock } from "@/assets/icons";
import CustomInput from "@/components/common/CustomInput";
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
      <Typography variant="h1">
        Hello World
      </Typography>
      <Typography variant="h2">
        Hello World
      </Typography>
      <Typography variant="h3">
        Hello World
      </Typography>
      <Typography variant="h4">
        Hello World
      </Typography>
      <Button onClick={handleLogin} variant="primary">
        RTK Query Check
      </Button>
      <CustomInput label={"Hello World"} placeholder={"Hello World"} type={"password"} startAdornment={
        <Image
          width={20}
          height={20}
          alt="End Icon"
          src={lock}
        />
      }
      />
    </main>
  );
}
