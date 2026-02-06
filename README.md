# API Exam - Tasks API

Secure REST API for task management, built with NestJS.

## 📋 Description

This API allows you to manage tasks with complete CRUD functionality:
- Create, read, update and delete tasks
- Search by ID or title
- Input data validation
- Token-based authentication
- Interactive documentation with Swagger

## 🚀 Technologies

- **NestJS** - Progressive Node.js framework
- **TypeScript** - Typed language
- **class-validator** - DTO validation
- **class-transformer** - Object transformation
- **Swagger** - Interactive API documentation

## ⚙️ Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd api-exam

# Install dependencies
npm install
```

## 🔧 Configuration

Create a `.env` file at the project root:

```env
PORT=3000
APP_NAME="API Exam"
ACCESS_TOKEN=jbtKXf1Dib3w2LbRtUSq2nFGKQlgtPcgFRX09876SDt
```

## 🏃 Running the app

```bash
# Development mode (with hot-reload)
npm run start:dev

# Production mode
npm run build
npm run start:prod
```

The API will be available at `http://localhost:3000`

## 📚 API Documentation (Swagger)

Once the application is running, access the interactive Swagger documentation:

👉 **http://localhost:3000/api-docs**

## 🔐 Authentication

All `/tasks` endpoints require an authentication token.

**Required header:**
```
Authorization: my-secret-access-token-2026
```

In Swagger, click the lock icon 🔒 at the top right and enter the token.

## 📍 Available Endpoints

### Tasks

| Method | Endpoint | Description |
|---------|----------|-------------|
| `GET` | `/tasks` | Get all tasks |
| `GET` | `/tasks?title=xxx` | Get a task by title |
| `GET` | `/tasks/:id` | Get a task by ID |
| `POST` | `/tasks` | Create a new task |
| `PATCH` | `/tasks/:id` | Partially update a task |
| `DELETE` | `/tasks/:id` | Delete a task |

## 📝 Data Model

### Task

```typescript
{
  id: number;           // Auto-generated
  title: string;        // Required
  startedAt: Date;      // Required (format: "2026-02-06")
  isCompleted: boolean; // Required
}
```

## 🧪 Request Examples

### Create a task

```bash
curl -X POST http://localhost:3000/tasks \
  -H "Authorization: my-secret-access-token-2026" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Buy groceries",
    "startedAt": "2026-02-06",
    "isCompleted": false
  }'
```

### Get all tasks

```bash
curl -X GET http://localhost:3000/tasks \
  -H "Authorization: my-secret-access-token-2026"
```

### Update a task

```bash
curl -X PATCH http://localhost:3000/tasks/1 \
  -H "Authorization: my-secret-access-token-2026" \
  -H "Content-Type: application/json" \
  -d '{
    "isCompleted": true
  }'
```

## ✨ Features

- ✅ Complete REST API with all CRUD operations
- ✅ Automatic data validation with `class-validator`
- ✅ Token-based authentication in headers
- ✅ Interactive documentation with Swagger/OpenAPI
- ✅ Error handling (404, 401, 400)
- ✅ In-memory storage (no database)

## 🛠️ Project Structure

```
src/
├── auth/
│   └── auth.middleware.ts      # Authentication middleware
├── tasks/
│   ├── dto/
│   │   ├── create-task.dto.ts  # Create DTO
│   │   └── update-task.dto.ts  # Update DTO
│   ├── entities/
│   │   └── task.entity.ts      # Task entity
│   ├── tasks.controller.ts     # REST controller
│   ├── tasks.service.ts        # Business logic
│   └── tasks.module.ts         # Tasks module
├── app.module.ts               # Main module
└── main.ts                     # Entry point

```

## 📦 Tests

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## 👤 Author

Emmanuel

---

Built with ❤️ using NestJS
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
