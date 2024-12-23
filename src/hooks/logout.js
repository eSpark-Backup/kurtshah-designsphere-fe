import { useLogoutMutation } from "@/services/auth";
import { toast } from "react-toastify";

const useLogout = () => {
  const [logOut, { isLoading }] = useLogoutMutation();

  const logoutApi = async (token, onSuccess) => {
    try {
      const res = await logOut(token);

      if (res?.error?.data?.IsError) {
        if (res?.error?.data?.Result && res?.error?.data?.Result?.length > 0) {
          toast.error(res?.error?.data?.Result[0]?.Description);
        } else {
          toast.error(res?.error?.data?.Message);
        }
      }

      if (res?.data?.statusCode === 200) {
        onSuccess();
      }
    } catch (err) {
      console.error(err, "Error in updating user data");
    }
  };

  return { logoutApi, isLoading };
};

export default useLogout;
