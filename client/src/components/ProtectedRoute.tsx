import useRefreshToken from "@/hooks/useRefreshToken";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import AuthenticationLoading from "./loading/AuthenticationLoading";
import UserStore from "../../store/UserStore";

export default function ProtectedRoute() {
  const refreshToken = useRefreshToken();
  const accessToken = UserStore((state) => state.accessToken);

  const refreshTokenQuery = useQuery({
    queryKey: ["refreshToken"],
    queryFn: async () => {
      return await refreshToken();
    },
    gcTime: 0,
    enabled: !accessToken,
  });

  if (refreshTokenQuery.isLoading) {
    return <AuthenticationLoading />;
  } else if (refreshTokenQuery.error && refreshTokenQuery.error.response?.status === 401) {
    return <Navigate to={"/login"} />;
  } else if (refreshTokenQuery.error) {
    throw new Error(refreshTokenQuery.error.message);
  }

  return <Outlet />;
}
