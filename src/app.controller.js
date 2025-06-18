import connectDB from "./DB/connection.js";
import userRouter from "./modules/user/user.controller.js";

const bootstrap = async (app, express) => {
  await connectDB();
  app.use(express.json());

  app.use("/user", userRouter);

  app.all("*", (req, res) => {
    res.status(404).json("API not found!");
  });
};
export default bootstrap;
