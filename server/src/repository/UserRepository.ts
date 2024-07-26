import IUser from "../interface/IUser";
import IUserRepository from "../interface/IUserRepository";
import User from "../models/User";
import { Document, Model, Query } from "mongoose";

export default class UserRepository implements IUserRepository {
  private UserModel: Model<IUser> = User;

  async create(email: string, password: string, name: string): Promise<IUser> {
    const newUser = new this.UserModel({
      email,
      name,
      password,
    }) as IUser;

    return await newUser.save();
  }

  async find(id: string): Promise<Query<IUser | null, IUser>> {
    const user = await this.UserModel.findById(id);
    return user;
  }

  async findByEmail(email: string): Promise<Query<IUser | null, IUser>> {
    const user = await this.UserModel.findOne({ email });
    return user;
  }

  async update(id: string, email: string, password: string, name: string): Promise<void> {
    await this.UserModel.updateOne(
      { id },
      {
        email,
        name,
        password,
      }
    );
  }
}
