/**
 * Application constants
 */

// HTTP Status Codes
const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
};

// File Upload Limits
const FILE_LIMITS = {
  MAX_FILE_SIZE: 100 * 1024 * 1024, // 100MB
  MAX_FILES: 10,
  ALLOWED_TYPES: ['image/jpeg', 'image/png', 'application/pdf', 'application/zip'],
};

// JWT Configuration
const JWT_CONFIG = {
  ACCESS_TOKEN_EXPIRE: '15m',
  REFRESH_TOKEN_EXPIRE: '7d',
};

// User Roles
const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  GUEST: 'guest',
};

// Error Messages
const ERROR_MESSAGES = {
  INVALID_CREDENTIALS: 'Invalid email or password',
  USER_EXISTS: 'User already exists',
  USER_NOT_FOUND: 'User not found',
  FILE_NOT_FOUND: 'File not found',
  UNAUTHORIZED: 'Unauthorized access',
  FORBIDDEN: 'Forbidden - Insufficient permissions',
  SERVER_ERROR: 'Internal server error',
};

module.exports = {
  HTTP_STATUS,
  FILE_LIMITS,
  JWT_CONFIG,
  USER_ROLES,
  ERROR_MESSAGES,
};
