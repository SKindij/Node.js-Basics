# Debugging Node.js applications

Debugging is a critical process in software development that involves identifying and resolving errors or bugs in your code. In Node.js, you have access to both built-in and third-party debugging tools to streamline this process and ensure your applications run smoothly.

## Built-in tools

### Built-in Debugging with --inspect:

Node.js provides built-in debugging functionality through the ``--inspect`` flag. This flag enables remote debugging using debugger clients like Chrome DevTools or Visual Studio Code.\
To initiate debugging, follow these steps:
1. Type in the terminal: ``node --inspect app.js``
2. This will start your application and expose a debugging endpoint.

### Using Chrome Developer Tools:

The Chrome Developer Tools can be leveraged to debug Node.js applications effectively.\
Here's how you can do it:
1. Open Google Chrome and navigate to chrome://inspect.
2. Under the "Remote Target" section, you'll find your Node.js application listed.
3. Click "Inspect" to open the DevTools debugger.
4. You can set breakpoints, inspect variables, and step through your code as it executes.

### Adding Breakpoints and Using console.log():

Breakpoints and console.log() statements are essential tools for debugging Node.js applications. You can place breakpoints in your code to pause execution at specific points and inspect the program's state.

```javascript
  function divide(a, b) {
    // place a breakpoint here
    debugger;
    console.log(`Dividing ${a} by ${b}`);
    return a / b;
  }

  const result = divide(10, 2);
  console.log(`Result: ${result}`);
```

## Third-party Debugging Tools:

While Node.js offers built-in debugging capabilities, several third-party tools can enhance your debugging experience:

+ **Visual Studio Code (VS Code):** VS Code provides a feature-rich debugging experience for Node.js applications. It integrates seamlessly with the --inspect flag and offers a visual debugging interface.
+ **WebStorm:** WebStorm is a popular IDE for JavaScript and Node.js development. It includes powerful debugging features, making it a robust choice for debugging Node.js applications.
+ **Node Inspector:** Node Inspector is a standalone debugger for Node.js that provides a user-friendly interface for debugging. While not as popular as VS Code or WebStorm, it can be a useful tool in your debugging arsenal.

### Profiling and Memory Monitoring:

In addition to traditional debugging, Node.js supports profiling and memory monitoring to identify and resolve performance issues. Profiling tools like the built-in --inspect flag and third-party options can help you analyze CPU usage, memory leaks, and other performance-related problems.

```bash
  # Enable CPU profiling
  node --inspect --prof app.js

  # Enable memory profiling
  node --inspect --heapsnapshot-near-heap-limit=100 --heapsnapshot-signal=USR2 app.js
```

In summary, debugging Node.js applications is a crucial skill for developers. Whether you choose the built-in --inspect flag and Chrome DevTools or opt for third-party tools like Visual Studio Code or WebStorm, understanding how to set breakpoints, utilize console.log(), and profile your code will help you find and fix bugs efficiently, ensuring your applications run smoothly and efficiently.

- - -

# ESLint: Enforcing Code Quality in JavaScript

ESLint is a widely used JavaScript linter that helps developers maintain code quality, adhere to coding standards, and identify potential issues early in the development process.\
Here's how you can effectively integrate and configure ESLint into your Node.js project:

#### Installation:

ESLint can be installed locally (for development purposes) using npm. The ``--save-dev`` flag ensures that it's saved as a development dependency, as it's not required in production.

```bash
   npm install eslint --save-dev
```

#### Configuration:

To configure ESLint for your project, you need to create a configuration file. You can generate this file locally using ESLint's initialization wizard.

```bash
   ./node_modules/.bin/eslint --init
```

_This command will walk you through a series of questions to customize your ESLint configuration. It typically generates an .eslintrc.js file in your project's root directory._

#### Running ESLint:

Once configured, you can start ESLint to analyze and lint your JavaScript files. You can run ESLint on specific files or directories using the ESLint CLI.

```bash
   ./node_modules/.bin/eslint yourfile.js
```

## Popular Linter Settings:

### Airbnb JavaScript Style

The Airbnb JavaScript Style guide is a widely adopted set of coding standards and best practices. To use it with ESLint, you can follow these steps:

1. Install the Airbnb ESLint configuration package as a development dependency:
    * ``npm install --save-dev eslint-config-airbnb``
2. Add the Airbnb configuration to your .eslintrc.js file, located at the root of your project:
    * ```json
        {
          "extends": "airbnb"
        }
      ```

This configuration will enforce the Airbnb JavaScript Style guide in your project. You can further customize ESLint rules in your .eslintrc.js file to suit your project's specific needs.

#### Here are some other well-known ESLint configurations:

### Prettier

Prettier is a popular code formatter that enforces code formatting rules. When combined with ESLint, it ensures consistent code formatting alongside static analysis. You can install and use the eslint-config-prettier package to disable ESLint rules that conflict with Prettier.

> ``npm install --save-dev eslint-config-prettier``

```json
   {
     "extends": ["prettier"]
   }
```

### StandardJS

StandardJS is a strict and opinionated style guide that aims to minimize debates over coding styles. It provides a single configuration for ESLint that covers coding conventions, best practices, and code quality rules.

> ``npm install --save-dev eslint-config-standard``

```json
   {
     "extends": ["standard"]
   }
```

### Airbnb (with React)

If you're working on React projects, you can extend the Airbnb style guide specifically designed for React applications. Install the eslint-config-airbnb package along with eslint-plugin-react.

> ``npm install --save-dev eslint-config-airbnb eslint-plugin-react``

```json
   {
     "extends": ["airbnb", "airbnb/hooks"]
   }
```

### Google

Google's JavaScript style guide is used extensively in the industry. You can use the eslint-config-google package to enforce Google's coding standards in your project.

> ``npm install --save-dev eslint-config-google``

```json
   {
     "extends": ["google"]
   }
```

### TypeScript: 

If you're using TypeScript, you can extend ESLint configurations with TypeScript-specific rules. The @typescript-eslint/eslint-plugin and @typescript-eslint/parser packages are commonly used in combination with other ESLint configurations.

> ``npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser``

```json
   {
     "extends": ["airbnb", "plugin:@typescript-eslint/recommended"]
   }
```

In summary, ESLint is a valuable tool for maintaining code quality and consistency in your JavaScript projects. By configuring ESLint, you can catch potential issues early, enforce coding standards, and improve the overall quality of your codebase. The integration of popular configurations like Airbnb's style guide ensures that your code aligns with industry best practices.

- - -

# Understanding Errors in Node.js

In Node.js, errors are instances of the Error object or its subclasses, and they play a crucial role in handling exceptional situations in your applications.\
Here's a closer look at built-in error classes and common operational errors:

## Built-in Error Classes:

Node.js provides several built-in error classes, each serving specific purposes:

### ReferenceError

Occurs when you attempt to access a non-existent reference, like an undeclared variable.

```javascript
  try {
    console.log(nonExistentVariable);
  } catch (error) {
    console.error(error instanceof ReferenceError); // =>> true
    console.error(error); // =>> ReferenceError: nonExistentVariable is not defined
  }
```

### RangeError

Happens when a numeric variable or parameter goes outside its permissible range.

```javascript
  try {
    const arr = new Array(-1);
  } catch (error) {
    console.error(error instanceof RangeError); // =>> true
    console.error(error); // =>> RangeError: Invalid array length
  }
```

### TypeError

Arises when you use an invalid type for a variable or parameter.

```javascript
  try {
    const num = 'not a number';
    num.toFixed(2);
  } catch (error) {
   console.error(error instanceof TypeError); // =>> true
   console.error(error); // =>> TypeError: num.toFixed is not a function
  }
```

### URIError

Occurs when there are issues with URI-related operations.

```javascript
  try {
    decodeURIComponent('%');
  } catch (error) {
    console.error(error instanceof URIError); // =>> true
    console.error(error); // =>> VM40:5 URIError: URI malformed
  }
```

### EvalError

This error is deprecated and not commonly used. It occurs within the global function eval.

### SyntaxError

Happens when there are issues parsing the source code of the eval function.

```javascript
  try {
    eval('invalid code');
  } catch (error) {
    console.error(error instanceof SyntaxError); // =>> true
    console.error(error); // =>> SyntaxError: Unexpected identifier 'code'
  }
```

## Operational Errors:

Operational errors in Node.js typically relate to issues beyond code syntax and include scenarios like:
- Failed API requests due to server issues or exceeded rate limits.
- Invalid user input, such as an incorrect phone number or email address.
- Lost database connections due to network problems.
- Inability to open or write to a file due to permission issues.

## Error Handling Strategies:

When dealing with errors, it's essential to implement proper error handling strategies.\
Here are common approaches:

### Report to the Stack: 

Log the error details to the console or a log file for debugging purposes.

```javascript
  try {
    // Code that may throw an error
  } catch (error) {
    console.error(error.stack);
  }
```

### Retry Operations: 

Implement logic to retry the operation if it fails due to a recoverable error.

```javascript
  async function fetchDataWithRetry() {
    let retries = 3;
    while (retries > 0) {
      try {
        // code to fetch data
        return await fetchData();
      } catch (error) {
        console.error(`Error: ${error.message}`);
        retries--;
      }
    }
    throw new Error('Max retries reached');
  }
```

### Send Error to Client

In web applications, send appropriate error responses to the client with status codes and error messages.

```javascript
  app.get('/data', (req, res) => {
    try {
      // Fetch data
     res.send(data);
    } catch (error) {
     res.status(500).send('Internal Server Error');
    }
  });
```

### Program Termination: 

In some cases, it's necessary to terminate the program gracefully if a critical error occurs.

```javascript
  try {
    // Critical operation
  } catch (error) {
    console.error(`Critical error: ${error.message}`);
   process.exit(1); // Terminate with error code 1
  }
```

## Custom Error Classes

In addition to built-in error classes, you can create custom error classes tailored to your application's specific needs. For example, a ValidationError class for handling input validation errors, a DatabaseError class for database operations, or a TimeoutError class for handling timeouts.

```javascript
  class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = 'ValidationError';
    }
  }
```

## Exception vs. Rejection:

In Node.js, exceptions are synchronous errors that can be caught using try...catch blocks, while rejections are asynchronous errors typically encountered when working with Promises or async/await.

### Error Reporting Strategies:

Node.js provides multiple error reporting strategies, including:

+ **try...catch blocks**: For synchronous code error handling.
+ **Callbacks**: Common in Node.js, especially for asynchronous functions that follow the error-first callback pattern.
+ **Promises**: Using .catch() to handle errors in Promises.
+ **Event Emitters**: For custom event-based error handling.

In conclusion, understanding and effectively handling errors in Node.js is essential for building robust and reliable applications. Familiarity with built-in error classes, custom error classes, and various error handling strategies ensures that your code can gracefully handle exceptional situations and provide a better user experience.

- - -
