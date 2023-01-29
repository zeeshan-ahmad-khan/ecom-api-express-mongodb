const errorMiddleware = (err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : null,
  });
  next();
};

module.exports = errorMiddleware;
