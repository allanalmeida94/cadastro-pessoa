import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema(
  {
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
  },
  {timestamps: true}
)

const modelName = mongoose.models.User || mongoose.model("User", userSchema)

export default modelName;
