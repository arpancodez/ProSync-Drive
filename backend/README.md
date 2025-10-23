# ProSync-Drive Backend

This is the backend server for ProSync-Drive, built with Node.js, Express, and MongoDB.

## Features

- RESTful API architecture
- JWT authentication
- File upload and management
- Real-time sync capabilities
- MongoDB database integration
- Express middleware for security
- Error handling and logging

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **File Storage**: Local/Cloud storage integration

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (v5 or higher)
- npm or yarn package manager

## Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Configure your `.env` file with the following variables:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/prosync-drive
JWT_SECRET=your-secret-key
JWT_EXPIRE=7d
```

## Running the Server

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

## Project Structure

```
backend/
├── src/
│   ├── controllers/    # Request handlers
│   ├── middleware/     # Express middlewares
│   ├── models/         # MongoDB schemas
│   └── routes/         # API routes
├── .env.example        # Environment variables template
├── Dockerfile          # Docker configuration
├── package.json        # Project dependencies
└── server.js           # Entry point
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Files
- `GET /api/files` - Get all files
- `POST /api/files/upload` - Upload file
- `GET /api/files/:id` - Get file by ID
- `DELETE /api/files/:id` - Delete file
- `PUT /api/files/:id` - Update file

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

## Testing

```bash
npm test
```

## Docker

Build and run with Docker:

```bash
docker build -t prosync-backend .
docker run -p 5000:5000 prosync-backend
```

## Contributing

See [CONTRIBUTING.md](../CONTRIBUTING.md) for contribution guidelines.

## License

MIT
