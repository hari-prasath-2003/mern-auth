import IUser from "../interface/IUser";
import { IUserInteractor } from "../interface/IUserInteractor";
import IUserRepository from "../interface/IUserRepository";

export class UserInteractor implements IUserInteractor {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public async getUser(id: string): Promise<{ email: string; name: string; profile: string; id: string } | null> {
    try {
      const user: IUser | null = await this.userRepository.find(id);
      if (!user) return null;

      return {
        email: user.email,
        name: user.name,
        profile: user.profile,
        id: user._id,
      };
    } catch (error) {

      throw new Error("An error occurred while fetching user data");
    }
  }
  public async getUserInterest(id: string): Promise<[string] | []> {
    try {
      const user: IUser | null = await this.userRepository.find(id);

      if (!user) return [];
      return user.interests;
    } catch (error: any) {
      console.log(error);

      throw new Error("An error occurred while fetching user data");
    }
  }
}
