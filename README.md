# Piazza
Second Web Dev Assignment

#Endpoints

User Authentication:

POST /api/user/register
- registers a new user

POST /api/user/login
- Logs in a user and returns an authentication token


Posts:

GET /api/posts
- Fetches all posts (publicly available)

POST /api/posts
- creates a new post but requires authentication
- request headers: auth-token received when user logs in

GET /api/posts/:id 
- fetches an individual post by its id (publicly available)
- request params: id of the post to retrieve

PUT: /api/posts/:id 
- Updates a post but only the post creator can do this. Requires auth
- request headers: auth-token received when user logs in
- request params: id of the post to retrieve
