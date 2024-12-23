import { useVerifyMfaOtpMutation } from "@/services/auth";
import { toast } from "react-toastify";

const useVerifyMfaOtp = () => {
  const [verifyMfa, { isLoading }] = useVerifyMfaOtpMutation();

  const verifyOtp = async (objToSend, onSuccess) => {
    try {
      const formData = new URLSearchParams();
      Object.keys(objToSend).forEach((key) => {
        formData.append(key, objToSend[key]);
      });

      const res = await verifyMfa(formData);

      if (res?.error?.data?.IsError) {
        if (res?.error?.data?.Result && res?.error?.data?.Result?.length > 0) {
          toast.error(res?.error?.data?.Result[0]?.Description);
        } else {
          toast.error(res?.error?.data?.Message);
        }
      }

      if (res?.error?.data?.StatusCode === 200) {
        onSuccess();
      }
    } catch (err) {
      console.error(err, "Error in updating user data");
    }
  };

  return { verifyOtp, isLoading };
};

export default useVerifyMfaOtp;
