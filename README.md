## REST APIs practice project
A simple Node.js REST API project using Express and Mongoose for user management.

## Features

- Connects to MongoDB using Mongoose
- User CRUD operations:
  - Create user
  - Get user by ID
  - Get all users (with filtering, sorting, pagination)
  - Update user
  - Delete user

## Project Structure

```
.
├── .env
├── .gitignore
├── index.js
├── package.json
└── src
    ├── app.controller.js
    ├── DB
    │   ├── connection.js
    │   └── models
    │       └── user.model.js
    └── modules
        └── user
            ├── user.controller.js
            └── user.service.js
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository
2. Run `npm install`

### Running the Project

```sh
npm run dev
```

The server will start on the port specified in `.env`.

## API Endpoints

All endpoints are prefixed with `/user`.

| Method | Endpoint        | Description         |
|--------|----------------|---------------------|
| POST   | `/user/`       | Create a user       |
| GET    | `/user/:id`    | Get user by ID      |
| GET    | `/user/`       | Get all users       |
| PATCH  | `/user/:id`    | Update user by ID   |
| DELETE | `/user/:id`    | Delete user by ID   |

## User Model

- `userName`: String (4-20 chars)
- `email`: String (unique, required, valid email)
- `age`: Number (must be >= 18)
- `password`: Number (required)
- `isconfirmed`: Boolean (default: false)
- `gender`: String ("male" or "female")

## License
ISC
