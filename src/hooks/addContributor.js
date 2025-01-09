import { useCreateCollaboratorMutation } from "@/services/collaborators";
import { toast } from "react-toastify";

const useCreateCollaborator = () => {
  const [createProjectCollaborator, { isLoading }] =
    useCreateCollaboratorMutation();

  const createCollaborator = async (credentials, onSuccess) => {
    try {
      const res = await createProjectCollaborator(credentials);
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

  return { createCollaborator, isLoading };
};

export default useCreateCollaborator;
