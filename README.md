My Restaurant List
This is a backend programming assignment version 2 from the Alpha Camp bootcamp: a restaurant list website built using Node.js + Express with API and MVC structure, which includes various restaurant information for users and admin to browse, view details, edit, and search. 

Features:
Users can browse all restaurants and view basic information such as name, category, image, and rating.
Users can click on any restaurant to view detailed information including name, category, address, phone number, description, and images.
Users can create new restaurant for providing detailed information including name, category, address, phone number, description, and images.
Users can edit the restaurant detailed information including name, category, address, phone number, description, and images.
Users can delete the restaurant
Users can search for restaurants by Chinese name, English name, or category, with case-insensitive and space-insensitive matching.
Users can sorting the restaurant by the name, category or location
User have to login for the restaurant list, there are sample account below or register a new account or login via Facebook
Prerequisites
Node.js v20.11.1

Installing
Open your terminal and clone the project to your local machine:

git clone https://github.com/DonaldWongSuiSang/forum-express-grading-github-actions.git
Navigate to the project folder:

cd restaurant-list
Install npm packages:

npm install
Install nodemon:

npm install -g nodemon
Initialize the database

npm run seed
Create a ".env" file according to the ".env example"

Start the server by running the app.js file:

npm run dev
When you see the following message in the terminal, it indicates that the server and database have started successfully:

express server is running on http://localhost:3000
Open any web browser and go to http://localhost:3000 to start browsing the restaurant list.

There are two account for the demo, the information as following:

1st User
email: user1@example.com
password: 12345678

2nd User
email: user2@example.com
password: 12345678

Built With
Node.js - JavaScript runtime
Express - Web application framework for Node.js
Express-handlebars - Template engine
MySQL - Relational database management system
Sequelize - Promise-based Node.js ORM for MySQL
Method-override - Middleware for HTTP method override in Express.js
Connect-flash - Middleware for displaying flash messages
Dotenv - Module for loading environment variables
Passport - Authentication middleware for Node.js
Passport-local - Passport strategy for authenticating with a username and password
Passport-facebook - Passport strategy for authenticating with Facebook using the OAuth 2.0 API
Bcryptjs - Library for hashing passwords
Font Awesome - Icon toolkit
Authors
Donald Wong
Acknowledgments
ALPHA Camp
