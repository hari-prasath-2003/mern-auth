import { axiosPrivate } from "../service/api/axios";
import UserStore from "../store/UserStore";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import { useNavigate } from "react-router-dom";
import IUserStore from "@/interface/IUserStore";

export default function useApi() {
  const { accessToken } = UserStore((state: IUserStore) => ({ accessToken: state.accessToken }));

  const refreshToken = useRefreshToken();

  const navigate = useNavigate();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 401 && !prevRequest?.sent) {
          prevRequest.sent = true;
          try {
            const newAccessToken = await refreshToken();
            prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
            return axiosPrivate(prevRequest);
          } catch (refreshTokenError) {
            if (refreshTokenError?.response?.status === 401) {
              navigate("/login");
            }
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [accessToken, refreshToken, navigate]);

  return axiosPrivate;
}
