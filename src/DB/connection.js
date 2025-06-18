import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose
    .connect(process.env.CONNECTION_URI)
    .then(() => console.log("DB connected Successfully!"))
    .catch((error) => console.log(`failed to connect DB because ${error}`));
};

export default connectDB;
