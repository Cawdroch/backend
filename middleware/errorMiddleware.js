// Define error handling function

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  res.json({ message: err.message });
};

// Export module

module.exports = { errorHandler };
