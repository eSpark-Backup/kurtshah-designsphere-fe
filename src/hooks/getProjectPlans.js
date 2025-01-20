import { useGetProjectPlansMutation } from "@/services/plans";
import { toast } from "react-toastify";

const useGetAllProjectPlans = () => {
  const [getPlans, { isLoading }] = useGetProjectPlansMutation();

  const getProjectPlans = async (page, pageSize, projectId, onSuccess) => {
    try {
      const res = await getPlans({ page, pageSize, projectId });
      if (res?.error?.data?.IsError) {
        if (res?.error?.data?.Result && res?.error?.data?.Result?.length > 0) {
          toast.error(res?.error?.data?.Result[0]?.Description);
        } else {
          toast.error(res?.error?.data?.Message);
        }
      }

      if (!res?.error?.data?.isError) {
        onSuccess(res);
      }
    } catch (err) {
      console.error(err, "Error");
    }
  };

  return { getProjectPlans, isLoading };
};

export default useGetAllProjectPlans;
