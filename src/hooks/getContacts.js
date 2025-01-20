import { useGetContactsMutation } from "@/services/collaborators";
import { toast } from "react-toastify";

const useGetContacts = () => {
  const [fetchContacts, { isLoading }] = useGetContactsMutation();

  const getContacts = async (page, pageSize, name, onSuccess) => {
    try {
      const res = await fetchContacts({ page, pageSize, name });
      if (res?.error?.data?.IsError) {
        if (res?.error?.data?.Result && res?.error?.data?.Result?.length > 0) {
          toast.error(res?.error?.data?.Result[0]?.Description);
        } else {
          toast.error(res?.error?.data?.Message);
        }
      }

      if (!res?.data?.isError) {
        onSuccess(res);
      }
    } catch (err) {
      console.error(err, "Error in updating user data");
    }
  };

  return { getContacts, isLoading };
};

export default useGetContacts;
