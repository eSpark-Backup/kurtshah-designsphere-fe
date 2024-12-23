import { useGetCountriesInfoMutation } from "@/services/auth";
import { useState } from "react";
import { toast } from "react-toastify";

const useGetCountryAndJobOptions = () => {
  const [getCountryInfo] = useGetCountriesInfoMutation();
  const [loading, setLoading] = useState(true);

  const getCountryAndJobOptions = async (token, onSuccess) => {
    setLoading(true);
    try {
      const res = await getCountryInfo(token);

      if (res?.error?.data?.IsError) {
        if (res?.error?.data?.Result && res?.error?.data?.Result?.length > 0) {
          toast.error(res?.error?.data?.Result[0]?.Description);
          setLoading(false);
        } else {
          toast.error(res?.error?.data?.Message);
          setLoading(false);
        }
      }

      if (res?.data?.StatusCode === 200) {
        const jobRoles = res?.data?.result?.jobRoles?.map(({ id, name }) => ({
          label: name,
          value: id,
        }));
        const jobOptions = [{ value: "", label: "Job function" }, ...jobRoles];
        const countries = res?.data?.result?.countries?.map(({ id, name }) => ({
          label: name,
          value: id,
        }));
        const countryOptions = [{ value: "", label: "Country" }, ...countries];
        onSuccess(jobOptions, countryOptions);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      console.error(err, "Error in updating user data");
    }
  };

  return { getCountryAndJobOptions, loading };
};

export default useGetCountryAndJobOptions;
