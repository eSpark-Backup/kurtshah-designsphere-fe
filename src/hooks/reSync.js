import { useReSyncMutation } from "@/services/auth";
import { toast } from "react-toastify";

const useReSync = () => {
  const [reSync, { isLoading }] = useReSyncMutation();

  const resync = async (objToSend, token, onSuccess) => {
    try {
      const formData = new URLSearchParams();
      Object.keys(objToSend).forEach((key) => {
        formData.append(key, objToSend[key]);
      });

      const res = await reSync({ credentials: formData, token });
      if (res?.data) {
        onSuccess();
      } else {
        toast.error("Invalid code")
      }
    } catch (err) {
      console.error(err, "Error in updating user data");
    }
  };

  return { resync, isLoading };
};

export default useReSync;
