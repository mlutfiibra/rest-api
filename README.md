# REST API Challenge

## Dependency
1. Express
2. Sequelize
3. Postgres
4. bcryptjs
5. jsonwebtoken
6. dotenv

## Todos Endpoints

You must login to access these endpoints:
| Route            | HTTP   | Description                 |
|:-----------------|:-------|:----------------------------|
| `/api/todos`     | GET    | Get all the todos info      |
| `/api/todos/:id` | GET    | Get a single todo info      |
| `/api/todos`     | POST   | Create a todo               |
| `/api/todos/:id` | DELETE | Delete a todo               |
| `/api/todos/:id` | PUT    | Update a todo with new info |
| `/api/todos/:id` | PATCH  | Update a todo with new info |

## Authentication Endpoints
| Route         | HTTP | Description                                          |
|:--------------|:-----|:-----------------------------------------------------|
| `/api/signup` | POST | Sign up with new user info                           |
| `/api/signin` | POST | Sign in and get an access token based on credentials |
