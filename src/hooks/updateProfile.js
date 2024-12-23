import { useUpdateUserMutation } from "@/services/auth";
import { toast } from "react-toastify";

const useUpdateUser = () => {
  const [updateUser, { isLoading }] = useUpdateUserMutation();

  const updateUserData = async (objToSend, access_token, onSuccess, img) => {
    try {
      let formData;
      if (img) {
        formData = new FormData();
        Object.keys(objToSend).forEach((key) => {
          formData.append(key, objToSend[key]);
        });
      } else {
        formData = new URLSearchParams();
        Object.keys(objToSend).forEach((key) => {
          formData.append(key, objToSend[key]);
        });
      }

      const res = await updateUser({
        credentials: formData,
        token: access_token,
      });

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

  return { updateUserData, isLoading };
};

export default useUpdateUser;
