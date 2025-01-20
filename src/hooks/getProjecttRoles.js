import { useGetprojectRolesMutation } from "@/services/projects";
import { toast } from "react-toastify";

const useGetProjectsRoles = () => {
  const [fetchProjectRoles, { isLoading }] = useGetprojectRolesMutation();

  const getProjectRoles = async (onSuccess) => {
    try {
      const res = await fetchProjectRoles();
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

  return { getProjectRoles, isLoading };
};

export default useGetProjectsRoles;
