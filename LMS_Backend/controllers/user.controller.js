import { User } from "../modal/user.modal.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "user already exist.",
      });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    await User.create({
      name,
      email,
      password: hashPassword,
    });
    return res.status(201).json({
      success: true,
      message: "Account Created Sucessfully.",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "failed to register.",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "incorrect email or password",
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: "incorrect email or password",
      });
    }
    generateToken(res, user, `Welcome back ${user.name}`);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "failed to login.",
    });
  }
};

export const logOut = async (_, res) => {
  try {
    return res.status(201).cookie("token" , "", {maxAge:0}).json({
      success: true,
      message: "logout Sucessfully.",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "error in logout.",
    });
  }
};

export const getUserProfile = async (req, res) => {
  try {
     const userId = req.id;
     const user = await User.findById(userId).select("-password");
     if(!user){
       return res.status(500).json({
      success: false,
      message: "profile not found",
    });
     }
      return res.status(200).json({
      success: true,
      user
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "error in getting profile",
    });
  }
};



