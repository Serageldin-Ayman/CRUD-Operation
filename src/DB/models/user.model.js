import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    userName: { type: String, minlength: 4, maxlength: 20 },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    },
    age: {
      type: Number,
      validate: {
        validator: function (value) {
          return !(value < 18);
        },
        message: (props) => {
          return ` ${props.value} must be greater than 18`;
        },
      },
    },
    password: { type: Number, required: true },
    isconfirmed: { type: Boolean, default: false },
    gender: { type: String, enum: ["male", "female"] },
  },
  { timestamps: true }
);

const userModel = model("users", userSchema);

export default userModel;
