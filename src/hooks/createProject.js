import { useCreateProjectMutation } from "@/services/projects";
import { toast } from "react-toastify";

const useCreateProjects = () => {
  const [createProject, { isLoading }] = useCreateProjectMutation();

  const createNewProject = async (credentials, onSuccess) => {
    try {
      const res = await createProject(credentials);
      if (res?.error?.data?.IsError) {
        if (res?.error?.data?.Result && res?.error?.data?.Result?.length > 0) {
          toast.error(res?.error?.data?.Result[0]?.Description);
        } else {
          toast.error(res?.error?.data?.Message);
        }
      }

      if (!res?.error?.data?.isError) {
        onSuccess();
      }
    } catch (err) {
      console.error(err, "Error in updating user data");
    }
  };

  return { createNewProject, isLoading };
};

export default useCreateProjects;
