export const getAuthedRoute = (pathname) => {
  const unAuthorizedPaths = ["/sign-up", "/sign-in", "/multifactor", "/google-auth", "/email-auth", "/verify-otp", "/email-verified", "/forget-password", "/reset-password", "/lets-start", "/profile-details", "/verify-email"];
  const unAuthedPath = unAuthorizedPaths.filter((path) => path === pathname);
  const authed = unAuthedPath.length <= 0;
  return authed;
};

export const getThemeVariant = theme => theme == 0 ? "default" : theme > 0 && theme < 7 ? "light" : "dark"

export function maskEmail(email) {
  if (!email) return;
  const [localPart, domain] = email.split("@");
  const maskedLocal = localPart.slice(0, Math.ceil(localPart.length / 2)) + "*".repeat(Math.floor(localPart.length / 2));
  return `${maskedLocal}@${domain}`;
}

export const setLocalStorage = (key, value) => {
  typeof window !== "undefined" && localStorage.setItem(key, value);
};

export const getLocalStorage = (key) => {
  return typeof window !== "undefined" && localStorage.getItem(key);
};

export const removeLocalStorage = (key) => {
  typeof window !== "undefined" && localStorage.removeItem(key);
};