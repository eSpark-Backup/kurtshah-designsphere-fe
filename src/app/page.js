'use client'
import { useLoginMutation } from "@/services/auth";


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
