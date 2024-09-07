export default interface IUserStore {
  accessToken: string;
  name: string;
  email: string;
  profile: string;
  id: string;
  setUser: (user: { accessToken: string; name: string; email: string; profile: string; id: string }) => void;
}
