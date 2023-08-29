# Debugging Node.js applications using built-in and third-party tools

Debugging is the process of finding and fixing errors or bugs in software.

Node.js provides built-in debugging functionality through the --inspect flag and the Chrome Developer Tools.

The --inspect flag enables remote debugging using a debugger client like Chrome DevTools or Visual Studio Code.

To use the --inspect flag, you can start your Node.js application with node --inspect app.js.

The Chrome Developer Tools can be used to debug Node.js applications by navigating to chrome://inspect in the Chrome browser.

You can use the debugger statement in your code to set a breakpoint and pause the execution of your code at a certain point.

The console.log() method can be used to output messages to the console and help with debugging.

Third-party debugging tools for Node.js include Visual Studio Code, WebStorm, and Node Inspector.

In addition to traditional debugging, Node.js also supports profiling and memory monitoring to help identify performance issues.

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


