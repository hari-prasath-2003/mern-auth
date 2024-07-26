export interface IUserInteractor {
  getUser(id: string): Promise<{ email: string; name: string; profile: string; id: string } | null>;
  getUserInterest(id: string): Promise<[string] | []>;
}
