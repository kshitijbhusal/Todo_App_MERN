import { generateToken } from "../utils/generateToken.js";
import { User } from "../models/user.js";
import bcrypt from "bcryptjs";

//
// --------------------------------------------------Registration
//
export const register = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({
      message: "All feild are required",
    });
  }
  const userExist = await User.findOne({ email });
  if (userExist) {
    return res.status(400).json({
      message: "Email already registered.",
    });
  }

  const hashPassword = bcrypt.hashSync(password, 10);
  const user = await User.create({
    username,
    email,
    password: hashPassword,
  });
  if (user) {
    return res.status(201).json({
      message: "User created sucessfully.",
      _id: user.id,
      name: user.username,
      email: user.email,
    });
  } else {
    return res.status(400).json({
      message: "Invalid user data.",
    });
  }
};

// --------------------------------------------------Login
//
export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({
      message: "Email or Password is Incorrect",
    });
  }
  const isPasswordMatch = await bcrypt.compareSync(password, user.password);
  if (!isPasswordMatch) {
    return res.status(400).json({
      message: "Email or Password is Incorrect",
    });
  }
  //----------------------------------Generate token
  const token = generateToken(user);

  //------------------------------- Set Cookies to frontend.
  res.cookie("authToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict", // Prevent CSRF attacks
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });

  return res.status(200).json({
    message: "you are logged in",
  });
};

// --------------------------------------------------get me
//

export const getMe = async (req, res) => {
  const user = await User.findOne({ _id: req.id });

  res.status(200).json({
    user,
  });
};

// --------------------------------------------------Login
//

export const logout = (req, res) => {
  res.clearCookie("authToken");

  return res.status(200).json({ message: "Logged out successfully" });
};
export const auth = (req, res) => {
  const token = req.cookies.authToken;

  if (!token) {
    return res.status(401).json({
      message: "You are not authenticated",
    });
  }
  res.status(200).json({
    message: "You are authenticated",
  });
};
