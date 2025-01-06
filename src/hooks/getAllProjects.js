import { useGetAllprojectsMutation } from "@/services/projects";
import { toast } from "react-toastify";

const useGetAllProjects = () => {
  const [getProjects, { isLoading }] = useGetAllprojectsMutation();

  const getAllProjects = async (page, pageSize, onSuccess) => {
    try {
      const res = await getProjects({ page, pageSize });
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

  return { getAllProjects, isLoading };
};

export default useGetAllProjects;
