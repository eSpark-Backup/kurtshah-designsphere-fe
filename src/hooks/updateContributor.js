import { useUpdateContributorMutation } from "@/services/collaborators";
import { toast } from "react-toastify";

const useUpdateCollaborator = () => {
  const [contributorUpdate, { isLoading }] = useUpdateContributorMutation();

  const updateCollaborator = async (credential, onSuccess) => {
    try {
      const res = await contributorUpdate(credential);
      if (res?.error?.data?.IsError) {
        if (res?.error?.data?.Result && res?.error?.data?.Result?.length > 0) {
          toast.error(res?.error?.data?.Result[0]?.Description);
        } else {
          toast.error(res?.error?.data?.Message);
        }
      }

      if (!res?.data?.isError) {
        onSuccess(res?.data?.result);
      }
    } catch (err) {
      console.error(err, "Error in updating user data");
    }
  };

  return { updateCollaborator, isLoading };
};

export default useUpdateCollaborator;
