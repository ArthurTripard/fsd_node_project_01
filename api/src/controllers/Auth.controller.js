import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "config";

import UserModel from "../models/User.model.js";

const saltRounds = 10;

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);

    const user = new UserModel({ username, email, hash });

    await user.save();

    res.status(200).json({});
  } catch (error) {
    res.status(500).json({});
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email }).exec();
    const isValidPassword = bcrypt.compareSync(password, user.hash);

    if (!isValidPassword) {
      return res.status(400).json({ error: "Invalid email / password" });
    }

    const token = jwt.sign({ username: user.username, admin: user.admin }, config.get("JWT_SECRET"), {
      expiresIn: "24h",
    });

    res.status(200).json({ sucess: true, token, user: { username: user.username, isAdmin: user.admin } });
  } catch (error) {
    res.status(500).json({ sucess: false, error: "error" });
  }
};
