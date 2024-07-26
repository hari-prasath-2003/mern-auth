import mongoose from "mongoose";
import { IProduct } from "../interface/IProduct";
import { text } from "express";

const productSchema = new mongoose.Schema<IProduct>({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    default: [],
  },
  rate: {
    type: Number,
    min: 0,
    max: 5,
  },
  coverImage: {
    type: String,
    default: "",
  },
});

productSchema.index(
  { title: "text", description: "text", category: "text" },
  { weights: { category: 2, title: 10, description: 5 }, name: "searchIndex" }
);

const Products = mongoose.model<IProduct>("product", productSchema);

export default Products;
