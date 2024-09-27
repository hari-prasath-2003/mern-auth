export interface ICartInteractor {
  getUserCartDetail(userId: string): any;
  addProduct(userId: string, productId: string): Promise<void>;
  updateProductQuantity(userId: string, productId: string, newQuantity: number): Promise<void>;
  removeProduct(userId: string, productId: string): Promise<void>;
}
