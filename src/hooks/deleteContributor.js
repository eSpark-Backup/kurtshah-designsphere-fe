import { useDeleteContributorMutation } from "@/services/collaborators";
import { toast } from "react-toastify";

const useDeleteCollaborator = () => {
  const [contributorDelete, { isLoading }] = useDeleteContributorMutation();

  const deleteContributor = async (id, onSuccess) => {
    try {
      const res = await contributorDelete(id);
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

  return { deleteContributor, isLoading };
};

export default useDeleteCollaborator;
