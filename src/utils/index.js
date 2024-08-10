export const getAuthedRoute = (pathname) => {
  const unAuthorizedPaths = ["/sign-up", "/sign-in"];
  const unAuthedPath = unAuthorizedPaths.filter((path) => path === pathname);
  const authed = unAuthedPath.length <= 0;
  return authed;
};
