# Express

&emsp;It is a popular and widely used web application framework for Node.js. It simplifies the process of building web applications and APIs in Node.js by providing a set of powerful features and utilities. 

### Model-View-Controller

&emsp;MVC is a design pattern commonly used in software development, particularly in web application development. MVC helps to organize and separate different concerns within an application, making it more maintainable and scalable. 

**Model:**
+ It represents the data and the business logic of the application.
+ It is responsible for managing the state, data storage, and the rules and operations that apply to that data.
+ In a web application context, models often interact with databases to retrieve and manipulate data.
+ Models notify the View when data changes, allowing the View to update accordingly.

**View:**
+ It represents the user interface (UI) and how data is presented to the user.
+ It is responsible for rendering the data from the Model to the user in a way that is visually appealing and user-friendly.
+ It does not contain business logic; its main purpose is to display information and interact with user input.
+ In web applications, views are typically HTML templates combined with data from the Model.

**Controller:**
+ It acts as an intermediary between the Model and the View.
+ It receives user input and decides how to handle it, which may involve updating the Model and/or updating the View.
+ Controllers contain the application's logic, including handling user requests, making decisions based on that input, and updating the Model or View accordingly.
+ In web applications, controllers are responsible for defining routes and handling HTTP requests.

#### Here's how the MVC pattern works in a typical web application flow:
1. A user interacts with the application through the UI (View).
2. The View sends user input or requests to the Controller.
3. The Controller processes the input, interacts with the Model as needed (e.g., querying a database or updating data), and decides which View should be rendered.
4. The Controller updates the View with the necessary data from the Model.
5. The View displays the updated data to the user.
6. If the user interacts further, the cycle repeats.

#### Advantages of using the MVC pattern include:

+ **Separation of Concerns:**
  - MVC enforces a clear separation of responsibilities between data management, UI, and application logic.
  - This makes the codebase more organized and easier to maintain.
+ **Reusability:**
  - Because components are separated, you can reuse Models, Views, or Controllers in different parts of the application or in other projects.
+ **Testability:**
  - Each component (Model, View, and Controller) can be tested independently, making it easier to write unit tests for your application.
+ **Scalability:**
  - MVC allows you to scale your application by adding new views, models, or controllers without needing to overhaul the entire codebase.

&emsp;MVC is a fundamental pattern in web development, but variations and extensions exist, such as MVVM (Model-View-ViewModel) and MVP (Model-View-Presenter), tailored to specific needs and frameworks. The choice of which pattern to use depends on the requirements and architecture of your project.


## [ROUTES](https://github.com/SKindij/Node.js-Basics/tree/main/Express/ROUTES)

**An example of a simple project on this topic:**

```go
📁 ROUTES/
│
├─ package.json
├─ app.js
│
├─ 📁 controllers/
│   ├─ comments.js
│   ├─ users.js
│   └─ root.js
│
└─ 📁 routes/
    ├─ comments.js
    ├─ users.js
    ├─ root.js
    └─ index.js
```

## Middleware

&emsp;It is a fundamental concept in Express.js, allowing you to process incoming HTTP requests before they reach your route handlers or send responses after they've been processed. Middleware functions are executed sequentially in the order they are defined.\
&emsp;It can be used for tasks such as authentication, logging, data validation, and more. It allows you to chain multiple functions to process requests and responses.

### Writing Middleware Functions

It takes three parameters: request (req), response (res), and next.

**Here's a simple middleware function that logs the incoming request method and URL:**

```javascript
  function logRequest(req, res, next) {
    console.log(`Received ${req.method} request for ${req.url}`);
    next(); // to pass control to the next middleware in the chain
  }
```

### Using Middleware

Middleware can be used globally for all routes or applied to specific routes.

#### Global Middleware

To use middleware globally, you can add it to your Express application using app.use()

```javascript
  const express = require('express');
  const app = express();

  // use the logRequest middleware for all routes
  app.use(logRequest); 

  app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

  app.listen(3000, () => {
    console.log('Server started on port 3000');
  });
```

#### Route-Specific Middleware

You can apply middleware to specific routes directly within the route definition.

```javascript
  app.get('/profile', logRequest, (req, res) => {
    res.send('This is your profile.');
  });
```

### Middleware Chains

You can create middleware chains by defining multiple middleware functions in a row.

```javascript
  function authenticate(req, res, next) {
    // check if user is authenticated, and if not, redirect them to login page
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
  }

  app.get('/dashboard', authenticate, (req, res) => {
    res.send('Welcome to your dashboard.');
  });
```

### Error Handling Middleware

You can create it to handle errors that occur during request processing.

```javascript
  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Internal Server Error');
  });
```

When an error occurs in a previous middleware or route handler (e.g., ``next(err)``), Express will automatically route the request to this error-handling middleware.


### Third-Party Middleware

&emsp;Express also allows you to use third-party middleware packages to extend functionality. For example, **body-parser** for parsing request bodies, **cookie-parser** for working with cookies, and **express-session** for managing user sessions.

```javascript
  const bodyParser = require('body-parser');
  const cookieParser = require('cookie-parser');
  const session = require('express-session');

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(session({ secret: 'mysecretkey', resave: false, saveUninitialized: false }));
```

These third-party middleware packages can be added to your Express application to enhance its capabilities.


## Where It Is Appropriate to Use Express:

+ **API Development**
  - It is an excellent choice for building APIs, including RESTful APIs and GraphQL APIs, due to its simplicity and flexibility.
+ **Web Applications**
  - You can use Express to create web applications, whether for small projects or large-scale applications.
+ **Microservices**
  - It can be used to develop microservices, which are small, independent services that work together to form a larger application.
+ **Prototyping and Rapid Development**
  - It is well-suited for prototyping and rapid development of web applications and APIs, allowing developers to quickly get started.
+ **Single-Page Applications (SPAs)**
  - It can serve as the backend for SPAs built with frontend libraries/frameworks like React, Angular, or Vue.js.
+ **Real-Time Applications**
  - While not a real-time framework itself, it can be used with technologies like WebSockets (socket.io) to build real-time features.
