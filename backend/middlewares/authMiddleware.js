import jwt from "jsonwebtoken";

export const protect = async (req, res, next) => {
  try {
    const authToken = req.cookies.authToken;
    console.log(authToken);

    if (!authToken) {
      return res.status(401).json({
        message: "User not authorized, no token found",
      });
    }

    //--------------------------------------------------------Extract token

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //--------------------------------------------------Attach the user ID to the request object
    req.id = await decoded._id;

    next();
  } catch (error) {
    console.log(error);
    res.status(401);
    throw new Error("Not authorized user");
  }
};
