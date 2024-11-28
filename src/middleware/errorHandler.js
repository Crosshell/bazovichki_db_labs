const errorHandler = (err, req, res, next) => {
  console.error(err);

  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({ status: err.status, message: err.message });
};

export default errorHandler;
