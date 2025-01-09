import { useGetAllUserMutation } from "@/services/auth";
import { toast } from "react-toastify";

const useGetAllUsers = () => {
  const [getAllUser, { isLoading }] = useGetAllUserMutation();

  const getAllUsers = async (onSuccess) => {
    try {
      const res = await getAllUser();
      if (res?.error?.data?.IsError) {
        if (res?.error?.data?.Result && res?.error?.data?.Result?.length > 0) {
          toast.error(res?.error?.data?.Result[0]?.Description);
        } else {
          toast.error(res?.error?.data?.Message);
        }
      }

      if (res?.data?.statusCode === 200) {
        onSuccess(res);
      }
    } catch (err) {
      console.error(err, "Error in updating user data");
    }
  };

  return { getAllUsers, isLoading };
};

export default useGetAllUsers;
