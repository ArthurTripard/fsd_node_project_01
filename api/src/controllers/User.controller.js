import UserModel from "../models/User.model.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find({ admin: false }).select("username email").exec();

    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({});
  }
};
