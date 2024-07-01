# My Restaurant List

This is a backend programming assignment version 2 from the Alpha Camp bootcamp: a restaurant list website built using Node.js + Express with API and MVC structure, which includes various restaurant information for users and admin to browse, view details, edit, and search. 


## Features:

1. Users can browse all restaurants and view basic information such as name, category, image, and rating.
2. Users can click on any restaurant to view detailed information including name, category, address, phone number, description, and images.
3. Users can create new restaurant for providing detailed information including name, category, address, phone number, description, and images.
4. Users can edit the restaurant detailed information including name, category, address, phone number, description, and images.
5. Users can delete the restaurant
6. Users can search for restaurants by Chinese name, English name, or category, with case-insensitive and space-insensitive matching.
7. Users can sorting the restaurant by the name, category or location
8. User have to login for the restaurant list, there are sample account below or register a new account or login via Facebook

### Prerequisites

```
Node.js v20.11.1
```

### Installing

Open your terminal and clone the project to your local machine:

```
git clone https://github.com/DonaldWongSuiSang/forum-express-grading-github-actions.git
```

Navigate to the project folder:

```
cd restaurant-list
```

Install npm packages:

```
npm install
```

Install nodemon:

```
npm install -g nodemon
```

Initialize the database

```
npm run seed
```

Create a ".env" file according to the ".env example"


Start the server by running the app.js file:

```
npm run dev
```

When you see the following message in the terminal, it indicates that the server and database have started successfully:

```
express server is running on http://localhost:3000
```

Open any web browser and go to http://localhost:3000 to start browsing the restaurant list.

There are two account for the demo, the information as following:

> 1st User  
> email: user1@example.com  
> password: 12345678

> 2nd User  
> email: user2@example.com  
> password: 12345678

## Built With

- [Node.js](https://nodejs.org/en) - JavaScript runtime
- [Express](https://expressjs.com/) - Web application framework for Node.js
- [Express-handlebars](https://www.npmjs.com/package/express-handlebars) - Template engine
- [MySQL](https://www.mysql.com/) - Relational database management system
- [Sequelize](https://sequelize.org/) - Promise-based Node.js ORM for MySQL
- [Method-override](https://www.npmjs.com/package/method-override) - Middleware for HTTP method override in Express.js
- [Connect-flash](https://www.npmjs.com/package/connect-flash) - Middleware for displaying flash messages
- [Dotenv](https://www.npmjs.com/package/dotenv) - Module for loading environment variables
- [Passport](http://www.passportjs.org/) - Authentication middleware for Node.js
- [Passport-local](http://www.passportjs.org/packages/passport-local/) - Passport strategy for authenticating with a username and password
- [Passport-facebook](http://www.passportjs.org/packages/passport-facebook/) - Passport strategy for authenticating with Facebook using the OAuth 2.0 API
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs) - Library for hashing passwords
- [Font Awesome](https://fontawesome.com/) - Icon toolkit

## Authors

- **Donald Wong**

## Acknowledgments

- [ALPHA Camp](https://tw.alphacamp.co/)

