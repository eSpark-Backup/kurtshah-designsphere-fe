import { useForgotPassReqMutation } from "@/services/auth";
import { toast } from "react-toastify";

const useForgotPassword = () => {
    const [reqChangePw, { isLoading }] = useForgotPassReqMutation();

  const forgotPassword = async (objToSend, onSuccess) => {
    try {
      const formData = new URLSearchParams();
      Object.keys(objToSend).forEach((key) => {
        formData.append(key, objToSend[key]);
      });

      const res = await reqChangePw(formData);

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

  return { forgotPassword, isLoading };
};

export default useForgotPassword;
