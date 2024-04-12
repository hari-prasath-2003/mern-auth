import IAuthInteractor from "../interface/IAuthInteractor";
import IUserRepository from "../interface/IUserRepository";
import ClientError from "../error/ClientError";

export default class AuthInteractor implements IAuthInteractor {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async login(email: string, password: string): Promise<{ email: string; name: string; profile: string; id: string }> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new ClientError("user not found please register");
    }
    const passwordMatch = user.password == password;

    if (!passwordMatch) {
      throw new ClientError("credential does't match");
    }

    return { email: user.email, name: user.name, profile: user.profile, id: user._id };
  }

  async register(
    email: string,
    password: string,
    name: string
  ): Promise<{ email: string; name: string; profile: string; id: string }> {
    const user = await this.userRepository.findByEmail(email);
    if (user) {
      throw new ClientError("email already exists please login");
    }
    const newUser = await this.userRepository.create(email, password, name);

    return { email: newUser.email, name: newUser.name, profile: newUser.profile, id: newUser._id };
  }
}
