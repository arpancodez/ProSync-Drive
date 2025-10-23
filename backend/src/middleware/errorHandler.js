/**
 * Error handling middleware for Express
 * Catches and processes all errors thrown in the application
 */

const errorHandler = (err, req, res, next) => {
  console.error('Error:', err.stack);

  // Default error status and message
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  // Send error response
  res.status(statusCode).json({
    success: false,
    error: {
      message: message,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    },
  });
};

module.exports = errorHandler;
