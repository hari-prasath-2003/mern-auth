import { create } from "zustand";

const UserStore = create((set) => ({
  token: localStorage.getItem("token") || null,
  name: "",
  email: "",
  profile: "",
  id: "",
  setUser: ({ email, name, profile, id }) => {
    set(() => ({ email, name, profile, id }));
  },
}));

export default UserStore;
