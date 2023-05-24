const errorHandlerMiddleware = require("./errorHandler");

const asyncWrapper = (cb) => {
  return async (req, res, next) => {
    try {
      await cb(req, res , next);
    } catch (error) {
      errorHandlerMiddleware(error,res,req,next);
    }
  };
};

module.exports = asyncWrapper;
