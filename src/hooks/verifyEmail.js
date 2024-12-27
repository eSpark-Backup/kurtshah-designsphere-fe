import { useVerifyEmailMutation } from "@/services/auth";
import { useState } from "react";
import { toast } from "react-toastify";

const useVerifyEmail = () => {
  const [verify] = useVerifyEmailMutation();
  const [loading, setLoading] = useState(true);

  const verifyEmail = async (objToSend, onSuccess) => {
    setLoading(true);
    try {
      const formData = new URLSearchParams();
      Object.keys(objToSend).forEach((key) => {
        formData.append(key, objToSend[key]);
      });

      const res = await verify(formData);

      if (res?.error?.data?.IsError) {
        if (res?.error?.data?.Result && res?.error?.data?.Result?.length > 0) {
          toast.error(res?.error?.data?.Result[0]?.Description);
          setLoading(false);
        } else {
          toast.error(res?.error?.data?.Message);
          setLoading(false);
        }
      }
      if (res?.data?.StatusCode === 200 || res?.error?.data?.StatusCode === 200) {
        onSuccess(res);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      console.error(err, "Error in updating user data");
    }
  };

  return { verifyEmail, loading };
};

export default useVerifyEmail;
