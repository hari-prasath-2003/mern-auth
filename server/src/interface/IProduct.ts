import { ObjectId } from "mongoose";

export interface IProduct {
  _id: ObjectId;
  title: string;
  price: number;
  description: string;
  category: string;
  coverImage: string;
  images: string[];
  rate: number;
}
