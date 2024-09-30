import mongoose from "mongoose";

export default async function connect() {
  try {
    await mongoose.connect(process.env.MONGO as string);
  } catch (error) {
    throw new Error(error as string);
  }
}
