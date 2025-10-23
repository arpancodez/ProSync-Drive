# Contributing to ProSync-Drive

Thank you for your interest in contributing to ProSync-Drive! This document provides guidelines and instructions for contributing.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and collaborative environment.

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in Issues
2. Create a new issue with a clear title and description
3. Include steps to reproduce, expected behavior, and actual behavior
4. Add relevant labels and screenshots if applicable

### Suggesting Features

1. Open an issue with the "enhancement" label
2. Clearly describe the feature and its benefits
3. Discuss implementation approach if possible

### Pull Requests

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes following our coding standards
4. Write or update tests as needed
5. Commit with clear, descriptive messages
6. Push to your fork and submit a pull request

## Development Setup

### Backend
```bash
cd backend
npm install
cp .env.example .env
# Configure your .env file
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Coding Standards

- Follow ESLint configuration
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused
- Write unit tests for new features

## Commit Message Guidelines

- Use present tense: "Add feature" not "Added feature"
- Use imperative mood: "Move cursor to" not "Moves cursor to"
- Start with a verb: Add, Update, Fix, Remove, etc.
- Keep first line under 50 characters
- Add detailed description if needed

Examples:
- `Add user authentication middleware`
- `Fix file upload validation bug`
- `Update API documentation`

## Testing

Run tests before submitting:
```bash
npm test
```

## Questions?

Feel free to open an issue for any questions or clarifications needed.  
