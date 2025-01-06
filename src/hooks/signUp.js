import { useSignUpMutation } from "@/services/auth";
import { toast } from "react-toastify";

const useSignUp = () => {
  const [signup, { isLoading }] = useSignUpMutation();

  const signUp = async (objToSend, onSuccess) => {
    try {
      const formData = new URLSearchParams();
      Object.keys(objToSend).forEach((key) => {
        formData.append(key, objToSend[key]);
      });

      const res = await signup(formData);

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

  return { signUp, isLoading };
};

export default useSignUp;
