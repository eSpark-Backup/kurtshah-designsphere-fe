export const getAuthedRoute = (pathname) => {
  const unAuthorizedPaths = ["/sign-up", "/sign-in", "/email-verified", "/forget-password", "/lets-start", "/profile-details", "/verify-email"];
  const unAuthedPath = unAuthorizedPaths.filter((path) => path === pathname);
  const authed = unAuthedPath.length <= 0;
  return authed;
};

export const getThemeVariant = theme => theme == 0 ? "default" : theme > 0 && theme < 7 ? "light" : "dark"
