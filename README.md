# Piazza
Second Web Dev Assignment endpoints 


# Setup Instructions

Prerequisites:
- Node.js installed (v14+ recommended)
- MongoDB database setup
- The API will be available at http://localhost:PORT/.

# User Authentication

1. Register a New User
- Endpoint: POST /api/user/register
- Description: Registers a new user in the system.

Request Body: {
"username": ""
"email": ""
"password": ""
}


2. User Login
- Endpoint: POST /api/user/login
- Description: Authenticates a user and returns an authentication token.

Request Body:{
"email":""
"password":""
}


# Post Management

1. Fetch All Posts
- Endpoint: GET /api/posts
- Description: Retrieves all publicly available posts. (auth token not required)

2. Create a New Post
- Endpoint: POST /api/posts
- Description: Creates a new post (requires authentication).

Request Headers:
auth-token: ...

Request Body:{
"title": ""
"description":""
}


3. Fetch a Single Post
- Endpoint: GET /api/posts/:id
- Description: Retrieves a specific post by its ID.

4. Update a Post
- Endpoint: PUT /api/posts/:id
- Description: Updates an existing post (only the creator can update it).

Request Headers:
auth-token: ...

Request Body: {
"title": ""
"description":""
}


5. Delete a Post
- Endpoint: DELETE /api/posts/:id
- Description: Deletes a post (only the creator can delete it).

Request Headers:
auth-token:...
