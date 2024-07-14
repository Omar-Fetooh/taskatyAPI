# taskatyAPI

 A simple and efficient tasks management application built with Node.js, Express, and MongoDB. This application allows users to manage their tasks organized into categories through a RESTful API.
# postman Documentaion: 
<a href='https://documenter.getpostman.com/view/30656515/2sA3e5f8q7'>Postmand docs </a>

# Features
### User Authentication:

- Basic HTTP authentication for user management (username and password).

### User Management:

- CRUD operations for users (Create, Read, Update, Delete).
### Category Management:


- CRUD operations for task categories.

- Each user can own multiple categories.

### Task Management:

- CRUD operations for tasks within categories.
Tasks can be of two types: text tasks and list tasks.
Tasks can be private (visible only to the creator) or shared (visible to all users).
### Advanced Querying:

- Filtering categories and tasks by name and shared status.
- Sorting categories and tasks alphabetically and by shared status.
## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT for authentication
- Joi for input validation

## API EndPoints
### Users:

- `POST /users/signup`: Register a new user.

- `POST /users/signin`: Authenticate and sign in a user.

### Categories:

- `POST/categories`: Add a new category.

- `GET/categories`: Get a list of all categories.
- `PUT/categories/:categoryId`: Update category details.
- `DELETE/categories/:categoryId`: Delete a category.

### Tasks:

- `POST/tasks`: Add a new task.

- `GET/tasks`: Get a list of all tasks.
- `PUT/tasks/:taskId`: Update task details.
- `DELETE/tasks/:taskId`: Delete a task.

### Special Queries:

-`GET/categories/filterByName?name=Work`: Filter categories by name.

-`GET/tasks/filterByShared?shared=true`: Filter tasks by shared status.

-`GET/tasks/sortBySharedOption`: Sort tasks by shared status.
