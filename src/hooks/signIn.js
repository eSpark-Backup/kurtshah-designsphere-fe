import { toast } from "react-toastify";
import { useSignInMutation } from "@/services/auth";
import { setLocalStorage } from "@/utils";

const useSignIn = () => {
  const [signin, { isLoading }] = useSignInMutation();

  const signIn = async (objToSend, router) => {
    try {
      const formData = new URLSearchParams();
      Object.keys(objToSend).forEach((key) => {
        formData.append(key, objToSend[key]);
      });

      const res = await signin(formData);

      if (res?.error?.data?.IsError) {
        if (res?.error?.data?.Result && res?.error?.data?.Result?.length > 0) {
          toast.error(res?.error?.data?.Result[0]?.Description);
        } else {
          toast.error(res?.error?.data?.Message);
        }
      }
      if (res?.data?.StatusCode === 200) {
        if (res?.data?.Result?.UserProfile) {
          if (
            res?.data?.Result?.Is_Email_Authenticated &&
            res?.data?.Result?.Is_Google_Authenticated
          ) {
            setLocalStorage("email_mfa", true);
            setLocalStorage("google_mfa", true);
            setLocalStorage("authed", false);
            setLocalStorage("token", res?.data?.access_token);
            router.push(`/multifactor?email=${objToSend?.email}`);
          } else if (res?.data?.Result?.Is_Google_Authenticated) {
            setLocalStorage("email_mfa", false);
            setLocalStorage("google_mfa", true);
            setLocalStorage("authed", false);
            setLocalStorage("token", res?.data?.access_token);
            router.push(`/google-auth?email=${objToSend?.email}`);
          } else if (res?.data?.Result?.Is_Email_Authenticated) {
            setLocalStorage("email_mfa", true);
            setLocalStorage("google_mfa", false);
            setLocalStorage("authed", false);
            setLocalStorage("token", res?.data?.access_token);
            router.push(`/email-auth?email=${objToSend?.email}`);
          } else if (
            !res?.data?.Result?.Is_Email_Authenticated &&
            !res?.data?.Result?.Is_Google_Authenticated
          ) {
            setLocalStorage("email_mfa", false);
            setLocalStorage("google_mfa", false);
            setLocalStorage("authed", true);
            setLocalStorage("token", res?.data?.access_token);
            router.push(`/multifactor?email=${objToSend?.email}`);
          }
        } else {
          router.push(
            `/profile-details?access_token=${res?.data?.access_token}`
          );
        }
      }
      if (res?.error?.data?.Message === "check Email to verify the account") {
        router.push(`/verify-email?email=${objToSend?.email}`);
      }
    } catch (err) {
      console.error(err, "Error in updating user data");
    }
  };

  return { signIn, isLoading };
};

export default useSignIn;
