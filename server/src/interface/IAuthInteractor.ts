import IUser from "./IUser";

export default interface IAuthInteractor {
  login(email: string, password: string): Promise<{ email: string; name: string; profile: string; id: string }>;
  register(
    email: string,
    password: string,
    name: string
  ): Promise<{ email: string; name: string; profile: string; id: string }>;
}
