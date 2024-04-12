import { Document, Query } from "mongoose";
import IUser from "./IUser";

export default interface IUserRepository {
  create(email: string, password: string, name: string): Promise<IUser>;
  find(id: string): Promise<Query<IUser | null, IUser>>;
  findByEmail(string: string): Promise<Query<IUser | null, IUser>>;
  update(id: string, email: string, password: string, name: string): Promise<void>;
}
