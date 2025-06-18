import userModel from "./../../DB/models/user.model.js";

// create user
export const createUser = async (req, res) => {
  try {
    // 1- new keyword
    // const user = new userModel({ ...req.body });
    // await user.save();

    //2- create
    const user = await userModel.create({ ...req.body });

    //3- InsertMany

    // const users = await userModel.insertMany([{ ...req.body }]);

    return res.status(201).json({ success: true, results: { user } });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: error.message, stack: error.stack });
  }
};

// get specific users
export const findUser = async (req, res) => {
  try {
    const { id } = req.params;

    //find

    // const user = await userModel.find({ _id: id });
    //.select("userName age email -_id");

    //findOne
    //const user = await userModel.findOne({ _id: id });

    //findById
    const user = await userModel.findById(id).select("userName age email -_id");

    return user
      ? res.status(200).json({ success: true, results: { user } })
      : res.status(404).json({ success: true, message: "user not found" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: error.message, stack: error.stack });
  }
};

//get all users

export const findAllUsers = async (req, res) => {
  try {
    const { age } = req.query;
    const users = await userModel
      .find({ age: { $gt: age } })
      .sort({ age: -1 })
      .skip(1)
      .limit(2)
      .select("userName email age -_id");

    return res.status(200).json({ success: true, results: { users } });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: error.message, stack: error.stack });
  }
};

//update specific user

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    /*1- findByIdAndUpdate*/
    const user = await userModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true, runValidators: true, upsert: true }
    );

    /*2- findOneAndUpdate */
    // const user = await userModel.findOneAndUpdate(
    //   { _id: id },
    //   { ...req.body },
    //   { new: true, runValidators: true }
    // );

    /*3- UpdateOne / updateMany both returns meta data */
    // const user = await userModel.updateOne(
    //   { _id: id },
    //   { new: true, runValidators: true }
    // );

    return user
      ? res.status(200).json({ success: true, results: { user } })
      : res.status(404).json({ success: false, message: "user not found" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: error.message, stack: error.stack });
  }
};

// delete a user
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findByIdAndDelete(id);

    return user
      ? res.status(200).json({ success: true, results: { user } })
      : res.status(404).json({ success: false, message: "user not found!" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: error.message, stack: error.stack });
  }
};
