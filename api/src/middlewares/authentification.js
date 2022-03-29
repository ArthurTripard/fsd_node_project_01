import jwt from "jsonwebtoken";
import config from "config";

const getToken = req => {
  const bearerToken = req.headers["authorization"];
  if (bearerToken) {
    return bearerToken.split(" ")[1];
  }

  return req.session.token;
};

const authentification = (req, res, next) => {
  const token = getToken(req);

  if (!token) {
    return res.redirect("/user/login");
  }

  const { user } = jwt.verify(token, config.get("JWT_SECRET"));

  if (user) {
    return next();
  }
  res.redirect("/user/login");
};

export default authentification;
