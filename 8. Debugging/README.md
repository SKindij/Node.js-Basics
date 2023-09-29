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

### Third-party Debugging Tools:

While Node.js offers built-in debugging capabilities, several third-party tools can enhance your debugging experience:








## Third-party tools







- - -

## ESLint
&emsp;To install the package only **for development** (locally) - ``npm install eslint --save-dev`` - because it is not needed in production. <br>
&emsp;To create a configuration file locally: ``./node_modules/.bin/eslint –init`` <br>
&emsp;Starts ESLint checking the specified file: ``./node_modules/.bin/eslint yourfile.js``. <br>

> One of the most popular linter settings is to use the Airbnb JavaScript Style.
> > ``npm install --save-dev eslint-config-airbnb``
> > > and add to your *.eslintrc* file _located at the root of your project_: ``{ "extends": "airbnb" }``

- - -

## An error in Node.js is any instance of the Error object.
&emsp;**Built-in error classes:**
  + ReferenceError (_an attempt to reach a non-existent reference_), 
  + RangeError (_occurs when a numeric variable or parameter is outside the permissible range_), 
  + TypeError (_occurs when an invalid type for a variable or parameter_), 
  + URIError (_!parameters_), 
  + EvalError (_occurs in global function eval_) 
  + SyntaxError (_occurs when parsing the source code of the eval function_).

> Here are some **examples of operational errors** in Node.js:
> > * The API request is not executed for some reason (for example, the server is down or the speed limit is exceeded).
> > * The user sends invalid data to the server, such as an invalid phone number or email address.
> > * The connection to the database is lost, possibly due to a faulty network connection.
> > * The OS cannot fulfill your request to open or write to the file.

> **Handling operational errors** includes considering whether an operation might fail, why it might fail, and what to do if it does.
> > 1. Report the error to the stack
> > 2. Repeat the operation
> > 3. Send the error to the client
> > 4. Interrupt the program.

&emsp;In addition to the built-in Error object classes, you can create your own to better represent the types of errors that may occur in your application. For example, you might have a **ValidationError** class for errors that occur when validating user input, a **DatabaseError** class for database operations, a **TimeoutError** class for operations that run out of assigned timeouts, and so on.

&emsp;Basically, **exceptions** are synchronous errors, and **rejections** are asynchronous errors.<br>
> >   There are four main error reporting strategies in Node.js: <br>
> >    \* try…catch blocks; * Callbacks; * Promises; * Event emitters.

- - -


