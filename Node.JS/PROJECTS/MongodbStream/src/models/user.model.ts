import mongoose from "mongoose";

export interface UserInput {
  email: string;
  firstName: string;
  lastName: string;
}

export interface UserDocument extends UserInput, mongoose.Document {
  fullName: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: String,
});

userSchema.index({ email: 1 });

export default mongoose.model<UserDocument>("User", userSchema);
