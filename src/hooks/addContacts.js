import { useAddContactsMutation } from "@/services/collaborators";
import { toast } from "react-toastify";

const useAddContact = () => {
  const [addContacts, { isLoading }] = useAddContactsMutation();

  const addContact = async (credential, onSuccess) => {
    try {
      const res = await addContacts(credential);
      if (res?.error?.data?.IsError) {
        if (res?.error?.data?.Result && res?.error?.data?.Result?.length > 0) {
          toast.error(res?.error?.data?.Result[0]?.Description);
        } else {
          toast.error(res?.error?.data?.Message);
        }
      }

      if (!res?.data?.isError) {
        if (res?.data?.result?.responseException === "Contact Already Exist ") {
          toast.error(res?.data?.result?.responseException);
        } else {
          onSuccess(res);
        }
      }
    } catch (err) {
      console.error(err, "Error in updating user data");
    }
  };

  return { addContact, isLoading };
};

export default useAddContact;
