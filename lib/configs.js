module.exports = {
  MONGO_URL: process.env.MONGO_URL || process.env.MONGODB_URI,
  AUTH: {
    name: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
};
