import { Document } from "mongoose";

export interface IProduct extends Document {
  title: string;
  price: number;
  description: string;
  category: string;
  coverImage: string;
  images: string[];
  rate: number;
  discount: number;
  deliveryCharge: number;
}
