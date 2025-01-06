import { useDeleteAccountMutation } from "@/services/auth";
import { toast } from "react-toastify";

const useDeleteAccount = () => {
  const [deleteAccount, { isLoading }] = useDeleteAccountMutation();

  const deleteAcountFunc = async (objToSend, token, onSuccess) => {
    try {
      const formData = new URLSearchParams();
      Object.keys(objToSend).forEach((key) => {
        formData.append(key, objToSend[key]);
      });

      const res = await deleteAccount({
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

  return { deleteAcountFunc, isLoading };
};

export default useDeleteAccount;
