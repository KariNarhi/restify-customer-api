// Bring in local connection string (ignored in Git)
const MONGO_STRING = require("./keys").MONGO_STRING;

// Bring in local JWT secret
const JWT_SECRET_STRING = require("./keys").JWT_SECRET_STRING;

module.exports = {
  ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 3000,
  URL: process.env.BASE_URL || "http://localhost:3000",
  MONGODB_URI: process.env.MONGODB_URI || MONGO_STRING,
  JWT_SECRET: process.env.JWT_SECRET || JWT_SECRET_STRING,
};
