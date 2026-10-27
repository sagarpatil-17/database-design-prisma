# Prisma + MySQL Practice

A hands-on sandbox project designed to learn and practice database management, schema modeling, and relationships using Prisma ORM and MySQL in a Node.js environment.

## 🚀 Key Features

- **Prisma ORM:** Clean, type-safe database queries and automated schema migrations.
- **MySQL Integration:** Relational database setup for data modeling and query testing.
- **Express API:** A lightweight, straightforward server implementation to expose endpoints.
- **Rate Limiting:** Request throttling implemented via middleware (`express-rate-limit`) to prevent API abuse.

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **ORM:** Prisma
- **Database:** MySQL
- **Framework:** Express
- **Language:** JavaScript / TypeScript

## 📋 Prerequisites

Before running this project, ensure you have the following installed:
- [Node.js](https://nodejs.org) (v18 or higher)
- [MySQL Server](https://mysql.com) running locally or via Docker
- npm

## ⚙️ Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com
cd prisma-mysql-practice
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory and add your MySQL database connection details:

```env
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE_NAME"
PORT=3000
```

### 4. Initialize Prisma & Run Migrations
Generate your Prisma client and apply the schema to your local MySQL instance:

```bash
# Generate Prisma Client
npx prisma generate

# Create and apply the initial migration
npx prisma migrate dev --name init
```

### 5. Start the Application
```bash
# Start the development server
npm run dev
```
The server will run locally at `http://localhost:3000`.

## 📂 Project Structure Focus
- `prisma/schema.prisma`: The core file where the MySQL tables, relationships, and configurations live.
- `src/`: Contains the Express server routes and Prisma query logic.
