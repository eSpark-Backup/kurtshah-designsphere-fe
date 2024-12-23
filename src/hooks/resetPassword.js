import { useResetPasswordMutation } from "@/services/auth";
import { toast } from "react-toastify";

const useResetPassword = () => {
  const [resetPw, { isLoading }] = useResetPasswordMutation();

  const resetPassword = async (objToSend, token, onSuccess) => {
    try {
      const formData = new URLSearchParams();
      Object.keys(objToSend).forEach((key) => {
        formData.append(key, objToSend[key]);
      });

      const res = await resetPw({
        credentials: formData,
        token: token,
      });
      if (res?.data?.isError) {
        if (res?.data?.result && res?.data?.result?.length > 0) {
          toast.error(res?.data?.result[0]?.description);
        } else {
          toast.error(res?.data?.message);
        }
      }

      if (res?.data?.statusCode === 200) {
        onSuccess();
      }
    } catch (err) {
      console.error(err, "Error in updating user data");
    }
  };

  return { resetPassword, isLoading };
};

export default useResetPassword;
