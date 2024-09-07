import { create } from "zustand";
import IUserStore from "../interface/IUserStore";

const UserStore = create<IUserStore>((set) => ({
  accessToken: "",
  name: "",
  email: "",
  profile: "",
  id: "",
  setUser: ({ accessToken, name, email, profile, id }) => {
    set(() => ({ accessToken, name, email, profile, id }));
  },
}));

export default UserStore;
