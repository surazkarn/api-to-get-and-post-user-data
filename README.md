# This API allows the creation, retrieval, and storage of user data in a MongoDB database.

# setup
- Install the required dependencies after clonning it : `npm install express mongoose body-parser`
- Install the dotenv package using npm: `npm install dotenv`
- Create a .env file in the root directory of your Node.js application and add the MongoDB connection URI as follows:
`MONGODB_URI=mongodb://<username>:<password>@<hostname>/<database-name>`


# use case
- Api to hold all the user data in a Node.js application using MongoDB.

# Rquest Methods
- To retrieve all users, make a GET request to "/users". 
- To add a new user, make a POST request to "/users" with the user's data in the request body.
