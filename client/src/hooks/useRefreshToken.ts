import axios from "../service/api/axios";
import UserStore from "../store/UserStore";
import IUserStore from "../interface/IUserStore";

export default function useRefreshToken() {
  const setUser = UserStore((state: IUserStore) => state.setUser);

  return async function refreshToken() {
    const res = await axios.get("/auth/refresh", { withCredentials: true });
    setUser({
      accessToken: res.data.token,
      name: res.data.name,
      email: res.data.email,
      profile: res.data.profile,
      id: res.data.id,
    });
    return res.data.token;
  };
}
