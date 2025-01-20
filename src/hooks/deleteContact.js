import { useDeleteContactMutation } from "@/services/collaborators";
import { toast } from "react-toastify";

const useDeleteContact = () => {
  const [deleteContacts, { isLoading }] =
  useDeleteContactMutation();

  const deleteContact = async (credential, onSuccess) => {
    try {
      const res = await deleteContacts(credential);
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

  return { deleteContact, isLoading };
};

export default useDeleteContact;
